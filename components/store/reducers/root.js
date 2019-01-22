import { ADD_USERNAME, INPUT_HANDLER, ADD_PASSWORD, SELECT_USER, SUBMIT_USER, DESELECT_USER } from '../actions/actionTypes'

const initialState = {
    username: '',
    password: '',
    users: [],
    email: '',
    country: '',
    selectedUser: {},
    selectedLogin: false,
    selectedSignup: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_HANDLER:
            return {
                ...state,
                [name]: action.value
            }
        case ADD_USERNAME:
            return {
                ...state,
                username: action.value
            }
        case ADD_PASSWORD:
            return {
                ...state,
                password: action.value
            }
        case SELECT_USER:
            return {
                ...state,
                selectedUser: state.users.find(user => {
                    return user.id === action.userID
                })
            }
        case SUBMIT_USER:
            return {
                ...state,
                users: [...users, { username: username, password: password }]
            }
        case DESELECT_USER:
            return {
                ...state,
                selectedUser: null
            }
        default:
            return state;
    }
}

export default userReducer