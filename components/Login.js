import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'

const Login = (props) => {
    if (props.selectedLogin) {
        modalContent = (
            <View style={styles.inputContainer}>
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('username')}
                    placeholder='username' value={props.username} />
                <TextInput style={styles.modalInputs} onChangeText={props.inputHandler('password')}
                    placeholder='password' value={props.password} />
            </View>
        )
    }
    return (
        <Modal visible={props.selectedLogin === true} animationType='slide'>
            <View style={styles.header}>
                <Text style={styles.headerText}>Packr Trackr</Text>
            </View>
            <View style={styles.modalContainer}>
                {this.modalContent}
                <View>
                    <Button onPress={props.submitHandler} title='Submit' />
                    <Button onPress={props.signupButtonClick} title='Not A User?' />
                    <Button onPress={props.modalCloseHandler('selectedLogin')} color='red' title='Close' />
                </View>
            </View>
        </Modal>
    )
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


export default Login