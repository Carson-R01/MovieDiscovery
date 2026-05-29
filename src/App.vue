<template>
  <main>
    <section
      class="hero"
      :style="{ backgroundImage: heroMovie?.backdropUrl ? `url(${heroMovie.backdropUrl})` : '' }"
    >
      <div class="hero-overlay">
        <nav class="container py-4 d-flex align-items-center justify-content-between gap-3">
          <button class="brand-button" type="button" @click="showHome">Movie Discovery</button>
          <div class="nav-actions">
            <button v-if="!currentUser" class="btn btn-outline-light" type="button" @click="openAuthPage">
              Sign in
            </button>
            <div v-else class="account-pill">
              <button class="account-profile-button" type="button" @click="showProfile">
                <img
                  v-if="currentUser.photoURL"
                  class="account-avatar"
                  :src="currentUser.photoURL"
                  :alt="currentUser.displayName || currentUser.email"
                />
                <span v-else class="account-avatar account-avatar-placeholder">
                  {{ initialsFor(currentUser.displayName || currentUser.email || 'User') }}
                </span>
                <span>{{ currentUser.displayName || currentUser.email }}</span>
              </button>
              <button class="btn btn-sm btn-outline-light" type="button" @click="logout">Sign out</button>
            </div>
            <button v-if="currentUser" class="btn btn-warning" type="button" @click="showWatchlist">
              Watchlist
              <span class="badge text-bg-dark ms-1">{{ watchlist.length }}</span>
            </button>
          </div>
        </nav>

        <div class="container hero-content">
          <p class="text-warning fw-semibold mb-2">Trending this week</p>
          <h1>{{ heroMovie?.title || 'Discover your next movie' }}</h1>
          <p class="hero-copy">{{ heroMovie?.overview || 'Search, filter, rate, and save movies with TMDB data.' }}</p>
          <button v-if="heroMovie" class="btn btn-light btn-lg" type="button" @click="openDetails(heroMovie)">
            View Details
          </button>
        </div>
      </div>
    </section>

    <section class="content-band">
      <div class="container py-4 py-lg-5">
        <div v-if="viewMode !== 'profile'" class="toolbar mb-4">
          <form class="search-form" @submit.prevent="runSearch">
            <div class="search-suggest">
              <input
                v-model="searchTerm"
                class="form-control form-control-lg"
                type="search"
                placeholder="Search movies"
                aria-label="Search movies"
                autocomplete="off"
                @focus="suggestionsOpen = searchSuggestions.length > 0"
                @keydown.escape="suggestionsOpen = false"
              />
              <div v-if="suggestionsOpen && searchSuggestions.length" class="suggestions-menu">
                <button
                  v-for="movie in searchSuggestions"
                  :key="movie.id"
                  class="suggestion-item"
                  type="button"
                  @mousedown.prevent="selectSuggestion(movie)"
                >
                  <img v-if="movie.posterUrl" :src="movie.posterUrl" :alt="movie.title" />
                  <span>
                    <strong>{{ movie.title }}</strong>
                    <small>{{ movie.year }}</small>
                  </span>
                </button>
              </div>
            </div>
            <button class="btn btn-warning btn-lg" type="submit">Search</button>
          </form>

          <select v-model="selectedGenre" class="form-select form-select-lg genre-select" aria-label="Filter by genre">
            <option value="">All genres</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
          </select>

          <select v-model="sortOption" class="form-select form-select-lg sort-select" aria-label="Sort movies">
            <option value="year">Year</option>
            <option value="rating-desc">Highest rating</option>
            <option value="rating-asc">Lowest rating</option>
            <option value="runtime-desc">Longest runtime</option>
            <option value="runtime-asc">Lowest runtime</option>
            <option value="title-asc">Alphabetical A-Z</option>
            <option value="title-desc">Alphabetical Z-A</option>
          </select>
        </div>

        <div v-if="authError" class="alert alert-warning auth-alert" role="alert">
          {{ authError }}
        </div>

        <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
          <div>
            <p class="section-kicker mb-1">{{ viewMode === 'watchlist' ? 'Saved picks' : viewMode === 'profile' ? 'Account' : 'Browse' }}</p>
            <h2 class="h3 mb-0">{{ pageTitle }}</h2>
          </div>
          <button v-if="viewMode === 'watchlist' || viewMode === 'profile'" class="btn btn-outline-light" type="button" @click="showHome">
            Back to Movies
          </button>
          <button v-else class="btn btn-outline-light" type="button" @click="browseAllMovies">
            Browse All
          </button>
        </div>

        <div v-if="loading" class="loading-state">Loading movies...</div>
        <div v-else-if="viewMode === 'watchlist' && watchlist.length === 0" class="empty-state">
          <div class="empty-state-content">
            <div class="empty-state-icon">LIST</div>
            <h3>Your watchlist is empty</h3>
            <p>Save movies you want to watch later, then mark them watched when you finish.</p>
            <div class="empty-state-actions">
              <button class="btn btn-warning" type="button" @click="showHome">Browse Trending</button>
              <button class="btn btn-outline-light" type="button" @click="browseAllMovies">Browse All Movies</button>
            </div>
          </div>
        </div>
        <div v-else-if="viewMode === 'watchlist'" class="watchlist-sections">
          <section class="watchlist-group">
            <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
              <div>
                <p class="section-kicker mb-1">Queue</p>
                <h3 class="h4 mb-0">To Watch</h3>
              </div>
              <span class="text-secondary small">{{ unwatchedMovies.length }} movies</span>
            </div>

            <div v-if="unwatchedMovies.length === 0" class="empty-state compact-state">
              <div class="empty-state-content">
                <div class="empty-state-icon">DONE</div>
                <h3>Nothing waiting right now</h3>
                <p>Everything in your watchlist has been marked watched.</p>
                <button class="btn btn-sm btn-outline-light" type="button" @click="browseAllMovies">Find More Movies</button>
              </div>
            </div>
            <div v-else class="row g-4">
              <div v-for="movie in sortedUnwatchedMovies" :key="movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard
                  :movie="movie"
                  :is-watchlisted="isWatchlisted(movie.id)"
                  :can-use-watchlist="Boolean(currentUser)"
                  :can-mark-watched="Boolean(currentUser)"
                  @select="openDetails"
                  @toggle-watchlist="toggleWatchlist"
                  @toggle-watched="toggleWatched"
                />
              </div>
            </div>
          </section>

          <section class="watchlist-group">
            <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
              <div>
                <p class="section-kicker mb-1">Finished</p>
                <h3 class="h4 mb-0">Watched</h3>
              </div>
              <span class="text-secondary small">{{ watchedMovies.length }} movies</span>
            </div>

            <div v-if="watchedMovies.length === 0" class="empty-state compact-state">
              <div class="empty-state-content">
                <div class="empty-state-icon">RATE</div>
                <h3>No watched movies yet</h3>
                <p>Mark movies as watched to unlock personal ratings and private reviews.</p>
              </div>
            </div>
            <div v-else class="row g-4">
              <div v-for="movie in sortedWatchedMovies" :key="movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard
                  :movie="movie"
                  :is-watchlisted="isWatchlisted(movie.id)"
                  :can-use-watchlist="Boolean(currentUser)"
                  :can-mark-watched="Boolean(currentUser)"
                  @select="openDetails"
                  @toggle-watchlist="toggleWatchlist"
                  @toggle-watched="toggleWatched"
                />
              </div>
            </div>
          </section>

        </div>
        <div v-else-if="viewMode === 'profile'" class="profile-dashboard">
          <section class="profile-summary">
            <div class="profile-identity">
              <img
                v-if="currentUser?.photoURL"
                class="profile-avatar"
                :src="currentUser.photoURL"
                :alt="currentUser.displayName || currentUser.email"
              />
              <div v-else class="profile-avatar profile-avatar-placeholder">
                {{ initialsFor(currentUser?.displayName || currentUser?.email || 'User') }}
              </div>
              <div>
                <p class="section-kicker mb-1">Profile</p>
                <h3>{{ currentUser?.displayName || currentUser?.email }}</h3>
                <p>{{ watchedMovies.length }} watched · {{ watchlist.length }} saved · {{ userPlaylists.length }} playlists · {{ recentlyViewed.length }} recent</p>
              </div>
            </div>
          </section>

          <section class="playlist-manager">
            <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
              <div>
                <p class="section-kicker mb-1">Playlists</p>
                <h3 class="h4 mb-0">Create Your Own Lists</h3>
              </div>
              <span v-if="playlistMessage" class="private-review-message">{{ playlistMessage }}</span>
            </div>

            <form class="playlist-form" @submit.prevent="createPlaylist">
              <input
                v-model="newPlaylistName"
                class="form-control form-control-lg"
                type="text"
                maxlength="40"
                placeholder="Playlist name"
                aria-label="Playlist name"
              />
              <button class="btn btn-warning btn-lg" type="submit">Create Playlist</button>
            </form>
          </section>

          <section v-if="userPlaylists.length === 0" class="empty-state">
            <div class="empty-state-content">
              <div class="empty-state-icon">LIST</div>
              <h3>No playlists yet</h3>
              <p>Create a playlist here, then add movies to it from their detail pages.</p>
            </div>
          </section>

          <section v-for="list in customListSections" :key="list.name" class="watchlist-group">
            <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
              <div>
                <p class="section-kicker mb-1">Playlist</p>
                <h3 class="h4 mb-0">{{ list.name }}</h3>
              </div>
              <div class="playlist-heading-actions">
                <span class="text-secondary small">{{ list.movies.length }} movies</span>
                <button class="btn btn-sm btn-outline-light" type="button" @click="deletePlaylist(list.name)">Delete</button>
              </div>
            </div>

            <div v-if="list.movies.length === 0" class="empty-state compact-state">
              <div class="empty-state-content">
                <div class="empty-state-icon">ADD</div>
                <h3>This playlist is empty</h3>
                <p>Add watchlisted movies to this playlist from their detail pages.</p>
              </div>
            </div>
            <div v-else class="row g-4">
              <div v-for="movie in list.movies" :key="`${list.name}-${movie.id}`" class="col-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard
                  :movie="movie"
                  :is-watchlisted="isWatchlisted(movie.id)"
                  :can-use-watchlist="Boolean(currentUser)"
                  :can-mark-watched="Boolean(currentUser)"
                  @select="openDetails"
                  @toggle-watchlist="toggleWatchlist"
                  @toggle-watched="toggleWatched"
                />
              </div>
            </div>
          </section>
        </div>
        <div v-else-if="sortedMovies.length === 0" class="empty-state">
          <div class="empty-state-content">
            <div class="empty-state-icon">FIND</div>
            <h3>{{ searchTerm ? `No movies found for "${searchTerm}"` : 'No movies found' }}</h3>
            <p>Try a different title, clear your filters, or jump back into trending movies.</p>
            <div class="empty-state-actions">
              <button class="btn btn-warning" type="button" @click="clearSearchAndShowTrending">Clear Search</button>
              <button class="btn btn-outline-light" type="button" @click="browseAllMovies">Browse All Movies</button>
            </div>
          </div>
        </div>
        <div v-else class="row g-4">
          <div v-for="movie in sortedMovies" :key="movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
            <MovieCard
              :movie="movie"
              :is-watchlisted="isWatchlisted(movie.id)"
              :can-use-watchlist="Boolean(currentUser)"
              :can-mark-watched="false"
              @select="openDetails"
              @toggle-watchlist="toggleWatchlist"
            />
          </div>
        </div>

        <div v-if="viewMode === 'browse-all' && sortedMovies.length" class="pagination-controls mt-4">
          <button class="btn btn-outline-light" type="button" :disabled="loading || discoverPage === 1" @click="goToBrowsePage(discoverPage - 1)">
            Previous
          </button>
          <button
            v-for="page in browsePageNumbers"
            :key="page"
            class="btn"
            :class="page === discoverPage ? 'btn-warning' : 'btn-outline-light'"
            type="button"
            :disabled="loading"
            @click="goToBrowsePage(page)"
          >
            {{ page }}
          </button>
          <button class="btn btn-outline-light" type="button" :disabled="loading" @click="goToBrowsePage(discoverPage + 1)">
            Next
          </button>
        </div>

        <div v-if="viewMode === 'home' && recentlyViewedMovies.length" class="recommendations-section">
          <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
            <div>
              <p class="section-kicker mb-1">Your history</p>
              <h2 class="h3 mb-0">Recently Viewed</h2>
            </div>
          </div>

          <div class="row g-4">
            <div v-for="movie in recentlyViewedMovies" :key="`home-recent-${movie.id}`" class="col-6 col-md-4 col-lg-3 col-xl-2">
              <MovieCard
                :movie="movie"
                :is-watchlisted="isWatchlisted(movie.id)"
                :can-use-watchlist="Boolean(currentUser)"
                :can-mark-watched="false"
                @select="openDetails"
                @toggle-watchlist="toggleWatchlist"
              />
            </div>
          </div>
        </div>

        <footer class="tmdb-footer">
          <p>
            Movie data and images provided by
            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB</a>.
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </footer>
      </div>
    </section>

    <Transition name="detail-page-transition" mode="out-in">
      <section v-if="selectedMovie" :key="selectedMovie.id" class="detail-page">
        <div class="container py-5">
          <button class="btn btn-outline-light mb-4" type="button" @click="closeDetails">Back</button>

          <div class="detail-trailer-hero mb-4">
            <iframe
              v-if="selectedMovie.trailer"
              :src="selectedMovie.trailer.embedUrl"
              :title="`${selectedMovie.title} trailer`"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              v-else
              class="detail-trailer-fallback"
            :style="{ backgroundImage: selectedMovie.backdropUrl ? `url(${selectedMovie.backdropUrl})` : '' }"
          >
            <div class="trailer-empty-content">
              <div class="empty-state-icon">PLAY</div>
              <h3>No trailer available</h3>
              <p>TMDB does not have a trailer for this movie yet.</p>
            </div>
          </div>
          </div>

          <div class="row g-4 align-items-start">
            <div class="col-md-4 col-lg-3 detail-poster-column">
              <img
                v-if="selectedMovie.posterUrl"
                class="detail-poster"
                :src="selectedMovie.posterUrl"
                :alt="selectedMovie.title"
              />
            </div>
            <div class="col-md-8 col-lg-9 detail-copy-column">
              <div class="detail-meta mb-3">
                <span class="rating-score badge text-bg-warning">{{ selectedMovie.rating }}</span>
                <button class="reviews-toggle-button" type="button" @click="toggleReviews">
                  {{ showReviews ? 'Hide Reviews' : 'See Reviews' }}
                </button>
                <span v-if="selectedMovie.contentRating" class="content-rating-badge">{{ selectedMovie.contentRating }}</span>
                <span>{{ selectedMovie.year }}</span>
                <span v-if="selectedMovie.runtime">{{ formatRuntime(selectedMovie.runtime) }}</span>
              </div>
              <h2 class="display-5 fw-bold">{{ selectedMovie.title }}</h2>
              <p class="lead text-secondary">{{ selectedMovie.overview }}</p>

              <div class="d-flex flex-wrap gap-2 mb-4">
                <span v-for="genre in detailGenres" :key="genre.id" class="badge rounded-pill text-bg-secondary">
                  {{ genre.name }}
                </span>
              </div>

              <div class="detail-actions">
                <button
                  v-if="currentUser"
                  class="btn btn-lg"
                  :class="isWatchlisted(selectedMovie.id) ? 'btn-success' : 'btn-warning'"
                  type="button"
                  @click="toggleWatchlist(selectedMovie)"
                >
                  {{ isWatchlisted(selectedMovie.id) ? 'Remove from Watchlist' : 'Add to Watchlist' }}
                </button>
              </div>

              <div v-if="currentUser && selectedWatchlistMovie" class="custom-list-panel mt-4">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <p class="section-kicker mb-1">Lists</p>
                    <h3 class="h4 mb-0">Custom Lists</h3>
                  </div>
                  <span v-if="customListMessage" class="private-review-message">{{ customListMessage }}</span>
                </div>

                <div class="custom-list-buttons">
                  <button
                    v-for="list in userPlaylists"
                    :key="list"
                    class="custom-list-button"
                    :class="{ 'custom-list-button-active': movieIsInCustomList(list) }"
                    type="button"
                    @click="toggleCustomList(list)"
                  >
                    {{ list }}
                  </button>
                </div>
                <p v-if="userPlaylists.length === 0" class="custom-list-empty mb-0">
                  Create playlists from your profile, then add this movie to them here.
                </p>
              </div>

              <div v-if="canWritePrivateReview" class="private-review-entry mt-4">
                <button class="btn btn-outline-warning" type="button" @click="togglePrivateReviewForm">
                  {{ showPrivateReviewForm ? 'Hide Private Review' : privateReviewButtonLabel }}
                </button>
              </div>

              <div v-if="canWritePrivateReview && showPrivateReviewForm" class="private-review-section mt-4">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <p class="section-kicker mb-1">Private</p>
                    <h3 class="h4 mb-0">Your Rating & Review</h3>
                  </div>
                  <span v-if="privateReviewMessage" class="private-review-message">{{ privateReviewMessage }}</span>
                </div>

                <form class="private-review-form" @submit.prevent="savePrivateReview">
                  <label>
                    Rating
                    <select v-model="personalRating" class="form-select" aria-label="Your personal rating">
                      <option value="">No rating</option>
                      <option v-for="score in personalRatingOptions" :key="score" :value="score">
                        {{ score }}/10
                      </option>
                    </select>
                  </label>

                  <label>
                    Review
                    <textarea
                      v-model="privateReview"
                      class="form-control"
                      rows="5"
                      maxlength="1200"
                      placeholder="Write private notes about this movie"
                    ></textarea>
                  </label>

                  <div class="private-review-actions">
                    <small>{{ privateReview.length }}/1200</small>
                    <button class="btn btn-warning" type="submit" :disabled="privateReviewSaving">
                      {{ privateReviewSaving ? 'Saving...' : 'Save Review' }}
                    </button>
                  </div>
                </form>
              </div>

              <div v-else-if="currentUser && selectedWatchlistMovie && !selectedWatchlistMovie.watched" class="private-review-locked mt-4">
                Mark this movie as watched from your watchlist to add a private rating and review.
              </div>

              <div v-if="showReviews" class="reviews-section mt-4">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <p class="section-kicker mb-1">Audience</p>
                    <h3 class="h4 mb-0">Reviews</h3>
                  </div>
                  <span class="text-secondary small">{{ movieReviews.length }} reviews</span>
                </div>

                <div v-if="movieReviews.length" class="review-list">
                  <article v-for="review in movieReviews" :key="review.id" class="review-card">
                    <div class="review-header">
                      <img
                        v-if="review.avatarUrl"
                        class="review-avatar"
                        :src="review.avatarUrl"
                        :alt="review.author"
                      />
                      <div v-else class="review-avatar review-avatar-placeholder">
                        {{ initialsFor(review.author) }}
                      </div>
                      <div class="review-meta">
                        <h4>{{ review.author }}</h4>
                        <p>
                          <span v-if="review.created_at">{{ formatDate(review.created_at) }}</span>
                        </p>
                      </div>
                      <span v-if="review.rating" class="review-score">{{ review.rating }}/10</span>
                    </div>
                    <p class="review-content" :class="{ 'review-content-expanded': expandedReviewIds.includes(review.id) }">
                      {{ review.content }}
                    </p>
                    <button
                      v-if="review.content?.length > 420"
                      class="btn btn-sm btn-outline-light"
                      type="button"
                      @click="toggleExpandedReview(review.id)"
                    >
                      {{ expandedReviewIds.includes(review.id) ? 'Show Less' : 'See Full Review' }}
                    </button>
                  </article>
                </div>
                <div v-else class="empty-state compact-state">
                  <div class="empty-state-content">
                    <div class="empty-state-icon">REV</div>
                    <h3>No reviews yet</h3>
                    <p>There are no TMDB reviews for this movie right now.</p>
                  </div>
                </div>
              </div>

              <div class="watch-provider-section mt-5">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <p class="section-kicker mb-1">Availability</p>
                    <h3 class="h4 mb-0">Where to Watch</h3>
                  </div>
                  <a
                    v-if="selectedMovie.watchProviders?.link"
                    class="btn btn-sm btn-outline-light"
                    :href="selectedMovie.watchProviders.link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on TMDB
                  </a>
              </div>

              <div v-if="selectedMovie.homepage" class="official-provider-link mb-4">
                <h4>Official</h4>
                <a
                  class="provider-pill provider-pill-link"
                  :href="selectedMovie.homepage"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="provider-fallback-logo">WEB</span>
                  <span>Official Website</span>
                </a>
              </div>

              <div v-if="watchProviderGroups.length" class="watch-provider-groups">
                <div v-for="group in watchProviderGroups" :key="group.label" class="watch-provider-group">
                    <h4>{{ group.label }}</h4>
                    <div class="provider-list">
                      <div v-for="provider in group.providers" :key="provider.provider_id" class="provider-pill">
                        <img
                          v-if="provider.logoUrl"
                          :src="provider.logoUrl"
                          :alt="provider.provider_name"
                        />
                        <span>{{ provider.provider_name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="empty-state compact-state">
                  <div class="empty-state-content">
                    <div class="empty-state-icon">US</div>
                    <h3>No streaming options found</h3>
                    <p>TMDB does not list US streaming, rental, or purchase options for this movie yet.</p>
                  </div>
                </div>
              </div>

              <div v-if="featuredCast.length" class="cast-section mt-5">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <h3 class="mb-1">Cast</h3>
                  </div>
                </div>

                <div class="cast-grid">
                  <button
                    v-for="person in featuredCast"
                    :key="person.cast_id || person.credit_id || person.id"
                    class="cast-card"
                    type="button"
                    @click="openPersonProfile(person)"
                  >
                    <img
                      v-if="person.profileUrl"
                      class="cast-photo"
                      :src="person.profileUrl"
                      :alt="person.name"
                    />
                    <div v-else class="cast-photo cast-photo-placeholder">
                      {{ initialsFor(person.name) }}
                    </div>
                    <div class="cast-copy">
                      <h4>{{ person.name }}</h4>
                      <p>{{ person.character || 'Cast member' }}</p>
                    </div>
                  </button>
                </div>
              </div>

              <div v-if="similarMovies.length" class="similar-movies-section mt-5">
                <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                  <div>
                    <p class="section-kicker mb-1">More like this</p>
                    <h3 class="h4 mb-0">Similar Movies</h3>
                  </div>
                </div>

                <div class="horizontal-movie-row">
                  <div v-for="movie in similarMovies" :key="movie.id" class="horizontal-movie-item">
                    <MovieCard
                      :movie="movie"
                      :is-watchlisted="isWatchlisted(movie.id)"
                      :can-use-watchlist="Boolean(currentUser)"
                      :can-mark-watched="false"
                      @select="openDetails"
                      @toggle-watchlist="toggleWatchlist"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>

    <section v-if="selectedPerson || personLoading" class="profile-page">
      <div class="container py-5">
        <button class="btn btn-outline-light mb-4" type="button" @click="closePersonProfile">Back to Movie</button>

        <div v-if="personLoading" class="loading-state">Loading profile...</div>
        <div v-else-if="selectedPerson" class="row g-4 align-items-start">
          <div class="col-md-4 col-lg-3">
            <img
              v-if="selectedPerson.profileUrl"
              class="detail-poster"
              :src="selectedPerson.profileUrl"
              :alt="selectedPerson.name"
            />
            <div v-else class="profile-photo-placeholder">
              {{ initialsFor(selectedPerson.name) }}
            </div>
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="detail-meta mb-3">
              <span>{{ selectedPerson.known_for_department || 'Film' }}</span>
              <span v-if="selectedPerson.birthday">Born {{ selectedPerson.birthday }}</span>
              <span v-if="selectedPerson.place_of_birth">{{ selectedPerson.place_of_birth }}</span>
            </div>

            <h2 class="display-5 fw-bold">{{ selectedPerson.name }}</h2>
            <p class="lead text-secondary profile-bio">
              {{ selectedPerson.biography || 'No biography available.' }}
            </p>

            <div class="profile-credits mt-5">
              <p class="section-kicker mb-1">Filmography</p>
              <h3 class="h4 mb-3">Movies</h3>

              <div v-if="personMovieCredits.length === 0" class="empty-state compact-state">
                <div class="empty-state-content">
                  <div class="empty-state-icon">CAST</div>
                  <h3>No movie credits found</h3>
                  <p>TMDB does not list movie credits for this person yet.</p>
                </div>
              </div>
              <div v-else class="row g-4">
                <div v-for="movie in personMovieCredits" :key="movie.credit_id || movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
                  <MovieCard
                    :movie="movie"
                    :is-watchlisted="isWatchlisted(movie.id)"
                    :can-use-watchlist="Boolean(currentUser)"
                    @select="openDetailsFromPerson"
                    @toggle-watchlist="toggleWatchlist"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="showAuthPage" class="auth-page">
      <div class="auth-shell">
        <button class="btn btn-outline-light auth-close" type="button" @click="closeAuthPage">Close</button>

        <div class="auth-panel">
          <p class="section-kicker mb-1">Account</p>
          <h2>{{ authMode === 'signin' ? 'Sign in' : 'Create account' }}</h2>

          <form class="auth-form" @submit.prevent="submitEmailAuth">
            <label>
              Email
              <input
                v-model="authEmail"
                class="form-control form-control-lg"
                type="email"
                autocomplete="email"
                required
              />
            </label>

            <label>
              Password
              <input
                v-model="authPassword"
                class="form-control form-control-lg"
                type="password"
                autocomplete="current-password"
                minlength="6"
                required
              />
            </label>

            <div v-if="authError" class="alert alert-warning auth-alert" role="alert">
              {{ authError }}
            </div>

            <button class="btn btn-warning btn-lg" type="submit" :disabled="authLoading">
              {{ authLoading ? 'Working...' : authMode === 'signin' ? 'Sign in with Email' : 'Create Account' }}
            </button>
          </form>

          <div class="auth-divider"><span>or</span></div>

          <button class="btn btn-outline-light btn-lg w-100" type="button" :disabled="authLoading" @click="loginWithGoogle">
            Continue with Google
          </button>

          <button class="auth-mode-button" type="button" @click="toggleAuthMode">
            {{ authMode === 'signin' ? 'Create an email account' : 'Already have an account? Sign in' }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import MovieCard from './components/MovieCard.vue';
import {
  discoverMovies,
  getGenres,
  getMovieDetails,
  getPersonProfile,
  getSearchSuggestions,
  getTrendingMovies,
  getWatchlistRecommendations,
  searchMovies
} from './services/tmdb';
import {
  createAccountWithEmail,
  loadUserProfile,
  loadUserWatchlist,
  removeUserWatchlistMovie,
  saveUserPlaylists,
  saveUserRecentlyViewed,
  saveUserWatchlistMovie,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  subscribeToUser,
  updateUserWatchlistMovie
} from './services/watchlist';

const movies = ref([]);
const genres = ref([]);
const watchlist = ref(JSON.parse(localStorage.getItem('movie-watchlist') || '[]'));
const currentUser = ref(null);
const searchTerm = ref('');
const searchSuggestions = ref([]);
const suggestionsOpen = ref(false);
const selectedGenre = ref('');
const sortOption = ref('year');
const selectedMovie = ref(null);
const selectedPerson = ref(null);
const loading = ref(true);
const authError = ref('');
const authEmail = ref('');
const authPassword = ref('');
const authLoading = ref(false);
const authMode = ref('signin');
const showAuthPage = ref(false);
const personLoading = ref(false);
const recommendations = ref([]);
const recommendationsLoading = ref(false);
const showReviews = ref(false);
const expandedReviewIds = ref([]);
const viewMode = ref('home');
const discoverPage = ref(1);
const runtimeByMovieId = ref({});
const contentRatingByMovieId = ref({});
const personalRating = ref('');
const privateReview = ref('');
const privateReviewSaving = ref(false);
const privateReviewMessage = ref('');
const showPrivateReviewForm = ref(false);
const customListMessage = ref('');
const userPlaylists = ref([]);
const recentlyViewed = ref([]);
const newPlaylistName = ref('');
const playlistMessage = ref('');
let recommendationsRequestId = 0;
let personRequestId = 0;
let suggestionsRequestId = 0;
let contentRatingsRequestId = 0;
let suggestionsTimer = null;
let unsubscribeFromUser = null;

const heroMovie = computed(() => movies.value[0]);

const visibleMovies = computed(() => (viewMode.value === 'watchlist' ? watchlist.value : movies.value));

const unwatchedMovies = computed(() => watchlist.value.filter((movie) => !movie.watched));

const watchedMovies = computed(() => watchlist.value.filter((movie) => movie.watched));

const filteredMovies = computed(() => {
  if (!selectedGenre.value) {
    return visibleMovies.value;
  }

  return visibleMovies.value.filter((movie) => {
    const ids = movie.genre_ids || movie.genres?.map((genre) => genre.id) || [];
    return ids.includes(Number(selectedGenre.value));
  });
});

const sortedMovies = computed(() => {
  return sortMovies(filteredMovies.value).map(withCardMetadata);
});

const sortedUnwatchedMovies = computed(() => sortMovies(unwatchedMovies.value).map(withCardMetadata));

const sortedWatchedMovies = computed(() => sortMovies(watchedMovies.value).map(withCardMetadata));

const customListSections = computed(() =>
  userPlaylists.value.map((name) => ({
    name,
    movies: sortMovies(watchlist.value.filter((movie) => movie.customLists?.includes(name))).map(withCardMetadata)
  }))
);

const recentlyViewedMovies = computed(() => recentlyViewed.value.map(withCardMetadata));

const selectedWatchlistMovie = computed(() => {
  if (!selectedMovie.value) {
    return null;
  }

  return watchlist.value.find((movie) => movie.id === selectedMovie.value.id) || null;
});

const canWritePrivateReview = computed(() => Boolean(currentUser.value && selectedWatchlistMovie.value?.watched));

const personalRatingOptions = computed(() => Array.from({ length: 10 }, (_, index) => index + 1));

const privateReviewButtonLabel = computed(() => {
  if (selectedWatchlistMovie.value?.personalRating || selectedWatchlistMovie.value?.privateReview) {
    return 'Edit Private Review';
  }

  return 'Add Private Review';
});

const browsePageNumbers = computed(() => {
  const start = Math.max(1, discoverPage.value - 2);
  return Array.from({ length: 5 }, (_, index) => start + index);
});

function sortMovies(movieList) {
  const moviesToSort = [...movieList];

  return moviesToSort.sort((a, b) => {
    switch (sortOption.value) {
      case 'rating-desc':
        return scoreFor(b) - scoreFor(a);
      case 'rating-asc':
        return scoreFor(a) - scoreFor(b);
      case 'runtime-desc':
        return runtimeForSort(b, -1) - runtimeForSort(a, -1);
      case 'runtime-asc':
        return runtimeForSort(a, Number.MAX_SAFE_INTEGER) - runtimeForSort(b, Number.MAX_SAFE_INTEGER);
      case 'title-asc':
        return titleFor(a).localeCompare(titleFor(b));
      case 'title-desc':
        return titleFor(b).localeCompare(titleFor(a));
      case 'year':
      default:
        return yearFor(b) - yearFor(a);
    }
  });
}

const pageTitle = computed(() => {
  if (viewMode.value === 'watchlist') {
    return 'Your Watchlist';
  }

  if (viewMode.value === 'profile') {
    return 'Your Profile';
  }

  if (viewMode.value === 'browse-all') {
    return 'Browse All Movies';
  }

  return searchTerm.value ? `Results for "${searchTerm.value}"` : 'Trending Movies';
});

const detailGenres = computed(() => {
  if (!selectedMovie.value) {
    return [];
  }

  if (selectedMovie.value.genres) {
    return selectedMovie.value.genres;
  }

  return genres.value.filter((genre) => selectedMovie.value.genre_ids?.includes(genre.id));
});

const featuredCast = computed(() => selectedMovie.value?.credits?.cast?.slice(0, 12) || []);

const movieReviews = computed(() => selectedMovie.value?.reviews?.slice(0, 5) || []);

const similarMovies = computed(() => {
  if (!selectedMovie.value) {
    return [];
  }

  return (selectedMovie.value.similarMovies || [])
    .filter((movie) => movie.id !== selectedMovie.value.id)
    .filter((movie) => movie.posterUrl)
    .slice(0, 12);
});

const watchProviderGroups = computed(() => {
  const providers = selectedMovie.value?.watchProviders;

  if (!providers) {
    return [];
  }

  return [
    { label: 'Stream', providers: providers.flatrate || [] },
    { label: 'Rent', providers: providers.rent || [] },
    { label: 'Buy', providers: providers.buy || [] }
  ].filter((group) => group.providers.length);
});

const personMovieCredits = computed(() => {
  const seen = new Set();

  return (selectedPerson.value?.movieCredits?.cast || [])
    .filter((movie) => movie.posterUrl)
    .filter((movie) => {
      if (seen.has(movie.id)) {
        return false;
      }

      seen.add(movie.id);
      return true;
    })
    .sort((a, b) => {
      const dateA = a.release_date || '';
      const dateB = b.release_date || '';
      return dateB.localeCompare(dateA);
    })
    .slice(0, 18);
});

function persistGuestWatchlist() {
  localStorage.setItem('movie-watchlist', JSON.stringify(watchlist.value));
}

function isWatchlisted(id) {
  return watchlist.value.some((movie) => movie.id === id);
}

function scoreFor(movie) {
  return Number(movie.vote_average || movie.rating || 0);
}

function yearFor(movie) {
  return Number(movie.release_date?.slice(0, 4) || movie.year || 0);
}

function titleFor(movie) {
  return movie.title || movie.name || '';
}

function runtimeFor(movie) {
  return Number(runtimeByMovieId.value[movie.id] || movie.runtime || 0);
}

function runtimeForSort(movie, fallback) {
  return runtimeFor(movie) || fallback;
}

function withCardMetadata(movie) {
  return {
    ...movie,
    contentRating: movie.contentRating || contentRatingByMovieId.value[movie.id] || ''
  };
}

function recentlyViewedMovieFor(movie) {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview || '',
    poster_path: movie.poster_path || '',
    backdrop_path: movie.backdrop_path || '',
    posterUrl: movie.posterUrl || '',
    backdropUrl: movie.backdropUrl || '',
    homepage: movie.homepage || '',
    release_date: movie.release_date || '',
    vote_average: movie.vote_average || 0,
    genre_ids: movie.genre_ids || movie.genres?.map((genre) => genre.id) || [],
    year: movie.year || '',
    rating: movie.rating || 'NR',
    contentRating: movie.contentRating || '',
    runtime: movie.runtime || null,
    viewedAt: new Date().toISOString()
  };
}

function movieIsInCustomList(listName) {
  return selectedWatchlistMovie.value?.customLists?.includes(listName) || false;
}

function formatRuntime(minutes) {
  const runtime = Number(minutes);

  if (!runtime) {
    return '';
  }

  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;

  if (!hours) {
    return `${remainingMinutes}m`;
  }

  if (!remainingMinutes) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}m`;
}

async function toggleWatchlist(movie) {
  authError.value = '';

  if (isWatchlisted(movie.id)) {
    watchlist.value = watchlist.value.filter((item) => item.id !== movie.id);
    try {
      await removeUserWatchlistMovie(currentUser.value?.uid, movie.id);
    } catch (error) {
      authError.value = error.message || 'Unable to update your account watchlist.';
    }
  } else {
    watchlist.value = [movie, ...watchlist.value];
    try {
      await saveUserWatchlistMovie(currentUser.value?.uid, movie);
    } catch (error) {
      authError.value = error.message || 'Unable to update your account watchlist.';
    }
  }

  if (!currentUser.value) {
    persistGuestWatchlist();
  }

  loadRecommendations();
}

async function toggleWatched(movie) {
  authError.value = '';
  const watched = !movie.watched;
  const watchedAt = watched ? new Date().toISOString() : null;
  const displayWatchedAt = watched ? formatDate(watchedAt) : null;
  watchlist.value = watchlist.value.map((item) =>
    item.id === movie.id ? { ...item, watched, watchedAt: displayWatchedAt } : item
  );

  try {
    await updateUserWatchlistMovie(currentUser.value?.uid, movie.id, { watched, watchedAt });
  } catch (error) {
    authError.value = error.message || 'Unable to update watched status.';
  }

  loadRecommendations();
}

async function savePrivateReview() {
  if (!currentUser.value || !selectedWatchlistMovie.value) {
    return;
  }

  authError.value = '';
  privateReviewMessage.value = '';
  privateReviewSaving.value = true;

  const updates = {
    personalRating: personalRating.value ? Number(personalRating.value) : null,
    privateReview: privateReview.value.trim(),
    privateReviewUpdatedAt: new Date().toISOString()
  };

  watchlist.value = watchlist.value.map((item) =>
    item.id === selectedWatchlistMovie.value.id ? { ...item, ...updates } : item
  );

  try {
    await updateUserWatchlistMovie(currentUser.value.uid, selectedWatchlistMovie.value.id, updates);
    privateReviewMessage.value = 'Saved';
  } catch (error) {
    authError.value = error.message || 'Unable to save your private review.';
    privateReviewMessage.value = '';
  } finally {
    privateReviewSaving.value = false;
  }
}

async function toggleCustomList(listName) {
  if (!currentUser.value || !selectedWatchlistMovie.value) {
    return;
  }

  authError.value = '';
  customListMessage.value = '';

  const currentLists = selectedWatchlistMovie.value.customLists || [];
  const isInList = currentLists.includes(listName);

  const nextLists = isInList
    ? currentLists.filter((list) => list !== listName)
    : [...currentLists, listName];

  watchlist.value = watchlist.value.map((item) =>
    item.id === selectedWatchlistMovie.value.id ? { ...item, customLists: nextLists } : item
  );

  try {
    await updateUserWatchlistMovie(currentUser.value.uid, selectedWatchlistMovie.value.id, { customLists: nextLists });
    customListMessage.value = isInList ? 'Removed' : 'Added';
  } catch (error) {
    authError.value = error.message || 'Unable to update custom list.';
    customListMessage.value = '';
  }
}

async function createPlaylist() {
  const name = newPlaylistName.value.trim().replace(/\s+/g, ' ');

  authError.value = '';
  playlistMessage.value = '';

  if (!currentUser.value || !name) {
    return;
  }

  if (userPlaylists.value.some((playlist) => playlist.toLowerCase() === name.toLowerCase())) {
    playlistMessage.value = 'Playlist already exists';
    return;
  }

  const nextPlaylists = [...userPlaylists.value, name];
  userPlaylists.value = nextPlaylists;
  newPlaylistName.value = '';

  try {
    await saveUserPlaylists(currentUser.value.uid, nextPlaylists);
    playlistMessage.value = 'Playlist created';
  } catch (error) {
    authError.value = error.message || 'Unable to create playlist.';
    playlistMessage.value = '';
  }
}

async function deletePlaylist(name) {
  if (!currentUser.value) {
    return;
  }

  authError.value = '';
  playlistMessage.value = '';

  const nextPlaylists = userPlaylists.value.filter((playlist) => playlist !== name);
  const affectedMovies = watchlist.value.filter((movie) => movie.customLists?.includes(name));

  userPlaylists.value = nextPlaylists;
  watchlist.value = watchlist.value.map((movie) => ({
    ...movie,
    customLists: movie.customLists?.filter((playlist) => playlist !== name) || []
  }));

  try {
    await saveUserPlaylists(currentUser.value.uid, nextPlaylists);
    await Promise.all(
      affectedMovies.map((movie) =>
        updateUserWatchlistMovie(currentUser.value.uid, movie.id, {
          customLists: movie.customLists.filter((playlist) => playlist !== name)
        })
      )
    );
    playlistMessage.value = 'Playlist deleted';
  } catch (error) {
    authError.value = error.message || 'Unable to delete playlist.';
    playlistMessage.value = '';
  }
}

async function trackRecentlyViewed(movie) {
  if (!currentUser.value || !movie?.id) {
    return;
  }

  const nextRecentlyViewed = [
    recentlyViewedMovieFor(movie),
    ...recentlyViewed.value.filter((item) => item.id !== movie.id)
  ].slice(0, 12);

  recentlyViewed.value = nextRecentlyViewed;

  try {
    await saveUserRecentlyViewed(currentUser.value.uid, nextRecentlyViewed);
  } catch (error) {
    authError.value = error.message || 'Unable to sync recently viewed movies.';
  }
}

function loadPrivateReviewFields() {
  personalRating.value = selectedWatchlistMovie.value?.personalRating || '';
  privateReview.value = selectedWatchlistMovie.value?.privateReview || '';
  privateReviewMessage.value = '';
  customListMessage.value = '';
}

function togglePrivateReviewForm() {
  showPrivateReviewForm.value = !showPrivateReviewForm.value;
}

function openAuthPage() {
  authError.value = '';
  showAuthPage.value = true;
}

function closeAuthPage() {
  showAuthPage.value = false;
  authError.value = '';
  authPassword.value = '';
}

function toggleAuthMode() {
  authError.value = '';
  authMode.value = authMode.value === 'signin' ? 'create' : 'signin';
}

async function submitEmailAuth() {
  authError.value = '';
  authLoading.value = true;

  try {
    if (authMode.value === 'signin') {
      await signInWithEmail(authEmail.value, authPassword.value);
    } else {
      await createAccountWithEmail(authEmail.value, authPassword.value);
    }

    closeAuthPage();
  } catch (error) {
    authError.value = error.message || 'Unable to authenticate.';
  } finally {
    authLoading.value = false;
  }
}

async function loginWithGoogle() {
  authError.value = '';
  authLoading.value = true;

  try {
    await signInWithGoogle();
    closeAuthPage();
  } catch (error) {
    authError.value = error.message || 'Unable to sign in.';
  } finally {
    authLoading.value = false;
  }
}

async function logout() {
  authError.value = '';

  try {
    await signOutUser();
  } catch (error) {
    authError.value = error.message || 'Unable to sign out.';
  }
}

async function handleAuthChange(user) {
  currentUser.value = user;
  authError.value = '';

  if (!user) {
    if (viewMode.value === 'watchlist' || viewMode.value === 'profile') {
      viewMode.value = 'home';
    }

    watchlist.value = JSON.parse(localStorage.getItem('movie-watchlist') || '[]');
    userPlaylists.value = [];
    recentlyViewed.value = [];
    loadRecommendations();
    return;
  }

  try {
    const [cloudWatchlist, profile] = await Promise.all([loadUserWatchlist(user.uid), loadUserProfile(user.uid)]);
    watchlist.value = cloudWatchlist.map((movie) => ({
      ...movie,
      watched: Boolean(movie.watched),
      watchedAt: normalizeWatchedAt(movie.watchedAt),
      personalRating: movie.personalRating || null,
      privateReview: movie.privateReview || '',
      privateReviewUpdatedAt: movie.privateReviewUpdatedAt || null,
      customLists: Array.isArray(movie.customLists) ? movie.customLists : []
    }));
    userPlaylists.value = normalizePlaylists(profile.playlists, watchlist.value);
    recentlyViewed.value = normalizeRecentlyViewed(profile.recentlyViewed);
    loadRecommendations();
  } catch (error) {
    authError.value = error.message || 'Unable to load your account watchlist.';
  }
}

function initialsFor(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}

function normalizeWatchedAt(value) {
  if (!value) {
    return null;
  }

  if (typeof value === 'string') {
    return formatDate(value);
  }

  if (typeof value.toDate === 'function') {
    return formatDate(value.toDate());
  }

  return null;
}

function normalizePlaylists(playlists = [], movies = []) {
  const names = new Set();

  playlists.forEach((playlist) => {
    if (typeof playlist === 'string' && playlist.trim()) {
      names.add(playlist.trim());
    }
  });

  movies.forEach((movie) => {
    movie.customLists?.forEach((playlist) => {
      if (playlist?.trim()) {
        names.add(playlist.trim());
      }
    });
  });

  return [...names];
}

function normalizeRecentlyViewed(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  const seen = new Set();

  return items
    .filter((movie) => movie?.id && !seen.has(movie.id) && seen.add(movie.id))
    .slice(0, 12);
}

function toggleReviews() {
  showReviews.value = !showReviews.value;
}

function toggleExpandedReview(id) {
  if (expandedReviewIds.value.includes(id)) {
    expandedReviewIds.value = expandedReviewIds.value.filter((reviewId) => reviewId !== id);
  } else {
    expandedReviewIds.value = [...expandedReviewIds.value, id];
  }
}

async function runSearch() {
  loading.value = true;
  viewMode.value = 'home';
  selectedMovie.value = null;
  suggestionsOpen.value = false;
  movies.value = await searchMovies(searchTerm.value);
  loading.value = false;
}

async function clearSearchAndShowTrending() {
  loading.value = true;
  searchTerm.value = '';
  selectedGenre.value = '';
  viewMode.value = 'home';
  selectedMovie.value = null;
  suggestionsOpen.value = false;
  searchSuggestions.value = [];
  movies.value = await getTrendingMovies();
  loading.value = false;
}

async function browseAllMovies() {
  viewMode.value = 'browse-all';
  selectedMovie.value = null;
  searchTerm.value = '';
  suggestionsOpen.value = false;
  await goToBrowsePage(1);
}

async function goToBrowsePage(page) {
  if (page < 1) {
    return;
  }

  loading.value = true;
  discoverPage.value = page;
  movies.value = await discoverMovies(page);
  loading.value = false;
}

async function selectSuggestion(movie) {
  searchTerm.value = movie.title;
  suggestionsOpen.value = false;
  searchSuggestions.value = [];
  await openDetails(movie);
}

async function loadSearchSuggestions(query) {
  const requestId = ++suggestionsRequestId;
  const suggestions = await getSearchSuggestions(query);

  if (requestId !== suggestionsRequestId) {
    return;
  }

  searchSuggestions.value = suggestions;
  suggestionsOpen.value = suggestions.length > 0 && searchTerm.value.trim().length >= 2;
}

async function loadRecommendations() {
  const requestId = ++recommendationsRequestId;

  if (!watchlist.value.length) {
    recommendations.value = [];
    recommendationsLoading.value = false;
    return;
  }

  recommendationsLoading.value = true;
  const results = await getWatchlistRecommendations(watchlist.value);

  if (requestId !== recommendationsRequestId) {
    return;
  }

  recommendations.value = results;
  recommendationsLoading.value = false;
}

async function loadRuntimesForCurrentMovies() {
  if (!sortOption.value.startsWith('runtime')) {
    return;
  }

  const moviesMissingRuntime = filteredMovies.value
    .filter((movie) => !runtimeFor(movie))
    .slice(0, 30);

  if (!moviesMissingRuntime.length) {
    return;
  }

  const details = await Promise.all(moviesMissingRuntime.map((movie) => getMovieDetails(movie.id)));
  const nextRuntimeByMovieId = { ...runtimeByMovieId.value };

  details.forEach((movie) => {
    if (movie?.runtime) {
      nextRuntimeByMovieId[movie.id] = movie.runtime;
    }
  });

  runtimeByMovieId.value = nextRuntimeByMovieId;
}

async function loadContentRatingsForCurrentMovies() {
  const requestId = ++contentRatingsRequestId;
  const moviesMissingContentRating = filteredMovies.value
    .filter((movie) => !movie.contentRating && !contentRatingByMovieId.value[movie.id])
    .slice(0, 24);

  if (!moviesMissingContentRating.length) {
    return;
  }

  const details = await Promise.all(moviesMissingContentRating.map((movie) => getMovieDetails(movie.id)));

  if (requestId !== contentRatingsRequestId) {
    return;
  }

  const nextContentRatingByMovieId = { ...contentRatingByMovieId.value };
  const nextRuntimeByMovieId = { ...runtimeByMovieId.value };

  details.forEach((movie) => {
    if (movie?.contentRating) {
      nextContentRatingByMovieId[movie.id] = movie.contentRating;
    }

    if (movie?.runtime) {
      nextRuntimeByMovieId[movie.id] = movie.runtime;
    }
  });

  contentRatingByMovieId.value = nextContentRatingByMovieId;
  runtimeByMovieId.value = nextRuntimeByMovieId;
}

async function openDetails(movie) {
  const details = await getMovieDetails(movie.id);
  selectedMovie.value = details || movie;
  trackRecentlyViewed(selectedMovie.value);
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
  if (details?.runtime) {
    runtimeByMovieId.value = {
      ...runtimeByMovieId.value,
      [details.id]: details.runtime
    };
  }
  if (details?.contentRating) {
    contentRatingByMovieId.value = {
      ...contentRatingByMovieId.value,
      [details.id]: details.contentRating
    };
  }
  selectedPerson.value = null;
  window.history.pushState({}, '', `#movie-${movie.id}`);
}

async function openDetailsFromPerson(movie) {
  await openDetails(movie);
  selectedPerson.value = null;
}

async function openPersonProfile(person) {
  const requestId = ++personRequestId;
  personLoading.value = true;
  selectedPerson.value = null;

  const profile = await getPersonProfile(person.id);

  if (requestId !== personRequestId) {
    return;
  }

  selectedPerson.value = profile || {
    ...person,
    biography: 'No profile available.',
    movieCredits: { cast: [] }
  };
  personLoading.value = false;
}

function closePersonProfile() {
  selectedPerson.value = null;
  personLoading.value = false;
}

function closeDetails() {
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
  window.history.pushState({}, '', window.location.pathname);
}

function showWatchlist() {
  viewMode.value = 'watchlist';
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
  window.history.pushState({}, '', window.location.pathname);
}

function showProfile() {
  viewMode.value = 'profile';
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
  playlistMessage.value = '';
  window.history.pushState({}, '', window.location.pathname);
}

function showHome() {
  viewMode.value = 'home';
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
  window.history.pushState({}, '', window.location.pathname);
}

async function syncDetailsFromHash() {
  const match = window.location.hash.match(/^#movie-(\d+)$/);

  if (!match) {
    selectedMovie.value = null;
    selectedPerson.value = null;
    showReviews.value = false;
    expandedReviewIds.value = [];
    showPrivateReviewForm.value = false;
    return;
  }

  const details = await getMovieDetails(match[1]);
  selectedMovie.value = details;
  showReviews.value = false;
  expandedReviewIds.value = [];
  showPrivateReviewForm.value = false;
}

onMounted(async () => {
  unsubscribeFromUser = subscribeToUser(handleAuthChange);
  const [movieResults, genreResults] = await Promise.all([getTrendingMovies(), getGenres()]);
  movies.value = movieResults;
  genres.value = genreResults;
  loading.value = false;
  loadRecommendations();
  loadContentRatingsForCurrentMovies();
  await syncDetailsFromHash();
  window.addEventListener('popstate', syncDetailsFromHash);
});

watch([sortOption, filteredMovies], () => {
  loadRuntimesForCurrentMovies();
  loadContentRatingsForCurrentMovies();
});

watch(searchTerm, (query) => {
  clearTimeout(suggestionsTimer);

  if (query.trim().length < 2) {
    searchSuggestions.value = [];
    suggestionsOpen.value = false;
    return;
  }

  suggestionsTimer = setTimeout(() => {
    loadSearchSuggestions(query);
  }, 250);
});

watch(
  () => [selectedMovie.value?.id, selectedWatchlistMovie.value?.personalRating, selectedWatchlistMovie.value?.privateReview],
  loadPrivateReviewFields
);

onUnmounted(() => {
  unsubscribeFromUser?.();
  clearTimeout(suggestionsTimer);
  window.removeEventListener('popstate', syncDetailsFromHash);
});
</script>
