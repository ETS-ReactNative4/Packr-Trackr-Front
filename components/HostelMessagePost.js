import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PackrTrackr.png'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { addHostelMessages } from './store/actions/index'



class HostelMessagePost extends React.Component {
    state = {
        messageBody: ''
    }
    loadHostelMessages = () => {
        fetch('https://packr-trackr-db.herokuapp.com/hostelmessages')
            .then(result => result.json())
            .then((response) => {
                this.props.onAddHostelMessages(response)
            })
    }
    messageInputHandler = (event) => {
        this.setState({
            messageBody: event
        })
    }
    newMessage = () => {
        let newMessage = {
            messageBody: this.state.messageBody,
            hostel_id: this.props.selectedHostel.id,
            user_id: this.props.currentUser.id,
        }
        console.log(newMessage)
        fetch('https://packr-trackr-db.herokuapp.com/hostelmessages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage)
        })
            .then(response => response.json())
            .then(() => {
                this.setState({
                    messageBody: ''
                })
            })
            .then(() => {
                Actions.messageBoard()
            })
    }


    render() {
        return (
            <ImageBackground source={homeImage} style={styles.baseImage}>
                {/* <View style={styles.lighterBG}> */}
                <KeyboardAwareScrollView contentContainerStyle={styles.lighterBG}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}>
                    <View style={styles.boardHeader}>
                        <View>
                            <Image source={logo} style={styles.logoImage} />
                        </View>
                    </View>
                    <View>
                        <View>
                            <TextInput onChangeText={this.messageInputHandler} maxLength={140} multiline={true}
                                numberOfLines={6} style={styles.messageInput}
                                placeholder='Your Message' />
                        </View>
                    </View>
                    <View style={styles.movingPostButton}>
                        <TouchableOpacity onPress={() => this.newMessage()} style={styles.checkinButton}>
                            <Text style={styles.checkinButtonStyles}>Add Post</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
                {/* </View> */}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    boardHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },
    logoImage: {
        height: 78,
        width: 69,
        marginRight: 2,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkinButtonStyles: {
        fontSize: 20,
    },
    baseImage: {
        height: '100%',
    },
    lighterBG: {
        backgroundColor: 'rgba(250, 250, 250, 0.02)',
        height: '100%',
        alignItems: 'center',
    },
    contentContainer: {
        paddingVertical: 20
    },
    messageInput: {
        justifyContent: 'flex-start',
        paddingRight: 10,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        height: 240,
        width: 280,
        fontSize: 25,
        backgroundColor: 'white',
        marginTop: 12,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    movingPostButton: {
        marginTop: 50
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
        onAddHostelMessages: (messages) => dispatch(addHostelMessages(messages))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostelMessagePost)
// export default Home