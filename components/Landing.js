import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Landing = (props) => {
    return (
        <View>
            <Button onPress={this.loginClick} style={styles.landingButton} title='Login' />
            <Button onPress={this.signupClick} style={styles.landingButton} title='Sign Up' />
        </View>
    )
}

const styles = StyleSheet.create({
    landingButton: {
        width: '80%',
        color: 'grey'
    }
})

export default Landing