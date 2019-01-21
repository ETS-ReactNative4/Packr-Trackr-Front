import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const Landing = (props) => {
    return (
        <View style={styles.landingScreen}>
            <View style={styles.landingButton} >
                <Button onPress={props.loginOptionHandler('selectedLogin')} color='white' title='Login' />
            </View>
            <View style={styles.landingButton}>
                <Button onPress={props.loginOptionHandler('selectedSignup')} color='white' title='Sign Up' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    landingButton: {
        flexDirection: 'row',
        minWidth: 100,
        backgroundColor: '#0098F7',
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center'
    },
    landingScreen: {
        marginTop: 200
    }
})

export default Landing