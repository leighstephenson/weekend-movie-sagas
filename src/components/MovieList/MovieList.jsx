import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';
import './MovieList.css'

function MovieList() {

    //! Our hooks
    const dispatch = useDispatch();
    const history = useHistory();

    //! Stores our movies
    const movies = useSelector(store => store.movies);

    //! Fetch the list of movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //! Sets selected movie and brings user to details
    const movieSelection = (movie) => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        history.push('/details')
    };

    //? the justifyContent: center is not working as expected
    //! What displays
    return (
        <main>
            <h3>Select a movie poster to view more information.</h3>
            <section className="movies">
                {movies.map(movie => {
                    return (
                            <Grid  sx={{
                                margin: 1,
                                border: 1,
                                padding: 2,
                                display: 'inline',
                                width: 300,
                                justifyContent: 'center',
                            }}>
                                <div key={movie.id} onClick={() => movieSelection(movie)}>
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                            </Grid>
                    );
                })}
            </section>
        </main>

    );
} // End  of MovieList()

export default MovieList;