import { combineReducers } from "redux";
import {getUser} from "./reducer"

const rootReducer = combineReducers({
    getUser
})

export default rootReducer;