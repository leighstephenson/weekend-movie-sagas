//TODO imports
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import axios from "axios";
import Card from "@mui/material";
import CardContent from "@mui/material";
import Button from "@mui/material";
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
            <Typography>
                Details for {selectedMovie.title}
            </Typography>

        </>
    );

}; //End Details()

export default Details; 