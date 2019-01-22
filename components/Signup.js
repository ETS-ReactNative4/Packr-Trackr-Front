import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

//want to make country a dropdown menu with pre-existing country charts

const Signup = (props) => {

    return (
        <View style={styles.modalContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.signUpInputs} onChangeText={props.inputHandler('country')}
                    placeholder='country' value={props.country} />
                <TextInput style={styles.signUpInputs} onChangeText={props.inputHandler('username')}
                    placeholder='username' value={props.username} />
                <TextInput style={styles.signUpInputs} onChangeText={props.inputHandler('email')}
                    placeholder='email' value={props.email} />
                <TextInput style={styles.signUpInputs} onChangeText={props.inputHandler('password')}
                    placeholder='password' value={props.password} />
            </View>
            <View>
                <Button title='Submit' onPress={props.submitHandler} />
                <Button onPress={() => Actions.login()} title='Existing User?' />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: 40,
        alignItems: 'center',
    },
    inputContainer: {
        paddingLeft: 20,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    signUpInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3

    },
})


export default Signup