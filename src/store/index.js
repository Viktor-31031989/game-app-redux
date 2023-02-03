import {createStore} from "redux";
import {cardReducer} from "./reducers/cardReducer";

export const store = createStore(cardReducer)
