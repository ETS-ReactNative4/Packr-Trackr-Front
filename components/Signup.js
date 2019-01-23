import React from 'react'
import { Modal, View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { addUsername, addPassword, submitUser, inputHandler, selectUser, deselectUser, addFirstName, addLastName } from './store/actions/index'

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
            <View style={styles.modalContainer} >
                <View style={styles.inputContainer}>
                    <TextInput style={styles.signUpInputs} onChangeText={this.addFirstNameInput}
                        placeholder='First Name' value={this.props.firstName} />
                    <TextInput style={styles.signUpInputs} onChangeText={this.addLastNameInput}
                        placeholder='Last Name' value={this.props.lastName} />
                    <TextInput style={styles.signUpInputs} onChangeText={this.addCountryInput}
                        placeholder='Country' value={this.props.country} />
                    <TextInput style={styles.signUpInputs} onChangeText={this.addUsernameInput}
                        placeholder='Username' value={this.props.username} />
                    <TextInput style={styles.signUpInputs} onChangeText={this.addEmailInput}
                        placeholder='Email' value={this.props.email} />
                    <TextInput style={styles.signUpInputs} onChangeText={this.addPasswordInput}
                        placeholder='Password' value={this.props.password} />
                </View>
                <View>
                    <Button title='Submit' onPress={this.submitHandler} />
                    <Button onPress={() => Actions.login()} title='Existing User?' />
                    <Button onPress={() => Actions.home()} color='red' title='Next' />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: 40,
        alignItems: 'center',
    },
    inputContainer: {
        paddingLeft: 20,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    signUpInputs: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 3

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