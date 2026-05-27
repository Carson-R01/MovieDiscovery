const API_BASE = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/original';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fallbackGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 18, name: 'Drama' },
  { id: 878, name: 'Sci-Fi' },
  { id: 53, name: 'Thriller' }
];

export const fallbackMovies = [
  {
    id: 27205,
    title: 'Inception',
    overview: 'A thief who steals corporate secrets through dream-sharing technology is offered a chance to erase his criminal history.',
    poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdrop_path: '/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    release_date: '2010-07-16',
    vote_average: 8.4,
    genre_ids: [28, 878, 53]
  },
  {
    id: 157336,
    title: 'Interstellar',
    overview: 'A team of explorers travels through a wormhole in space in an attempt to secure humanitys future.',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    release_date: '2014-11-07',
    vote_average: 8.5,
    genre_ids: [12, 18, 878]
  },
  {
    id: 496243,
    title: 'Parasite',
    overview: 'Greed and class discrimination threaten the newly formed relationship between a wealthy family and a poor household.',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
    release_date: '2019-05-30',
    vote_average: 8.5,
    genre_ids: [18, 53]
  },
  {
    id: 129,
    title: 'Spirited Away',
    overview: 'A young girl enters a world ruled by gods, witches, and spirits after her parents are transformed.',
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: '/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg',
    release_date: '2001-07-20',
    vote_average: 8.5,
    genre_ids: [12, 16]
  }
];

function posterUrl(path) {
  return path ? `${IMAGE_BASE}${path}` : '';
}

function backdropUrl(path) {
  return path ? `${BACKDROP_BASE}${path}` : '';
}

function normalizeMovie(movie) {
  return {
    ...movie,
    posterUrl: posterUrl(movie.poster_path),
    backdropUrl: backdropUrl(movie.backdrop_path),
    year: movie.release_date ? movie.release_date.slice(0, 4) : 'TBD',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'NR'
  };
}

async function request(path, params = {}) {
  if (!API_KEY) {
    throw new Error('Missing TMDB API key');
  }

  const url = new URL(`${API_BASE}${path}`);
  url.search = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...params
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('TMDB request failed');
  }

  return response.json();
}

export async function getTrendingMovies() {
  try {
    const data = await request('/trending/movie/week');
    return data.results.map(normalizeMovie);
  } catch {
    return fallbackMovies.map(normalizeMovie);
  }
}

export async function searchMovies(query) {
  if (!query.trim()) {
    return getTrendingMovies();
  }

  try {
    const data = await request('/search/movie', {
      query,
      include_adult: 'false'
    });
    return data.results.map(normalizeMovie);
  } catch {
    const lowerQuery = query.toLowerCase();
    return fallbackMovies
      .filter((movie) => movie.title.toLowerCase().includes(lowerQuery))
      .map(normalizeMovie);
  }
}

export async function getGenres() {
  try {
    const data = await request('/genre/movie/list');
    return data.genres;
  } catch {
    return fallbackGenres;
  }
}

export async function getMovieDetails(id) {
  try {
    const data = await request(`/movie/${id}`, {
      append_to_response: 'credits,videos'
    });
    return normalizeMovie(data);
  } catch {
    const movie = fallbackMovies.find((item) => item.id === Number(id));
    return movie ? normalizeMovie(movie) : null;
  }
}
