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
            <button v-if="!currentUser" class="btn btn-outline-light" type="button" @click="login">
              Sign in
            </button>
            <div v-else class="account-pill">
              <img
                v-if="currentUser.photoURL"
                class="account-avatar"
                :src="currentUser.photoURL"
                :alt="currentUser.displayName || currentUser.email"
              />
              <span>{{ currentUser.displayName || currentUser.email }}</span>
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
        <div class="toolbar mb-4">
          <form class="search-form" @submit.prevent="runSearch">
            <input
              v-model="searchTerm"
              class="form-control form-control-lg"
              type="search"
              placeholder="Search movies"
              aria-label="Search movies"
            />
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
            <p class="section-kicker mb-1">{{ viewMode === 'watchlist' ? 'Saved picks' : 'Browse' }}</p>
            <h2 class="h3 mb-0">{{ pageTitle }}</h2>
          </div>
          <button v-if="viewMode === 'watchlist'" class="btn btn-outline-light" type="button" @click="showHome">
            Back to Movies
          </button>
        </div>

        <div v-if="loading" class="loading-state">Loading movies...</div>
        <div v-else-if="viewMode === 'watchlist' && watchlist.length === 0" class="empty-state">
          Your watchlist is empty.
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
              Everything in your watchlist has been watched.
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
              Mark movies as watched when you finish them.
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
        <div v-else-if="sortedMovies.length === 0" class="empty-state">
          No movies found. Try another search or genre.
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

        <div v-if="watchlist.length" class="recommendations-section">
          <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
            <div>
              <p class="section-kicker mb-1">For your watchlist</p>
              <h2 class="h3 mb-0">Recommended Movies</h2>
            </div>
          </div>

          <div v-if="recommendationsLoading" class="loading-state compact-state">Finding similar movies...</div>
          <div v-else-if="recommendations.length === 0" class="empty-state compact-state">
            Add a few more movies to improve recommendations.
          </div>
          <div v-else class="row g-4">
            <div v-for="movie in recommendations" :key="movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
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
    </section>

    <section v-if="selectedMovie" class="detail-page">
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
            <span>No trailer available</span>
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
          <div class="col-md-8 col-lg-9">
            <div class="detail-meta mb-3">
              <span class="rating-score badge text-bg-warning">{{ selectedMovie.rating }}</span>
              <button class="reviews-toggle-button" type="button" @click="toggleReviews">
                {{ showReviews ? 'Hide Reviews' : 'See Reviews' }}
              </button>
              <span>{{ selectedMovie.year }}</span>
              <span v-if="selectedMovie.runtime">{{ selectedMovie.runtime }} min</span>
            </div>
            <h2 class="display-5 fw-bold">{{ selectedMovie.title }}</h2>
            <p class="lead text-secondary">{{ selectedMovie.overview }}</p>

            <div class="d-flex flex-wrap gap-2 mb-4">
              <span v-for="genre in detailGenres" :key="genre.id" class="badge rounded-pill text-bg-secondary">
                {{ genre.name }}
              </span>
            </div>

            <button
              v-if="currentUser"
              class="btn btn-lg"
              :class="isWatchlisted(selectedMovie.id) ? 'btn-success' : 'btn-warning'"
              type="button"
              @click="toggleWatchlist(selectedMovie)"
            >
              {{ isWatchlisted(selectedMovie.id) ? 'Remove from Watchlist' : 'Add to Watchlist' }}
            </button>

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
                No reviews found for this movie.
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
                No US watch providers found for this movie.
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
                No movie credits found.
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
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import MovieCard from './components/MovieCard.vue';
import {
  getGenres,
  getMovieDetails,
  getPersonProfile,
  getTrendingMovies,
  getWatchlistRecommendations,
  searchMovies
} from './services/tmdb';
import {
  loadUserWatchlist,
  removeUserWatchlistMovie,
  saveUserWatchlistMovie,
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
const selectedGenre = ref('');
const sortOption = ref('year');
const selectedMovie = ref(null);
const selectedPerson = ref(null);
const loading = ref(true);
const authError = ref('');
const personLoading = ref(false);
const recommendations = ref([]);
const recommendationsLoading = ref(false);
const showReviews = ref(false);
const expandedReviewIds = ref([]);
const viewMode = ref('home');
const runtimeByMovieId = ref({});
let recommendationsRequestId = 0;
let personRequestId = 0;
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
  return sortMovies(filteredMovies.value);
});

const sortedUnwatchedMovies = computed(() => sortMovies(unwatchedMovies.value));

const sortedWatchedMovies = computed(() => sortMovies(watchedMovies.value));

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
  watchlist.value = watchlist.value.map((item) =>
    item.id === movie.id ? { ...item, watched } : item
  );

  try {
    await updateUserWatchlistMovie(currentUser.value?.uid, movie.id, { watched });
  } catch (error) {
    authError.value = error.message || 'Unable to update watched status.';
  }

  loadRecommendations();
}

async function login() {
  authError.value = '';

  try {
    await signInWithGoogle();
  } catch (error) {
    authError.value = error.message || 'Unable to sign in.';
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
    if (viewMode.value === 'watchlist') {
      viewMode.value = 'home';
    }

    watchlist.value = JSON.parse(localStorage.getItem('movie-watchlist') || '[]');
    loadRecommendations();
    return;
  }

  try {
    const cloudWatchlist = await loadUserWatchlist(user.uid);
    watchlist.value = cloudWatchlist.map((movie) => ({
      ...movie,
      watched: Boolean(movie.watched)
    }));
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
  movies.value = await searchMovies(searchTerm.value);
  loading.value = false;
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

async function openDetails(movie) {
  const details = await getMovieDetails(movie.id);
  selectedMovie.value = details || movie;
  showReviews.value = false;
  expandedReviewIds.value = [];
  if (details?.runtime) {
    runtimeByMovieId.value = {
      ...runtimeByMovieId.value,
      [details.id]: details.runtime
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
  window.history.pushState({}, '', window.location.pathname);
}

function showWatchlist() {
  viewMode.value = 'watchlist';
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  window.history.pushState({}, '', window.location.pathname);
}

function showHome() {
  viewMode.value = 'home';
  selectedMovie.value = null;
  selectedPerson.value = null;
  showReviews.value = false;
  expandedReviewIds.value = [];
  window.history.pushState({}, '', window.location.pathname);
}

async function syncDetailsFromHash() {
  const match = window.location.hash.match(/^#movie-(\d+)$/);

  if (!match) {
    selectedMovie.value = null;
    selectedPerson.value = null;
    showReviews.value = false;
    expandedReviewIds.value = [];
    return;
  }

  const details = await getMovieDetails(match[1]);
  selectedMovie.value = details;
  showReviews.value = false;
  expandedReviewIds.value = [];
}

onMounted(async () => {
  unsubscribeFromUser = subscribeToUser(handleAuthChange);
  const [movieResults, genreResults] = await Promise.all([getTrendingMovies(), getGenres()]);
  movies.value = movieResults;
  genres.value = genreResults;
  loading.value = false;
  loadRecommendations();
  await syncDetailsFromHash();
  window.addEventListener('popstate', syncDetailsFromHash);
});

watch([sortOption, filteredMovies], () => {
  loadRuntimesForCurrentMovies();
});

onUnmounted(() => {
  unsubscribeFromUser?.();
  window.removeEventListener('popstate', syncDetailsFromHash);
});
</script>
