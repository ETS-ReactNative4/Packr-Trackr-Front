import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/PackrTrackrHomeImage.jpg'
import myImage from '../assets/My_headershot.png'

class Profile extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.movingEditButton}>
                        <TouchableOpacity style={styles.editProfileButton}>
                            <Text>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.profileImage} source={myImage} />
                    <View style={styles.profileContainer}>
                        <Text>Status:</Text>
                        <Text>Current Town</Text>
                        <Text>Current Hostel</Text>
                        <Text>About Me</Text>
                        <View style={styles.tripButtonsSpacing}>
                            <TouchableOpacity style={styles.tripButtonPast}>
                                <Text>Past Trips</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tripButtonCurrent}>
                                <Text>Current Trip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileImage: {
        marginTop: -30,
        height: 150,
        width: 150,
        borderRadius: 75
    },
    tripButtonsSpacing: {
        marginTop: 160,
        flexDirection: 'row',
    },
    movingEditButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%'

    },
    editProfileButton: {
        width: 50,
        height: 40,
        backgroundColor: 'rgba(0, 152, 247, 0.92)',
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white'
    },
    tripButtonCurrent: {
        width: 110,
        height: 60,
        backgroundColor: 'yellow',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tripButtonPast: {
        width: 110,
        height: 60,
        backgroundColor: 'blue',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileContainer: {
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(197, 180, 158, 0.95)',
        borderWidth: 5,
        borderColor: 'rgba(78, 78, 78, 0.9)',
        height: 300,
        width: 250,

    },
    baseImage: {
        height: '100%',
        alignItems: 'center'
    }

})

export default Profile