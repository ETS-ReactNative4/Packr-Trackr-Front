import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/PackrTrackrHomeImage.jpg'

class Home extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View>
                        <TouchableOpacity onPress={() => Actions.profile()} style={styles.profileButton} >
                            <Text onPress={() => Actions.profile()} style={styles.buttonStyles}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.friends()} style={styles.friendsButton} >
                            <Text onPress={() => Actions.friends()} style={styles.buttonStyles}>Friends</Text>
                        </TouchableOpacity>
                        <View style={styles.movingCheckinButton}>
                            <TouchableOpacity style={styles.checkinButton}>
                                <Text style={styles.checkinButtonStyles}>Check-In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileButton: {
        flexDirection: 'row',
        width: 60,
        height: 60,
        backgroundColor: 'rgba(0, 152, 247, 0.92)',
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: 'white'
    },
    buttonStyles: {
        fontSize: 13,
        color: 'white'
    },
    friendsButton: {
        flexDirection: 'row',
        marginTop: 5,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(0, 152, 247, 0.92)',
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: 'white'
    },
    movingCheckinButton: {
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButton: {
        backgroundColor: 'rgba(252, 173, 54, 0.86)',
        height: 70,
        width: 160,
        borderWidth: 2,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButtonStyles: {
        textShadowColor: 'rgba(230, 230, 230, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontSize: 30,

    },
    baseImage: {
        height: '100%',
    }

})

export default Home