import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './components/store/configureStore'
import App from './App'

const store = configureStore()

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>

)




AppRegistry.registerComponent('rncourse', () => RNRedux)