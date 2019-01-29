import { ADD_USERNAME, INPUT_HANDLER, ADD_PASSWORD, SELECT_HOSTEL, SUBMIT_USER, DESELECT_USER, ADD_FIRSTNAME, ADD_LASTNAME, ADD_COUNTRY, ADD_EMAIL, ADD_HOSTELS } from '../actions/actionTypes'

const initialState = {
    username: '',
    password: '',
    users: [],
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    selectedHostel: {},
    selectedLogin: false,
    selectedSignup: false,
    hostelList: [],
    currentUser: {
        id: 1,
        first_name: "Dane",
        last_name: "Parke",
        email: "dane.parke@colorado.edu",
        password: "password",
        country: "Australia",
        admin: true,
        profile_image: "http://daneparke-portfolio.surge.sh/Professional_headshot.png",
        about_me: "I am a Colorado Native who is excited to travel, meet new people, and experience new cultures!",
        travel_status: true,
        checkin_status: false,
        whats_app_number: "19708193277"
    }
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
        case SELECT_HOSTEL:
            console.log(action, 'SELECTED HOSTEL')
            return {
                ...state,
                selectedHostel: state.hostelList.hostelList.find(hostel => {
                    return hostel.id === action.key
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