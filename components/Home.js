import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PackrTrackr.png'
import profileImage from '../assets/My_headershot.png'
import friends from '../assets/friends.png'
import { connect } from 'react-redux'


class Home extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.lighterBG}>
                        <View style={styles.movingLogo}>
                            <Image source={logo} style={styles.logoImage} />
                        </View>
                        <View style={styles.movingButtons}>
                            <TouchableOpacity onPress={() => Actions.profile()} style={styles.profileButton} >
                                <Image onPress={() => Actions.profile()} style={styles.profileImage} source={{ uri: this.props.currentUser.profile_image }} />
                                <Text onPress={() => Actions.profile()} style={styles.buttonStyles}>Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.friends()} style={styles.friendsButton} >
                                <Image onPress={() => Actions.friends()} style={styles.profileImage} source={friends} />
                                <Text onPress={() => Actions.friends()} style={styles.buttonStyles}>Friends</Text>
                            </TouchableOpacity>
                            <View style={styles.movingCheckinButton}>
                                <TouchableOpacity onPress={() => Actions.nearbyHostels()} style={styles.checkinButton}>
                                    <Text style={styles.checkinButtonStyles}>Check-In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileButton: {
        flexDirection: 'column',
        width: 60,
        height: 60,
        backgroundColor: '#EB7F2E',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    friendsButton: {
        flexDirection: 'column',
        marginTop: 5,
        width: 60,
        height: 60,
        backgroundColor: '#EB7F2E',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    movingLogo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 128,
        marginLeft: 20
    },
    movingButtons: {
        marginTop: -348
    },
    logoImage: {
        height: 250,
        width: 217,
        marginRight: 2,
    },
    buttonStyles: {
        fontSize: 13,
        color: 'white'
    },
    movingCheckinButton: {
        marginTop: 270,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButton: {
        backgroundColor: '#EB7F2E',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        height: 70,
        width: 160,
        // borderWidth: 2,
        // borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButtonStyles: {
        // textShadowColor: 'rgba(230, 230, 230, 0.75)',
        // textShadowOffset: { width: -1, height: 1 },
        // textShadowRadius: 10,
        fontSize: 30,

    },
    baseImage: {
        height: '100%',
    },
    // lighterBGFirst: {
    //     flex: 1,
    //     backgroundColor: 'rgba(250, 250, 250, 0.08)',
    //     height: '100%'
    // },
    lighterBG: {
        paddingTop: 26,
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        height: '100%'
    }


})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        username: state.users.username,
        password: state.users.password,
        users: state.users.users,
        email: state.users.email,
        selectedHostel: state.users.selectedHostel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onAddUsername: (username) => dispatch(addUsername(username)),
        // onAddPassword: (password) => dispatch(addPassword(password)),
        // onAddUser: (username, password) => dispatch(submitUser(username, password)),
        // onAddEmail: (email) => dispatch(addEmail(email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home