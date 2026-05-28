<template>
  <main>
    <section
      class="hero"
      :style="{ backgroundImage: heroMovie?.backdropUrl ? `url(${heroMovie.backdropUrl})` : '' }"
    >
      <div class="hero-overlay">
        <nav class="container py-4 d-flex align-items-center justify-content-between gap-3">
          <button class="brand-button" type="button" @click="showHome">Movie Discovery</button>
          <button class="btn btn-warning" type="button" @click="showWatchlist">
            Watchlist
            <span class="badge text-bg-dark ms-1">{{ watchlist.length }}</span>
          </button>
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
        <div v-else-if="filteredMovies.length === 0" class="empty-state">
          No movies found. Try another search or genre.
        </div>
        <div v-else class="row g-4">
          <div v-for="movie in filteredMovies" :key="movie.id" class="col-6 col-md-4 col-lg-3 col-xl-2">
            <MovieCard
              :movie="movie"
              :is-watchlisted="isWatchlisted(movie.id)"
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
        <div class="row g-4 align-items-start">
          <div class="col-md-4 col-lg-3">
            <img
              v-if="selectedMovie.posterUrl"
              class="detail-poster"
              :src="selectedMovie.posterUrl"
              :alt="selectedMovie.title"
            />
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="detail-meta mb-3">
              <span class="badge text-bg-warning">{{ selectedMovie.rating }}</span>
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
              class="btn btn-lg"
              :class="isWatchlisted(selectedMovie.id) ? 'btn-success' : 'btn-warning'"
              type="button"
              @click="toggleWatchlist(selectedMovie)"
            >
              {{ isWatchlisted(selectedMovie.id) ? 'Remove from Watchlist' : 'Add to Watchlist' }}
            </button>

            <div v-if="featuredCast.length" class="cast-section mt-5">
              <div class="d-flex align-items-end justify-content-between gap-3 mb-3">
                <div>
                  <h3 class="mb-1">Cast</h3>
                </div>
              </div>

              <div class="cast-grid">
                <article v-for="person in featuredCast" :key="person.cast_id || person.credit_id || person.id" class="cast-card">
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
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import MovieCard from './components/MovieCard.vue';
import {
  getGenres,
  getMovieDetails,
  getTrendingMovies,
  getWatchlistRecommendations,
  searchMovies
} from './services/tmdb';

const movies = ref([]);
const genres = ref([]);
const watchlist = ref(JSON.parse(localStorage.getItem('movie-watchlist') || '[]'));
const searchTerm = ref('');
const selectedGenre = ref('');
const selectedMovie = ref(null);
const loading = ref(true);
const recommendations = ref([]);
const recommendationsLoading = ref(false);
const viewMode = ref('home');
let recommendationsRequestId = 0;

const heroMovie = computed(() => movies.value[0]);

const visibleMovies = computed(() => (viewMode.value === 'watchlist' ? watchlist.value : movies.value));

const filteredMovies = computed(() => {
  if (!selectedGenre.value) {
    return visibleMovies.value;
  }

  return visibleMovies.value.filter((movie) => {
    const ids = movie.genre_ids || movie.genres?.map((genre) => genre.id) || [];
    return ids.includes(Number(selectedGenre.value));
  });
});

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

function persistWatchlist() {
  localStorage.setItem('movie-watchlist', JSON.stringify(watchlist.value));
}

function isWatchlisted(id) {
  return watchlist.value.some((movie) => movie.id === id);
}

function toggleWatchlist(movie) {
  if (isWatchlisted(movie.id)) {
    watchlist.value = watchlist.value.filter((item) => item.id !== movie.id);
  } else {
    watchlist.value = [movie, ...watchlist.value];
  }

  persistWatchlist();
  loadRecommendations();
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

async function openDetails(movie) {
  const details = await getMovieDetails(movie.id);
  selectedMovie.value = details || movie;
  window.history.pushState({}, '', `#movie-${movie.id}`);
}

function closeDetails() {
  selectedMovie.value = null;
  window.history.pushState({}, '', window.location.pathname);
}

function showWatchlist() {
  viewMode.value = 'watchlist';
  selectedMovie.value = null;
  window.history.pushState({}, '', window.location.pathname);
}

function showHome() {
  viewMode.value = 'home';
  selectedMovie.value = null;
  window.history.pushState({}, '', window.location.pathname);
}

async function syncDetailsFromHash() {
  const match = window.location.hash.match(/^#movie-(\d+)$/);

  if (!match) {
    selectedMovie.value = null;
    return;
  }

  const details = await getMovieDetails(match[1]);
  selectedMovie.value = details;
}

onMounted(async () => {
  const [movieResults, genreResults] = await Promise.all([getTrendingMovies(), getGenres()]);
  movies.value = movieResults;
  genres.value = genreResults;
  loading.value = false;
  loadRecommendations();
  await syncDetailsFromHash();
  window.addEventListener('popstate', syncDetailsFromHash);
});
</script>
