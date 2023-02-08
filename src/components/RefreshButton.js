import React from 'react';
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";


function RefreshButton() {
    const dispatch = useDispatch()
    return (
        <div style={{marginTop: '70px'}}>
            <Button onClick={()=>dispatch({type: 'REFRESH', payload: false})} variant="contained">Refresh</Button>
        </div>
    );
}

export default RefreshButton;
