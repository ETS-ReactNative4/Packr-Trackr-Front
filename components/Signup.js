import React from 'react'
import { View, TextInput, ImageBackground, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import homeImage from '../assets/prism.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PTlogo from '../assets/PT4Name.png'
import { addUsername, addPassword, submitUser, addFirstName, addLastName, addEmail } from './store/actions/index'

// import React from 'react'
// import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'
// import { Actions } from 'react-native-router-flux'

//want to make country a dropdown menu with pre-existing country charts


class Signup extends React.Component {
    submitHandler = () => {
        if (this.props.username === '' || this.props.password === '') {
            return
        }
        let username = this.props.username
        let email = this.props.email
        let firstName = this.props.firstName
        let lastName = this.props.lastName
        let country = this.props.country
        let password = this.props.password
        console.log('USERNAME', this.state.username, 'PASWORRRK', this.state.password)
        this.props.onAddUser(username, password, firstName, lastName, country, email)
        console.log(this.props.users)
    }

    addUsernameInput = (username) => {
        this.props.onAddUsername(username)
        console.log(this.props.username)

    }
    addPasswordInput = (password) => {
        this.props.onAddPassword(password)
        console.log(this.props.password)
    }
    addFirstNameInput = (firstName) => {
        this.props.onAddFirstName(firstName)
        console.log(this.props.firstName)
    }
    addLastNameInput = (lastName) => {
        this.props.onAddLastName(lastName)
        console.log(this.props.lastName)
    }
    addCountryInput = (country) => {
        this.props.onAddCountry(country)
        console.log(this.props.country)
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
                    <View style={styles.logoMoving}>
                        <Image style={styles.logo} source={PTlogo} />
                    </View>
                    {/* <View style={styles.mainContainer}> */}
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.loginHeader}>Sign Up</Text>
                        </View>
                        <TextInput style={styles.signUpInputs} onChangeText={this.addFirstNameInput}
                            placeholder='First Name' />
                        <TextInput style={styles.signUpInputs} onChangeText={this.addLastNameInput}
                            placeholder='Last Name' />
                        <TextInput style={styles.signUpInputs} placeholder='Country' />
                        <TextInput style={styles.signUpInputs} onChangeText={this.addEmailInput}
                            placeholder='Email' />
                        <TextInput style={styles.signUpInputs} onChangeText={this.addPasswordInput}
                            placeholder='Password' />
                        <View style={styles.buttonMoving}>
                            <TouchableOpacity onPress={() => Actions.home()} style={styles.landingButton}>
                                <Text style={styles.landingButtonText} onPress={() => Actions.home()}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.login()} style={styles.landingButton}>
                                <Text style={styles.landingButtonText} onPress={() => Actions.login()}>Existing User?</Text>
                            </TouchableOpacity>
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
        marginTop: 8,
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 30,
        backgroundColor: 'rgba(128, 128, 128, 0.96)',
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: '#EB7F2E',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonMoving: {
        marginTop: 20
    },
    signUpInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3,
        height: 28,
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
    landingButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    baseImage: {
        height: '100%',
    },
    logo: {
        width: 226,
        height: 69,
    },
    logoMoving: {
        marginTop: 13
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
        country: state.users.country,
        firstName: state.users.firstName,
        lastName: state.users.lastName,
        email: state.users.email,
        selectedUser: state.users.selectedUser,
        users: state.users.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUsername: (username) => dispatch(addUsername(username)),
        onAddFirstName: (firstName) => dispatch(addFirstName(firstName)),
        onAddLastName: (lastName) => dispatch(addLastName(lastName)),
        onAddEmail: (email) => dispatch(addEmail(email)),
        onAddCountry: (country) => dispatch(addCountry(country)),
        onAddPassword: (password) => dispatch(addPassword(password)),
        onAddUser: (username, password) => dispatch(submitUser(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
// export default Signup