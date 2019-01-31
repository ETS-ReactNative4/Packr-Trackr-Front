import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PTlogo.png'
import friends from '../assets/friends.png'
import { connect } from 'react-redux'
import messageBoard from '../assets/messageboard2.png'
import findAFriend from '../assets/findAFriend.png'

class CheckedinHostelHome extends React.Component {
    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.lighterBG}>
                        <View style={styles.movingLogo}>
                            <Image source={logo} style={styles.logoImage} />
                        </View>
                        <View style={styles.hostelInformation}>
                            <Text style={styles.hostelText}>Checked In</Text>
                            <Text style={styles.hostelText}>{this.props.selectedHostel.name}</Text>
                            <Image style={styles.hostelImage} source={{ uri: this.props.selectedHostel.image }} />
                        </View>
                        <View style={styles.movingButtons}>
                            <TouchableOpacity onPress={() => Actions.profile()} style={styles.profileButton} >
                                <Image style={styles.profileImage} source={{ uri: this.props.currentUser.profile_image }} />
                                <Text style={styles.buttonStyles}>Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.friends()} style={styles.friendsButton} >
                                <Image style={styles.profileImage} source={friends} />
                                <Text style={styles.buttonStyles}>Friends</Text>
                            </TouchableOpacity>
                            <View style={styles.hostelButtons}>
                                <TouchableOpacity onPress={() => Actions.messageBoard()} style={styles.hostelButton} >
                                    <Image style={styles.hostelButtonVector} source={messageBoard} />
                                    <Text style={styles.hostelButtonText}>Message Board</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Actions.hostelStayers()} style={styles.hostelButton} >
                                    <Image style={styles.hostelButtonVectorFriends} source={findAFriend} />
                                    <Text style={styles.hostelButtonText}>Find A Friend</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.movingCheckinButton}>
                                <TouchableOpacity onPress={() => Actions.home()} style={styles.checkinButton}>
                                    <Text style={styles.checkinButtonStyles}>Check-Out</Text>
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
    movingButtons: {
        marginTop: -215
    },
    movingLogo: {
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 10,
        marginTop: -6
    },
    logoImage: {
        height: 88,
        width: 76,
    },
    buttonStyles: {
        fontSize: 13,
        color: 'white'
    },
    movingCheckinButton: {
        marginTop: 40,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButtonStyles: {
        fontSize: 30,
    },
    baseImage: {
        height: '100%',
    },
    lighterBG: {
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        height: '100%',
        paddingTop: 22
    },
    hostelInformation: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -80
    },
    hostelText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    hostelImage: {
        height: 180,
        width: 180,
        borderRadius: 90,
        marginTop: 20,
    },
    hostelButtons: {
        flexDirection: 'row',
        marginTop: 135,
        justifyContent: 'center'
    },
    hostelButton: {
        flexDirection: 'column',
        marginTop: 30,
        marginRight: 8,
        marginLeft: 8,
        width: 110,
        height: 70,
        backgroundColor: 'rgb(160, 160, 160)',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    hostelButtonVector: {
        height: 40,
        width: 40,
    },
    hostelButtonVectorFriends: {
        height: 40,
        width: 80,
    }
})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckedinHostelHome)
