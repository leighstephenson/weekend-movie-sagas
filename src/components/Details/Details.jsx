//TODO imports
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material";

function Details() {

    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();
    let selectedMovie = useSelector((store) => store.selectedMovie);
    let genres = useSelector((store) => store.genres);

    //! Back to MovieList
    const goBack = () => { history.push('/') }

    useEffect(() => {
        dispatch({ type: "FETCH_GENRES", payload: selectedMovie.id });
    }, []);

    //TODO improve the styling later
    //! What displays
    return (
        <>
            <Card variant='outlined' sx={{
                boxShadow: 10,
                margin: 10,


            }}>
                <CardContent>
                    <Typography>
                        Details for {selectedMovie.title}
                    </Typography>

                    <Typography>
                        Genre:
                        <br />
                        <ul>
                            {genres.map((genre) => (
                                <li key={genre.id}> {genre.name} </li>
                            ))}
                        </ul>

                    </Typography>

                    <Typography>

                        <img src={selectedMovie.poster} />
                        <br />
                        {selectedMovie.description}

                    </Typography>
                </CardContent>
            </Card>

            <Button variant="outlined"
                onClick={goBack}>
                Go Back
            </Button>
        </>
    );

}; //End Details()

export default Details; 