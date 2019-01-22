const initialState = {
    username: '',
    password: '',
    users: [],
    email: '',
    country: '',
    selectedLogin: false,
    selectedSignup: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer