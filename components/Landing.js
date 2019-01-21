import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const Landing = (props) => {
    return (
        <View>
            <View style={styles.landingButton} >
                <Button onPress={props.loginButtonClick} color='white' title='Login' />
            </View>
            <View style={styles.landingButton}>
                <Button onPress={props.signupButtonClick} color='white' title='Sign Up' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    landingButton: {
        width: '80%',
        backgroundColor: '#0098F7',
        margin: 15,
        borderRadius: 10
    }
})

export default Landing