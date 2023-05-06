import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from '@mui/material';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const movieSelection = (movie) => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        history.push('/details')
    };

    //TODO the justiftContent: center is not working as expected
    return (
        <main>
            <h3>Select a movie poster to view more information.</h3>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        // <Grid container> 
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
                        // </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;