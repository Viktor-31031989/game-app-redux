import {initialState} from "./initialState";

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHOOSE_CARD":
            return {
                ...state,
                cards: [...state.cards.map(el => el.id === action.payload ? {...el, isOpen: true} : {...el})],
                counter: state.counter + 1,
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
        case 'REFRESH':
            return {
                ...state,
                cards: [...state.cards.map(el => el.isOpen === true || el.done === true
                    ?
                    {...el, isOpen: false, done: false}
                    :
                    {...el}
                )],
                counter: state.counter = 0,
                isLose: false,
                level: 1
            }
        case "LOSE_GAME":
            return {
                ...state,
                cards: [...state.cards.map(el => el.isOpen === true || el.done === true
                    ?
                    {...el, isOpen: false, done: false}
                    :
                    {...el}
                )],
                counter: state.counter = 0,
                isLose: action.payload,
            }
        case "WIN_GAME":
            return {
                ...state,
                cards: [...state.cards.map(el => el.isOpen === true || el.done === true
                    ?
                    {...el, isOpen: false, done: false}
                    :
                    {...el}
                )],
                counter: state.counter = 0,
                isWin: action.payload,
            }
        case "CHANGE_LEVEL":
            return {
                ...state,
                cards: [...state.cards.map(el => el.isOpen === true || el.done === true
                    ?
                    {...el, isOpen: false, done: false}
                    :
                    {...el}
                )],
                isWin: action.payload,
                level: state.level + 1,
            }
        case "NEW_CARDS_OPEN":
            return {
                ...state,
                newCards: [...state.cards.map(el => el.isOpen === false
                    ?
                    {...el, isOpen: action.payload}
                    :
                    {...el}
                )],

            }
        case "NEW_CARDS_CLOSED":
            return {
                ...state,
                newCards: [...state.cards.map(el => el.isOpen === true
                    ?
                    {...el, isOpen: action.payload}
                    :
                    {...el}
                )],

            }
        default:
            return state
    }
}
