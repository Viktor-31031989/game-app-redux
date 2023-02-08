import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Score() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        winHandler()
        loseHandler()
    })

    useEffect(() => {
        if(state.isWin) {
            setTimeout(() => {
                levelChanger()
            }, 600)
        }
    })

    const winHandler = () => {
        const result = state.cards.filter(el => el.done)
        if (result.length === 20) {
            return dispatch({type: "WIN_GAME", payload: true})
        }
    }

    const levelChanger = () => {
        return dispatch({type: "CHANGE_LEVEL", payload: false})
    }

    const loseHandler = () => {
        if (state.level === 1) {
            if (state.counter === 41) {
                return dispatch({type: 'LOSE_GAME', payload: true})
            }
        } else if (state.level === 2) {
            if (state.counter === 31) {
                return dispatch({type: 'LOSE_GAME', payload: true})
            }
        } else if (state.level === 3) {
            if (state.counter === 21) {
                return dispatch({type: 'LOSE_GAME', payload: true})
            }
        }
    }

    console.log(state)
    return (

        <div>
            {state.level === 1
                ?
                <h1>{state.counter} out of 40 clicks</h1>
                :
                state.level === 2
                    ?
                    <h1>{state.counter} out of 30 clicks</h1>
                    :
                    state.level === 3
                        ?
                        <h1>{state.counter} out of 21 clicks</h1>
                        :
                        <h1>winner</h1>
            }

            <h2>Level {state.level}</h2>
            {state.isLose
                ?
                <h1 style={{
                    position: 'fixed',
                    top: '110px',
                    left: '30px',
                    fontSize: '60px',
                    color: 'red',
                    padding: '185px 10px',
                    background: 'white',
                    opacity: '80%'
                }}>YOU LOSE!</h1>
                :
                state.isWin
                    ?
                    <h1 style={{
                        position: 'fixed',
                        top: '150px',
                        left: '30px',
                        fontSize: '60px',
                        color: 'green',
                        padding: '185px 40px',
                        background: 'white',
                        opacity: '80%',
                        margin: '0'
                    }}>YOU WIN</h1>
                    :
                    ''
            }
        </div>
    );
}

export default Score;
