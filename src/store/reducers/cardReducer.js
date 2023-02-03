const initialState = {
    cards: [
        {id: 1, done: false, isOpen: false, title: '🔥'},
        {id: 2, done: false, isOpen: false, title: '😜'},
        {id: 3, done: false, isOpen: false, title: '🤬'},
        {id: 4, done: false, isOpen: false, title: '🤡'},
        {id: 5, done: false, isOpen: false, title: '💩'},
        {id: 6, done: false, isOpen: false, title: '🤡'},
        {id: 7, done: false, isOpen: false, title: '🔥'},
        {id: 8, done: false, isOpen: false, title: '🐸'},
        {id: 9, done: false, isOpen: false, title: '💩'},
        {id: 10, done: false, isOpen: false, title: '✊'},
        {id: 11, done: false, isOpen: false, title: '😜'},
        {id: 12, done: false, isOpen: false, title: '👨‍👩‍👧'},
        {id: 13, done: false, isOpen: false, title: '🐸'},
        {id: 14, done: false, isOpen: false, title: '🤬'},
        {id: 15, done: false, isOpen: false, title: '👨‍👩‍👧'},
        {id: 16, done: false, isOpen: false, title: '🚚'},
        {id: 17, done: false, isOpen: false, title: '👻'},
        {id: 18, done: false, isOpen: false, title: '🚚'},
        {id: 19, done: false, isOpen: false, title: '👻'},
        {id: 20, done: false, isOpen: false, title: '✊'},
    ]
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHOOSE_CARD":
            return {
                ...state,
                cards: [...state.cards.map(el => el.id === action.payload ? {...el, isOpen: true} : {...el})]
            }
        case "CHANGE_STATE":
            return {
                ...state,
                cards: [...state.cards.map(el => el.id === action.payload.oneId || el.id === action.payload.twoId
                    ?
                    {...el, isOpen: null, done: true}
                    :
                    {...el}
                )]
            }
        case "CLOSE_CARD":
            return {
                ...state,
                cards: [...state.cards.map(el => el.id === action.payload.oneId || el.id === action.payload.twoId
                    ?
                    {...el, isOpen: false}
                    :
                    {...el}
                )]
            }
        default:
            return state
    }
}