<template>
  <article class="movie-card card h-100 border-0 shadow-sm">
    <button class="poster-button" type="button" @click="$emit('select', movie)">
      <img
        v-if="movie.posterUrl"
        class="card-img-top poster"
        :src="movie.posterUrl"
        :alt="movie.title"
      />
      <div v-else class="poster poster-placeholder">No poster</div>
    </button>

    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
        <h2 class="movie-title h6 mb-0">{{ movie.title }}</h2>
        <span class="rating badge text-bg-warning">{{ movie.rating }}</span>
      </div>

      <div class="movie-card-meta">
        <span>{{ movie.year }}</span>
        <span v-if="movie.contentRating" class="card-content-rating">{{ movie.contentRating }}</span>
      </div>
      <p v-if="movie.watched && movie.watchedAt" class="watched-date small">
        Watched {{ movie.watchedAt }}
      </p>
      <p v-if="movie.watched && movie.personalRating" class="personal-rating-note small">
        Your rating: {{ movie.personalRating }}/10
      </p>
      <div v-if="movie.customLists?.length" class="movie-list-badges">
        <span v-for="list in movie.customLists" :key="list">{{ list }}</span>
      </div>

      <div class="movie-card-actions d-grid gap-2">
        <button class="btn btn-sm btn-outline-light" type="button" @click="$emit('select', movie)">
          Details
        </button>
        <button
          v-if="canUseWatchlist"
          class="btn btn-sm"
          :class="isWatchlisted ? 'btn-success' : 'btn-outline-warning'"
          type="button"
          @click="$emit('toggle-watchlist', movie)"
        >
          {{ isWatchlisted ? 'In Watchlist' : 'Add Watchlist' }}
        </button>
        <button
          v-if="canMarkWatched"
          class="btn btn-sm"
          :class="movie.watched ? 'btn-outline-info' : 'btn-info'"
          type="button"
          @click="$emit('toggle-watched', movie)"
        >
          {{ movie.watched ? 'Mark Unwatched' : 'Mark Watched' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  },
  isWatchlisted: {
    type: Boolean,
    default: false
  },
  canUseWatchlist: {
    type: Boolean,
    default: false
  },
  canMarkWatched: {
    type: Boolean,
    default: false
  }
});

defineEmits(['select', 'toggle-watchlist', 'toggle-watched']);
</script>
