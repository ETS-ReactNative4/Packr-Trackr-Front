import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import PTlogo from '../assets/PT4Name.png'

const Landing = (props) => {
    return (
        <View>
            <ImageBackground source={homeImage} style={styles.baseImage}>
                <View style={styles.landingScreen}>
                    <Image style={styles.logo} source={PTlogo} />
                    <View style={styles.buttonBox}>
                        <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton} >
                            <Text style={styles.landingButtonText} onPress={() => Actions.login()} title='Login'>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.signup()} style={styles.landingButton}>
                            <Text style={styles.landingButtonText} onPress={() => Actions.signup()} title='Sign Up'>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: '#EB7F2E',
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonBox: {
        marginTop: 80
    },
    logo: {
        width: 300,
        height: 91,
    },
    landingButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    landingScreen: {
        paddingTop: 150,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        height: '100%'
    },
    baseImage: {
        height: '100%',
    }
})

export default Landing
