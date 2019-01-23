import { ADD_USERNAME, INPUT_HANDLER, SELECT_USER, ADD_PASSWORD, SUBMIT_USER, DESELECT_USER } from './actionTypes'

export const addUsername = (username) => {
    return {
        type: ADD_USERNAME,
        username: username
    }
}
export const addPassword = (password) => {
    return {
        type: ADD_PASSWORD,
        password: password
    }
}
export const selectUser = (key) => {
    return {
        type: SELECT_USER,
        userID: key
    }
}
export const submitUser = (user) => {
    return {
        type: SUBMIT_USER,
        users: user
    }
}
export const deselectUser = () => {
    return {
        type: DESELECT_USER
    }
}
export const inputHandler = (name) => (value) => {
    return {
        type: INPUT_HANDLER,
        [name]: value
    }
}