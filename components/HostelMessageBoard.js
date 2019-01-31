import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PTlogo.png'
import profileImage from '../assets/My_headershot.png'
import { connect } from 'react-redux'
import { addHostelMessages } from './store/actions/index'



class HostelMessageBoard extends React.Component {
    componentDidMount() {
        this.loadHostelMessages()
    }
    loadHostelMessages = () => {
        fetch(`https://packr-trackr-db.herokuapp.com/hostels/${this.props.selectedHostel.id}/hostelmessages`)
            .then(result => result.json())
            .then((response) => {
                this.props.onAddHostelMessages(response)
            })
    }

    render() {
        const messages = this.props.hostelMessages.map(message => {
            return (
                <TouchableOpacity key={message.id} style={styles.individualMessageContainer} >
                    <Image style={styles.userImage} source={{ uri: message.profile_image }} />
                    <View style={styles.messageContextContainer}>
                        <Text style={styles.usersName}>{message.first_name} {message.last_name}</Text>
                        <Text>{message.messageBody}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.lighterBG}>
                        <View style={styles.movingLogo}>
                            <Image source={logo} style={styles.logoImage} />
                        </View>
                        <View style={styles.boardHeader}>
                            <View>
                                <TouchableOpacity onPress={() => Actions.messagePost()} style={styles.newPostButton}>
                                    <Text style={styles.newPostButtonStyles}>New Post</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView>
                            <View>
                                <View style={styles.messagesContainer}>
                                    {messages}
                                </View>
                                <View style={{ height: 10 }}></View>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boardHeader: {
        marginTop: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 8,
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    // movingLogo: {
    //     marginLeft: 12,
    //     marginTop: -8
    // },
    // logoImage: {
    //     height: 78,
    //     width: 69,
    //     marginRight: 2,
    // },
    movingLogo: {
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 8,
        marginTop: 14
    },
    logoImage: {
        height: 88,
        width: 76,
    },
    newPostButton: {
        backgroundColor: '#EB7F2E',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30
    },
    newPostButtonStyles: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    baseImage: {
        height: '100%',
    },
    lighterBG: {
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    individualMessageContainer: {
        backgroundColor: 'rgb(236, 234, 234)',
        height: 60,
        width: '95%',
        borderRadius: 6,
        margin: 5,
        flexDirection: 'row',
    },
    contentContainer: {
        paddingVertical: 20
    },
    messagesContainer: {
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
        marginBottom: 50
    },
    messageContextContainer: {
        flexDirection: 'column',
        marginLeft: 18,
        justifyContent: 'space-between',
        paddingRight: 50
    },
    usersName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
})

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        hostelMessages: state.users.hostelMessages,
        selectedHostel: state.users.selectedHostel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddHostelMessages: (messages) => dispatch(addHostelMessages(messages))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostelMessageBoard)
// export default Home