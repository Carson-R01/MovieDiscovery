import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { auth, db, firebaseEnabled, googleProvider } from './firebase';

export function subscribeToUser(callback) {
  if (!firebaseEnabled) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  if (!firebaseEnabled) {
    throw new Error('Firebase is not configured');
  }

  await signInWithPopup(auth, googleProvider);
}

export async function signInWithEmail(email, password) {
  if (!firebaseEnabled) {
    throw new Error('Firebase is not configured');
  }

  await signInWithEmailAndPassword(auth, email, password);
}

export async function createAccountWithEmail(email, password) {
  if (!firebaseEnabled) {
    throw new Error('Firebase is not configured');
  }

  await createUserWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  if (!firebaseEnabled) {
    return;
  }

  await signOut(auth);
}

export async function loadUserWatchlist(userId) {
  if (!firebaseEnabled || !userId) {
    return [];
  }

  const snapshot = await getDocs(collection(db, 'users', userId, 'watchlist'));
  return snapshot.docs
    .map((item) => item.data())
    .filter((item) => item.type !== 'profile');
}

export async function loadUserProfile(userId) {
  if (!firebaseEnabled || !userId) {
    return { playlists: [], recentlyViewed: [] };
  }

  const snapshot = await getDoc(doc(db, 'users', userId, 'watchlist', '__profile'));
  return snapshot.exists() ? snapshot.data() : { playlists: [], recentlyViewed: [] };
}

export async function saveUserPlaylists(userId, playlists) {
  if (!firebaseEnabled || !userId) {
    return;
  }

  await setDoc(
    doc(db, 'users', userId, 'watchlist', '__profile'),
    {
      type: 'profile',
      playlists,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function saveUserRecentlyViewed(userId, recentlyViewed) {
  if (!firebaseEnabled || !userId) {
    return;
  }

  await setDoc(
    doc(db, 'users', userId, 'watchlist', '__profile'),
    {
      type: 'profile',
      recentlyViewed,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function saveUserWatchlistMovie(userId, movie) {
  if (!firebaseEnabled || !userId) {
    return;
  }

  await setDoc(doc(db, 'users', userId, 'watchlist', String(movie.id)), {
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
    watched: Boolean(movie.watched),
    watchedAt: movie.watchedAt || null,
    personalRating: movie.personalRating || null,
    privateReview: movie.privateReview || '',
    privateReviewUpdatedAt: movie.privateReviewUpdatedAt || null,
    customLists: movie.customLists || [],
    addedAt: serverTimestamp()
  });
}

export async function removeUserWatchlistMovie(userId, movieId) {
  if (!firebaseEnabled || !userId) {
    return;
  }

  await deleteDoc(doc(db, 'users', userId, 'watchlist', String(movieId)));
}

export async function updateUserWatchlistMovie(userId, movieId, updates) {
  if (!firebaseEnabled || !userId) {
    return;
  }

  await updateDoc(doc(db, 'users', userId, 'watchlist', String(movieId)), updates);
}
