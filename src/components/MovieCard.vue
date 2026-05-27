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

      <p class="text-secondary small mb-3">{{ movie.year }}</p>

      <div class="mt-auto d-grid gap-2">
        <button class="btn btn-sm btn-outline-light" type="button" @click="$emit('select', movie)">
          Details
        </button>
        <button
          class="btn btn-sm"
          :class="isWatchlisted ? 'btn-success' : 'btn-outline-warning'"
          type="button"
          @click="$emit('toggle-watchlist', movie)"
        >
          {{ isWatchlisted ? 'In Watchlist' : 'Add Watchlist' }}
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
  }
});

defineEmits(['select', 'toggle-watchlist']);
</script>
