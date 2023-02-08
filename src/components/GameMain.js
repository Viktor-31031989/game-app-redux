import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CardTable from "./CardTable";

function GameMain() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        setTimeout(() => {
            isOpenHandler()
        }, 500)
    }, [state])
    const isOpenHandler = () => {
        const cardCounter = state.cards.filter(el => el.isOpen === true)
        if (cardCounter.length < 2) {
            return
        } else if (cardCounter.length === 2 && cardCounter[0].title === cardCounter[1].title) {
            const oneId = cardCounter[0].id
            const twoId = cardCounter[1].id
            const payloadId = {oneId, twoId}
            return dispatch({type: 'CHANGE_STATE', payload: payloadId})
        } else if (cardCounter.length === 2 && cardCounter[0].title !== cardCounter[1].title) {
            const oneId = cardCounter[0].id
            const twoId = cardCounter[1].id
            const payloadId = {oneId, twoId}
            return dispatch({type: 'CLOSE_CARD', payload: payloadId})
        }
    }
    console.log(state)
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: 'auto auto auto auto',
            gap: '4px',
            margin: '50px 30px 0 30px',
            maxWidth: '350px',
            alignItems: 'center',
        }}>
            {state.level > 3
                ?
                state.newCards.map(card => (
                        <CardTable
                            card={card}
                            dispatch={dispatch}
                            key={card.id}
                            state={state}
                        />
                    )
                )
                :
                state.cards.map(card => (
                    <CardTable
                        state={state}
                        card={card}
                        dispatch={dispatch}
                        key={card.id}
                    />
                ))
            }

        </div>
    );
}

export default GameMain;
