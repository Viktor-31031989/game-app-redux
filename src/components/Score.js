import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Score() {
    const counter = useSelector(state => state)
    const dispatch = useDispatch()

    if (counter.counter === 5) {
        return dispatch({type: 'LOSE_GAME', payload: true})
    }
    console.log(counter)
    return (

        <div>
            <h1>{counter.counter} out of 30 clicks</h1>
            {counter.isLose
                ?
                <h1 style={{position: 'fixed', top: '218px', left: '30px', fontSize: '60px', color: 'red', padding: '185px 10px', background: 'white', opacity: '80%'}}>YOU LOSE!</h1>
                :
                counter.isWin
                ?
                    <h1>YOU WIN</h1>
                    :
                    ''
            }
        </div>
    );
}

export default Score;
