import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Login extends React.Component {
    // state = {
    //     username: '',
    //     password: ''
    // }

    // inputHandler = (name) => (value) => {
    //     console.log('Input Handler', name, 'value', value)
    //     this.setState({
    //         [name]: value
    //     })
    // }
    render() {
        return (
            <View>
                <View style={styles.modalContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.loginInputs} onChangeText={this.props.inputHandler('username')}
                            placeholder='username' />
                        <TextInput style={styles.loginInputs} onChangeText={this.props.inputHandler('password')}
                            placeholder='password' />
                    </View>
                    <View>
                        <Button onPress={this.props.submitHandler} title='Submit' />
                        {/* <Button onPress={() => Actions.signup()} title='Not A User?' /> */}
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


export default Login