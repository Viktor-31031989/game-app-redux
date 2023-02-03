import React from 'react';



function CardTable({card, dispatch}) {
    const clickHandler = (id) =>{
        dispatch({type: 'CHOOSE_CARD', payload: id})
    }
    return (
        <div onClick={()=>clickHandler(card.id)} style={{fontSize: '40px', border: '1px solid grey', textAlign: 'center', padding: '15px 0'}}>
            {
                card.isOpen
                    ?
                    card.title
                    :
                    card.done
                        ?
                        '✅'
                        :
                        '🚫'
            }
        </div>
    );
}

export default CardTable;
