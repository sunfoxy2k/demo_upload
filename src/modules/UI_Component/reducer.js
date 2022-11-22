import { combineReducers } from "@reduxjs/toolkit"
import modalReducer from "./Modal/slice"

const UI_reducer = combineReducers({
    modal : modalReducer
})

export default UI_reducer