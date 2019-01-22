import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'

//want to make country a dropdown menu with pre-existing country charts

const Signup = (props) => {
    if (props.selectedSignup) {
        modalContent = (
            <View style={styles.inputContainer}>
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('country')}
                    placeholder='country' value={props.country} />
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('username')}
                    placeholder='username' value={props.username} />
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('email')}
                    placeholder='email' value={props.email} />
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('password')}
                    placeholder='password' value={props.password} />
            </View>
        )
    }
    return (
        <Modal visible={props.selectedSignup === true} animationType='slide'>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <View style={styles.modalContainer}>
                {this.modalContent}
                <View>
                    <Button title='Submit' onPress={props.submitHandler} />
                    <Button onPress={props.loginButtonClick} title='Existing User?' />
                    <Button onPress={props.modalCloseHandler('selectedSignup')} color='red' title='Close' />
                </View>
            </View>
        </Modal>
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
    modalInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3

    },
    header: {
        paddingTop: 20,
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,

    },
})


export default Signup