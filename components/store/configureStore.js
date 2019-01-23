import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/root'

const rootReducer = combineReducers({
    users: userReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore