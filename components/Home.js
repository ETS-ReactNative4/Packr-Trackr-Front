import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { addUsername, addPassword, submitUser } from './store/actions/index'



class Home extends React.Component {

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

// const mapStateToProps = state => {
//     return {
//         username: state.users.username,
//         password: state.users.password,
//         users: state.users.users,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddUsername: (username) => dispatch(addUsername(username)),
//         onAddPassword: (password) => dispatch(addPassword(password)),
//         onAddUser: (username, password) => dispatch(submitUser(username, password)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Home