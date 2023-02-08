import React from 'react';



function CardTable({card, dispatch}) {
    const clickHandler = (id) =>{
        dispatch({type: 'CHOOSE_CARD', payload: id})
    }
    return (
        <div onClick={()=>clickHandler(card.id)} style={{fontSize: '40px', border: '1px solid grey', textAlign: 'center', padding: '0 0'}}>
            {
                card.isOpen
                    ?
                    card.title
                    :
                    card.done
                        ?
                        <div style={{background: 'lightGreen', height: '80px', width: '80px', margin: '0', padding: '0'}}></div>
                        :
                        <div style={{background: 'grey', height: '80px', width: '80px', margin: '0', padding: '0'}}></div>
            }
        </div>
    );
}

export default CardTable;
