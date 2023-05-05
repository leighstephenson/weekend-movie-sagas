//TODO imports
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material";

function Details() {

    let dispatch = useDispatch();
    let history = useHistory();
    let { id } = useParams();
    const selectedMovie = useSelector((store) => store.selectedMovie);

    //! Back to MovieList
    const goBack = () => { history.push('/') }

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

                        <img src={selectedMovie.poster} />
                        <br />
                        {selectedMovie.description}

                    </Typography>
                </CardContent>
            </Card>

            <Button variant="outlined">
                Go Back
            </Button>
        </>
    );

}; //End Details()

export default Details; 