import React from 'react'
import { View, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/PackrTrackrHomeImage'

const Landing = (props) => {
    return (
        <View>
            <ImageBackground source={homeImage} style={styles.baseImage}>
                <View style={styles.landingScreen}>
                    <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton} >
                        <Button onPress={() => Actions.login()} color='white' title='Login' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton}>
                        <Button onPress={() => Actions.signup()} color='white' title='Sign Up' />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
    },
    baseImage: {
        height: '100%',
    }
})

export default Landing
