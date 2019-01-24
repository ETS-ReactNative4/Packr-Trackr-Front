import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/PackrTrackrHomeImage.jpg'

const Landing = (props) => {
    return (
        <View>
            <ImageBackground source={homeImage} style={styles.baseImage}>
                <View style={styles.landingScreen}>
                    <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton} >
                        <Text style={styles.landingButtonText} onPress={() => Actions.login()} title='Login'>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton}>
                        <Text style={styles.landingButtonText} onPress={() => Actions.signup()} title='Sign Up'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    landingButton: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        backgroundColor: '#0098F7',
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    landingScreen: {
        marginTop: 200,
        width: '100%',
        alignItems: 'center'
    },
    baseImage: {
        height: '100%',
    }
})

export default Landing
