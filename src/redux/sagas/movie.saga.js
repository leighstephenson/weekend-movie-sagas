import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}

function* fetchGenres(action) {
    // get genres from the DB 
    try {
        const movieId = action.payload;
        const response = yield axios.get(`/api/genre/${movieId}`);
        yield put({ type: 'SET_GENRES', payload: response.data });
    } catch (error) {
        console.log('Error in fetchGenres on index', error);
    }
};

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
};

export default rootSaga;

