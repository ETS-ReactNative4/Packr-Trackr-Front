import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import homeImage from '../assets/prism.png'
import myImage from '../assets/My_headershot.png'

class UserFriends extends React.Component {

    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.movingFriendsContainer}>
                        <SearchBar placeholder="Type Here..." darkTheme round />
                        <ScrollView>
                            <View style={styles.friendsContainer}>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.individualFriendContainer}>
                                    <Image style={styles.profileImage} source={myImage} />
                                    <View style={styles.friendInfoContainer}>
                                        <Text style={styles.friendsName}>Name</Text>
                                        <Text style={styles.friendStatus}>Status</Text>
                                        {/* <Text>Location</Text> */}
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    // movingFriendsContainer: {
    //     justifyContent: 'center',
    //     marginRight: 20,
    //     marginLeft: 20,
    //     width: 250,
    // },
    // friendsContainer: {
    //     flexDirection: 'column',
    //     backgroundColor: 'rgba(197, 180, 158, 0.95)',
    //     borderWidth: 5,
    //     borderColor: 'rgba(78, 78, 78, 0.9)',
    //     alignItems: 'center',
    //     height: '100%'
    // },
    // individualFriendBox: {
    //     backgroundColor: 'rgba(157, 157, 255, 0.9)',
    //     height: 60,
    //     width: '95%',
    //     borderRadius: 6,
    //     margin: 5,
    //     flexDirection: 'row'
    // },
    // friendInfoContainer: {
    //     flexDirection: 'column',
    //     marginLeft: 18
    // },
    // baseImage: {
    //     height: '100%',
    //     alignItems: 'center'
    // },
    // profileImage: {
    //     marginTop: 5,
    //     height: 50,
    //     width: 50,
    //     borderRadius: 25
    // }
    friendsName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    friendsContainer: {
        justifyContent: 'center',
        marginTop: 4,
        width: 280,
        flexDirection: 'column',
        backgroundColor: 'rgba(128, 128, 128, 0.96)',
        borderRadius: 5,
        borderColor: 'rgba(235, 128, 46, 0.767)',
        borderWidth: 0.6,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    individualFriendContainer: {
        backgroundColor: 'rgb(236, 234, 234)',
        height: 60,
        width: '95%',
        borderRadius: 6,
        margin: 5,
        flexDirection: 'row',
    },
    friendInfoContainer: {
        flexDirection: 'column',
        marginLeft: 18,
        justifyContent: 'space-between'
    },
    baseImage: {
        height: '100%',
        alignItems: 'center'
    },
    profileImage: {
        marginTop: 5,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    friendStatus: {
        marginBottom: 8
    },

})

export default UserFriends