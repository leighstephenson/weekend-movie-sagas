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

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Grid container>
                            <Grid item justifyContent='center'>
                                <div key={movie.id} onClick={() => movieSelection(movie)}>
                                    <h3>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                            </Grid>
                        </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;