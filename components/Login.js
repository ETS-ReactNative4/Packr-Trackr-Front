import React from 'react'
import { View, TextInput, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { addUsername, addPassword, submitUser, addEmail } from './store/actions/index'
import homeImage from '../assets/prism.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PTlogo from '../assets/PT4Name.png'



class Login extends React.Component {

    submitHandler = () => {
        if (this.props.username === '' || this.props.password === '') {
            return
        }
        let username = this.props.username.username
        let password = this.props.password.password

        console.log('username', this.props.username.username, 'pw', this.props.password.password)
        this.props.onAddUser(username, password)

    }
    addUsernameInput = (username) => {
        this.props.onAddUsername(username)
        console.log(this.props.username)

    }
    addPasswordInput = (password) => {
        this.props.onAddPassword(password)
        console.log(this.props.password)
    }
    addEmailInput = (email) => {
        this.props.onAddEmail(email)
        console.log(this.props.email)
    }
    render() {
        return (
            <ImageBackground source={homeImage} style={styles.baseImage}>
                <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}>
                    {/* <View style={styles.mainContainer}> */}
                    <View style={styles.logoMoving}>
                        <Image style={styles.logo} source={PTlogo} />
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.loginHeader}>Login</Text>
                        </View>
                        <TextInput style={styles.loginInputs} onChangeText={this.addEmailInput}
                            placeholder='Email' />
                        <TextInput style={styles.loginInputs} onChangeText={this.addPasswordInput}
                            placeholder='Password' />
                        <View style={styles.buttonMoving}>
                            <TouchableOpacity onPress={() => Actions.home()} style={styles.landingButton}>
                                <Text style={styles.landingButtonText} onPress={() => Actions.home()}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.signup()} style={styles.landingButton}>
                                <Text style={styles.landingButtonText} onPress={() => Actions.signup()}>Not A User?</Text>
                            </TouchableOpacity>
                            {/* <Button onPress={this.submitHandler} title='Submit' />
                            <Button onPress={() => Actions.signup()} title='Not A User?' />
                            <Button onPress={() => Actions.home()} color='red' title='Next' /> */}
                        </View>
                    </View>
                    {/* </View> */}
                </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 3,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.02)',
        height: '100%',
    },
    inputContainer: {
        marginTop: 10,
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: 'rgba(128, 128, 128, 0.96)',
        borderRadius: 10,
        shadowColor: '#EB7F2E',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonMoving: {
        marginTop: 60
    },
    loginInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        height: 40,
        backgroundColor: 'white'
    },
    landingButton: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        backgroundColor: '#EB7F2E',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    logo: {
        width: 226,
        height: 69,
    },
    logoMoving: {
        marginTop: 13
    },
    landingButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    baseImage: {
        height: '100%',
    },
    loginHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20
    },
})

const mapStateToProps = state => {
    return {
        username: state.users.username,
        password: state.users.password,
        users: state.users.users,
        email: state.users.email,
        selectedHostel: state.users.selectedHostel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUsername: (username) => dispatch(addUsername(username)),
        onAddPassword: (password) => dispatch(addPassword(password)),
        onAddUser: (username, password) => dispatch(submitUser(username, password)),
        onAddEmail: (email) => dispatch(addEmail(email)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login