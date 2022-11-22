import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false,
    userName : '',
    profileImgUrl : ''
}

const {actions, reducer} = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, {payload}) => {
            const {userName} = payload
            state.isLogin = true  
            state.userName = userName
        },
        setProfileImgUrl : (state, {payload}) => {
            state.profileImgUrl = payload
        },
        logout : (state, actions) => {
            return initialState
        }
    }
})


const {actions : actionsForJWT , reducer : reducerForJWT} = createSlice({
    name : 'jwt',
    initialState: '',
    reducers : {
        setup : (state, action ) => {
            const {payload} =action
            return payload
        },
        reset : (state, action) => {
            return ''
        }
    }
})

export default reducer;
export {reducerForJWT};

export const {login, logout, setProfileImgUrl} = actions
export const {setup, reset} = actionsForJWT