import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import homeImage from '../assets/prism.png'
import myImage from '../assets/My_headershot.png'
import logo from '../assets/PTlogo.png'
import { addHostelStayers } from './store/actions/index'


class HostelStayers extends React.Component {
    componentDidMount() {
        this.loadHostelStayers()
    }
    loadHostelStayers = () => {
        fetch(`https://packr-trackr-db.herokuapp.com/hostels/${this.props.selectedHostel.id}/hosteluser`)
            .then(result => result.json())
            .then((response) => cosole.log(response))
            .then((response) => {
                this.props.onAddHostelStayers(response)
            })
    }

    render() {
        const people = this.props.hostelStayers.map(person => {
            return (
                <TouchableOpacity key={person.id} style={styles.individualFriendContainer}>
                    <Image style={styles.profileImage} source={{ uri: person.profile_image }} />
                    <View style={styles.friendInfoContainer}>
                        <Text style={styles.friendsName}>{person.first_name} {person.last_name}</Text>
                        <Text style={styles.friendStatus}>Status: {`${person.travel_status ? 'Traveling' : 'Saving To Travel'}`}</Text>
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
                                {people}
                            </View>
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
    movingFriendsContainer: {
        marginTop: -14
    },

})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        selectedHostel: state.users.selectedHostel,
        hostelStayers: state.users.hostelStayers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddHostelStayers: (messages) => dispatch(addHostelStayers(messages))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostelStayers)