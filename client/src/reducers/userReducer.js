const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

//Log in or not 
const defaultState = {
    currentUser: {},
    isAuth: false
}
//Current user object
export default function userReducerState(state = defaultState, action) { 
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case LOGOUT: 
            localStorage.removeItem('token')
            return {
                ...state, 
                currentUser: {},
                isAuth: false 
            }
        default: 
            return state
    }
}

export const setUser = user => ({
    type: SET_USER, 
    payload: user 
})

export const logOut = () => ({
    type: LOGOUT
})