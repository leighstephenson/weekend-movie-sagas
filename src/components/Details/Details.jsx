//TODO imports
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Details() {

    //! Our hooks
    let dispatch = useDispatch();
    let history = useHistory();

    //! Stores which movie the user selected
    let selectedMovie = useSelector((store) => store.selectedMovie);
    let genres = useSelector((store) => store.genres);

    //! Leads back to MovieList
    const goBack = () => { history.push('/') }

    //! Fetches the genre from DB
    useEffect(() => {
        dispatch({ type: "FETCH_GENRES", payload: selectedMovie.id });
    }, []);

    //! What displays
    return (
        <>
            <Card variant='outlined' sx={{
                boxShadow: 10,
                margin: 5,


            }}>
                <CardContent>
                    <Typography variant="h7">
                        Details for
                    </Typography>

                    <Typography variant="h3"
                        sx={{
                            fontStyle: 'italic'

                        }}>
                        {selectedMovie.title}
                    </Typography>

                    <br />

                    <Typography>
                        <img src={selectedMovie.poster} />

                        <br />

                        Genre(s):
                        {genres.map((genre) => (
                            <li key={genre.id}> {genre.name} </li>
                        ))}
                    </Typography>

                    <br />

                    <Typography>
                        {selectedMovie.description}
                    </Typography>
                </CardContent>
            </Card>

            <Button variant="outlined" onClick={goBack}
                sx={{
                    margin: 3,
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'lightGrey',
                    ':hover': {
                        bgcolor: 'salmon',
                    },

                }}>
                Go Back
            </Button>

        </>
    );

}; //End Details()

export default Details; 