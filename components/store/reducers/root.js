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
                [name]: action
            }
        case ADD_USERNAME:
            return {
                ...state,
                username: action
            }
        case ADD_PASSWORD:
            return {
                ...state,
                password: action
            }
        case SELECT_USER:
            return {
                ...state,
                selectedUser: state.users.find(user => {
                    return user.id === action.userID
                })
            }
        case SUBMIT_USER:
            console.log(action, 'action')
            return {
                ...state,
                users: [...state.users, { username: action.username, password: action.password }]
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