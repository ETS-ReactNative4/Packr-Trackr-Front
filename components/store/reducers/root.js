import { ADD_USERNAME, INPUT_HANDLER, ADD_PASSWORD, SELECT_USER, SUBMIT_USER, DESELECT_USER, ADD_FIRSTNAME, ADD_LASTNAME, ADD_COUNTRY, ADD_EMAIL } from '../actions/actionTypes'

const initialState = {
    username: '',
    password: '',
    users: [],
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    selectedUser: {},
    selectedLogin: false,
    selectedSignup: false,
    hostelList: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_HANDLER:
            return {
                ...state,
                [name]: action
            }
        case ADD_HOSTELS:
            console.log(action, 'hostelAdding')
            return {
                ...state,
                hostelList: action
            }
        case ADD_USERNAME:
            return {
                ...state,
                username: action
            }
        case ADD_COUNTRY:
            return {
                ...state,
                country: action
            }
        case ADD_EMAIL:
            return {
                ...state,
                email: action
            }
        case ADD_FIRSTNAME:
            return {
                ...state,
                firstName: action
            }
        case ADD_LASTNAME:
            return {
                ...state,
                lastName: action
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