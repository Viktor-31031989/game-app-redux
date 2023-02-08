import React, {useEffect} from 'react';


function CardTable({card, dispatch, state}) {

    useEffect(() => {
        if(state.level > 3) {
            setTimeout(() => {
                newCardsOpen()
            }, 600)
            setTimeout(()=>{
                newCardsClose()
            }, 1000)
        }
    }, []);

    const newCardsOpen =()=>{
       return dispatch({type: 'NEW_CARDS_OPEN', payload: true })
    }

    const newCardsClose =()=>{
        return dispatch({type: 'NEW_CARDS_CLOSED', payload: false })
    }

    const clickHandler = (id) => {
        dispatch({type: 'CHOOSE_CARD', payload: id})
    }

    return (
        <div onClick={() => clickHandler(card.id)}
             style={{fontSize: '40px',  textAlign: 'center', padding: '0 0'}}>
            {
                card.isOpen
                    ?
                    card.title
                    :
                    card.done
                        ?
                        <div style={{
                            background: 'lightGreen',
                            height: '80px',
                            width: '80px',
                            margin: '0',
                            padding: '0'
                        }}></div>
                        :
                        <div style={{
                            background: 'grey',
                            height: '80px',
                            width: '80px',
                            margin: '0',
                            padding: '0'
                        }}></div>
            }
        </div>
    );
}

export default CardTable;
