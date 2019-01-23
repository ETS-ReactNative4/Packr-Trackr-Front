import { ADD_USERNAME, INPUT_HANDLER, SELECT_USER, ADD_PASSWORD, SUBMIT_USER, DESELECT_USER, ADD_FIRSTNAME, ADD_LASTNAME, ADD_EMAIL, ADD_COUNTRY } from './actionTypes'

export const addUsername = (username) => {
    return {
        type: ADD_USERNAME,
        username: username
    }
}
export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        email: email
    }
}
export const addCountry = (country) => {
    return {
        type: ADD_COUNTRY,
        country: country
    }
}
export const addFirstName = (firstName) => {
    return {
        type: ADD_FIRSTNAME,
        firstName: firstName
    }
}
export const addLastName = (lastName) => {
    return {
        type: ADD_LASTNAME,
        lastName: lastName
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
export const submitUser = (username, password) => {
    return {
        type: SUBMIT_USER,
        username: username,
        password: password
    }
}
export const deselectUser = () => {
    return {
        type: DESELECT_USER
    }
}
export const inputHandler = (name, value) => {
    return {
        type: INPUT_HANDLER,
        [name]: value
    }
}