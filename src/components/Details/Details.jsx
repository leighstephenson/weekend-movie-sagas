//TODO imports
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import Card from "@mui/material";
import CardContent from "@mui/material";
import Button from "@mui/material";
import Grid from "@mui/material";

function Details() {

    let dispatch = useDispatch(); 
    let history = useHistory();
    let { id } = useParams();
    

    //! Back to MovieList
    const goBack = () => { history.push('/') }

    //! What displays
    return (
        <>
            <Typography>
                Details
            </Typography>

        </>
    );

}; //End Details()

export default Details; 