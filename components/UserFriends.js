import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import homeImage from '../assets/PackrTrackrHomeImage'
import myImage from '../assets/My_headershot.png'

import { addUsername, addPassword, submitUser } from './store/actions/index'



class UserFriends extends React.Component {

    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.movingFriendsContainer}>
                        <ScrollView>
                            <View style={styles.friendsContainer}>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendBox}>
                                    <Text>Name</Text>
                                    <Text>Status</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    movingFriendsContainer: {
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        width: 250,
    },
    friendsContainer: {
        flexDirection: 'column',
        backgroundColor: 'rgba(197, 180, 158, 0.95)',
        borderWidth: 5,
        borderColor: 'rgba(78, 78, 78, 0.9)',
        alignItems: 'center',
        height: '100%'
    },
    individualFriendBox: {
        backgroundColor: 'rgba(157, 157, 255, 0.9)',
        height: 60,
        width: '95%',
        borderRadius: 6,
        margin: 5,
    },
    baseImage: {
        height: '100%',
        alignItems: 'center'
    }

})

// const mapStateToProps = state => {
//     return {
//         username: state.users.username,
//         password: state.users.password,
//         users: state.users.users,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddUsername: (username) => dispatch(addUsername(username)),
//         onAddPassword: (password) => dispatch(addPassword(password)),
//         onAddUser: (username, password) => dispatch(submitUser(username, password)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default UserFriends