const API_BASE = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/original';
const PROFILE_BASE = 'https://image.tmdb.org/t/p/w185';
const PROVIDER_BASE = 'https://image.tmdb.org/t/p/w92';
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
    runtime: 148,
    genre_ids: [28, 878, 53],
    credits: {
      cast: [
        { id: 6193, name: 'Leonardo DiCaprio', character: 'Dom Cobb', profile_path: '/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg' },
        { id: 27578, name: 'Joseph Gordon-Levitt', character: 'Arthur', profile_path: '/4U9G4YwTlIEbAymBaseltS38eH4.jpg' },
        { id: 24045, name: 'Elliot Page', character: 'Ariadne', profile_path: '/eCeFgzS8dYHnMfWQT0oQitCrsSz.jpg' },
        { id: 2524, name: 'Tom Hardy', character: 'Eames', profile_path: '/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg' }
      ]
    }
  },
  {
    id: 157336,
    title: 'Interstellar',
    overview: 'A team of explorers travels through a wormhole in space in an attempt to secure humanitys future.',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    release_date: '2014-11-07',
    vote_average: 8.5,
    runtime: 169,
    genre_ids: [12, 18, 878],
    credits: {
      cast: [
        { id: 10297, name: 'Matthew McConaughey', character: 'Cooper', profile_path: '/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg' },
        { id: 1813, name: 'Anne Hathaway', character: 'Brand', profile_path: '/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg' },
        { id: 3895, name: 'Jessica Chastain', character: 'Murph', profile_path: '/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg' },
        { id: 1892, name: 'Michael Caine', character: 'Professor Brand', profile_path: '/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg' }
      ]
    }
  },
  {
    id: 496243,
    title: 'Parasite',
    overview: 'Greed and class discrimination threaten the newly formed relationship between a wealthy family and a poor household.',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
    release_date: '2019-05-30',
    vote_average: 8.5,
    runtime: 133,
    genre_ids: [18, 53],
    credits: {
      cast: [
        { id: 20738, name: 'Song Kang-ho', character: 'Kim Ki-taek', profile_path: '/1rNoqfQ30F84YfL1jnmZbe8jdzn.jpg' },
        { id: 556435, name: 'Lee Sun-kyun', character: 'Park Dong-ik', profile_path: '/mOko1Bex8eGv2tMEnnE8CaM8G9a.jpg' },
        { id: 1255886, name: 'Cho Yeo-jeong', character: 'Yeon-kyo', profile_path: '/mQGmlJUzKAYhVGmfnkscrZsGb3Z.jpg' },
        { id: 1342698, name: 'Choi Woo-shik', character: 'Ki-woo', profile_path: '/x7vWu14a87qOZ8OSZqYn3gYMN3X.jpg' }
      ]
    }
  },
  {
    id: 129,
    title: 'Spirited Away',
    overview: 'A young girl enters a world ruled by gods, witches, and spirits after her parents are transformed.',
    poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: '/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg',
    release_date: '2001-07-20',
    vote_average: 8.5,
    runtime: 125,
    genre_ids: [12, 16],
    credits: {
      cast: [
        { id: 19587, name: 'Rumi Hiiragi', character: 'Chihiro Ogino', profile_path: null },
        { id: 6837, name: 'Miyu Irino', character: 'Haku', profile_path: '/kBcrF346CAwSFypBS5x2HJGqJhZ.jpg' },
        { id: 19588, name: 'Mari Natsuki', character: 'Yubaba', profile_path: '/z2QpDkx7Mra4b0SsA9nP8Lt2RGD.jpg' },
        { id: 19589, name: 'Takashi Naito', character: 'Akio Ogino', profile_path: null }
      ]
    }
  }
];

function posterUrl(path) {
  return path ? `${IMAGE_BASE}${path}` : '';
}

function backdropUrl(path) {
  return path ? `${BACKDROP_BASE}${path}` : '';
}

function profileUrl(path) {
  return path ? `${PROFILE_BASE}${path}` : '';
}

function normalizeCastMember(member) {
  return {
    ...member,
    profileUrl: profileUrl(member.profile_path)
  };
}

function trailerFromVideos(videos = {}) {
  const youtubeVideos = videos.results?.filter((video) => video.site === 'YouTube') || [];
  const trailer =
    youtubeVideos.find((video) => video.type === 'Trailer' && video.official) ||
    youtubeVideos.find((video) => video.type === 'Trailer') ||
    youtubeVideos.find((video) => video.type === 'Teaser') ||
    youtubeVideos[0];

  if (!trailer) {
    return null;
  }

  return {
    ...trailer,
    embedUrl: `https://www.youtube.com/embed/${trailer.key}?controls=0&modestbranding=1&rel=0&playsinline=1`,
    thumbnailUrl: `https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`
  };
}

function providerLogoUrl(path) {
  return path ? `${PROVIDER_BASE}${path}` : '';
}

function normalizeProvider(provider) {
  return {
    ...provider,
    logoUrl: providerLogoUrl(provider.logo_path)
  };
}

function watchProvidersFromResponse(response = {}) {
  const regionProviders = response.results?.US;

  if (!regionProviders) {
    return {
      link: '',
      flatrate: [],
      rent: [],
      buy: []
    };
  }

  return {
    link: regionProviders.link || '',
    flatrate: regionProviders.flatrate?.map(normalizeProvider) || [],
    rent: regionProviders.rent?.map(normalizeProvider) || [],
    buy: regionProviders.buy?.map(normalizeProvider) || []
  };
}

function normalizeMovie(movie) {
  return {
    ...movie,
    posterUrl: posterUrl(movie.poster_path),
    backdropUrl: backdropUrl(movie.backdrop_path),
    year: movie.release_date ? movie.release_date.slice(0, 4) : 'TBD',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'NR',
    trailer: trailerFromVideos(movie.videos),
    watchProviders: watchProvidersFromResponse(movie['watch/providers']),
    similarMovies: movie.similar?.results?.map(normalizeMovie) || [],
    credits: movie.credits
      ? {
          ...movie.credits,
          cast: movie.credits.cast?.map(normalizeCastMember) || []
        }
      : undefined
  };
}

function normalizePerson(person) {
  return {
    ...person,
    profileUrl: profileUrl(person.profile_path),
    movieCredits: {
      cast: person.movie_credits?.cast?.map(normalizeMovie) || []
    }
  };
}

function searchAliasesFor(query) {
  const normalizedQuery = query.toLowerCase().trim();
  const aliases = [];

  if (normalizedQuery.includes('star wars')) {
    aliases.push('mandalorian grogu');
  }

  return aliases;
}

function mergeUniqueMovies(movieGroups) {
  const seen = new Set();

  return movieGroups
    .flat()
    .filter((movie) => {
      if (seen.has(movie.id)) {
        return false;
      }

      seen.add(movie.id);
      return true;
    });
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
    const searches = [query, ...searchAliasesFor(query)];
    const results = await Promise.all(
      searches.map(async (searchQuery) => {
        const data = await request('/search/movie', {
          query: searchQuery,
          include_adult: 'false'
        });
        return data.results || [];
      })
    );

    return mergeUniqueMovies(results).map(normalizeMovie);
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
      append_to_response: 'credits,videos,watch/providers,similar'
    });
    return normalizeMovie(data);
  } catch {
    const movie = fallbackMovies.find((item) => item.id === Number(id));
    if (!movie) {
      return null;
    }

    const similarMovies = fallbackMovies.filter((item) => {
      if (item.id === movie.id) {
        return false;
      }

      return item.genre_ids.some((genreId) => movie.genre_ids.includes(genreId));
    });

    return normalizeMovie({
      ...movie,
      similar: {
        results: similarMovies
      }
    });
  }
}

export async function getWatchlistRecommendations(watchlist) {
  const watchlistIds = new Set(watchlist.map((movie) => movie.id));

  if (!watchlist.length) {
    return [];
  }

  try {
    const recommendationGroups = await Promise.all(
      watchlist.slice(0, 5).map(async (movie) => {
        const data = await request(`/movie/${movie.id}/recommendations`);
        return data.results || [];
      })
    );

    const seen = new Set(watchlistIds);

    return recommendationGroups
      .flat()
      .filter((movie) => {
        if (seen.has(movie.id)) {
          return false;
        }

        seen.add(movie.id);
        return true;
      })
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 12)
      .map(normalizeMovie);
  } catch {
    const likedGenres = new Set(watchlist.flatMap((movie) => movie.genre_ids || []));

    return fallbackMovies
      .filter((movie) => !watchlistIds.has(movie.id))
      .filter((movie) => movie.genre_ids.some((genreId) => likedGenres.has(genreId)))
      .map(normalizeMovie);
  }
}

export async function getPersonProfile(id) {
  try {
    const data = await request(`/person/${id}`, {
      append_to_response: 'movie_credits'
    });
    return normalizePerson(data);
  } catch {
    const castMember = fallbackMovies
      .flatMap((movie) => movie.credits?.cast || [])
      .find((person) => person.id === Number(id));

    if (!castMember) {
      return null;
    }

    const relatedMovies = fallbackMovies.filter((movie) =>
      movie.credits?.cast?.some((person) => person.id === Number(id))
    );

    return normalizePerson({
      ...castMember,
      biography: 'Biography details are available from TMDB when an API key is configured.',
      known_for_department: 'Acting',
      movie_credits: {
        cast: relatedMovies
      }
    });
  }
}
