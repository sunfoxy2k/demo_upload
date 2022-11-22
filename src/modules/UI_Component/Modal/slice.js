import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        closeModal : (state, action) => {
            return null
        },
        openModal : (state, {payload}) => {
            return payload
        }
    }
})

const { actions, reducer} = modalSlice;

export const {closeModal , openModal} = actions;

export default reducer;