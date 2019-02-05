import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PTlogo.png'
import { addUserFriends } from './store/actions/index'



class UserFriends extends React.Component {
    componentDidMount() {
        this.loadUserFriends()
    }
    loadUserFriends = () => {
        fetch(`https://packr-trackr-db.herokuapp.com/users/${this.props.currentUser.id}/userFriends`)
            .then(result => result.json())
            .then((response) => {
                this.props.onAddUserFriends(response)
            })
    }

    render() {
        const friends = this.props.friendsList.map(friend => {
            return (
                <TouchableOpacity key={friend.id} style={styles.individualFriendContainer}>
                    <Image style={styles.profileImage} source={{ uri: friend.profile_image }} />
                    <View style={styles.friendInfoContainer}>
                        <Text style={styles.friendsName}>{friend.first_name} {friend.last_name}</Text>
                        <Text style={styles.friendStatus}>Status: {`${friend.travel_status ? 'Traveling' : 'Saving To Travel'}`}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.logoMoving}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.movingFriendsContainer}>
                        <SearchBar placeholder="Type Here..." darkTheme round />
                        <ScrollView>
                            <View style={styles.friendsContainer}>
                                {friends}
                            </View>
                            <View style={{ height: 100 }}></View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    friendsName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    movingFriendsContainer: {
        marginTop: -14
    },
    friendsContainer: {
        justifyContent: 'center',
        marginTop: 4,
        width: 280,
        flexDirection: 'column-reverse',
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
    friendsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        // marginTop: 10,
        // marginBottom: 20
    },
    logoMoving: {
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 8,
        marginTop: 14
    },
    logo: {
        height: 88,
        width: 76,
    },

})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        selectedHostel: state.users.selectedHostel,
        friendsList: state.users.friendsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUserFriends: (messages) => dispatch(addUserFriends(messages))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends)