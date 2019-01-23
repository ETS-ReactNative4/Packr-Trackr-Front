import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { addUsername, addPassword, submitUser } from './store/actions/index'



class Login extends React.Component {

    submitHandler = () => {
        if (this.props.username === '' || this.props.password === '') {
            return
        }
        let username = this.props.username.username
        let password = this.props.password.password

        console.log('username', this.props.username.username, 'pw', this.props.password.password)
        this.props.onAddUser(username, password)

    }
    addUsernameInput = (username) => {
        this.props.onAddUsername(username)
        console.log(this.props.username)

    }
    addPasswordInput = (password) => {
        this.props.onAddPassword(password)
        console.log(this.props.password)
    }
    render() {
        console.log('users', this.props.users)
        return (
            <View>
                <View style={styles.modalContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.loginInputs} onChangeText={this.addUsernameInput}
                            value={this.props.username} placeholder='Username' />
                        <TextInput style={styles.loginInputs} onChangeText={this.addPasswordInput}
                            value={this.props.password} placeholder='Password' />
                    </View>
                    <View>
                        <Button onPress={this.submitHandler} title='Submit' />
                        <Button onPress={() => Actions.signup()} title='Not A User?' />
                        <Button onPress={() => Actions.home()} color='red' title='Next' />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 40,
    },
    inputContainer: {
        paddingLeft: 20,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loginInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3
    },
})

const mapStateToProps = state => {
    return {
        username: state.users.username,
        password: state.users.password,
        users: state.users.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUsername: (username) => dispatch(addUsername(username)),
        onAddPassword: (password) => dispatch(addPassword(password)),
        onAddUser: (username, password) => dispatch(submitUser(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login