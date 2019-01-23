import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem'
import homeImage from '../assets/homeImage2.jpg'
import Header from './Header'
// import Landing from './Landing'
// import Login from './Login'
// import Signup from './Signup'
import { addUsername, addPassword, submitUser, inputHandler, selectUser, deselectUser } from './store/actions/index'




class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     username: '',
    //     //     password: '',
    //         // users: [],
    //         // email: '',
    //         // country: '',
    //         // selectedLogin: false,
    //         // selectedSignup: false,
    //     // }
    // }
    // inputHandler = (name) => (value) => {
    //     this.props.inputHandler(name, value)
    // }
    // submitHandler = () => {
    //     this.props.submitUser(this.props.username, this.props.password)
    //     // if (this.state.selectedLogin === true) {
    //     //     if (this.state.username === '' || this.state.password === '') {
    //     //         return
    //     //     }
    //     //     this.setState({
    //     //         users: [...this.state.users, { username: this.state.username, password: this.state.password },],
    //     //     })
    //     // }
    //     // else if (this.state.selectedSignup === true) {
    //     //     if (this.state.username === '' || this.state.password === '' || this.state.email === '' || this.state.country === '')
    //     //         return
    //     // }
    //     // this.setState({
    //     //     users: [...this.state.users, { username: this.state.username, password: this.state.password },],
    //     // })
    // }
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
    // loginOptionHandler = (name) => () => {
    //     this.setState({
    //         [name]: true
    //     })
    // }
    // loginButtonClick = (event) => {
    //     this.setState({
    //         selectedLogin: true,
    //         selectedSignup: false,
    //     })
    // }
    // signupButtonClick = (event) => {
    //     this.setState({
    //         selectedSignup: true,
    //         selectedLogin: false
    //     })
    // }
    // modalCloseHandler = (name) => () => {
    //     this.setState({
    //         [name]: false,
    //     })
    // }

    render() {
        console.log(this.props.users)
        // const users = this.props.users.map((user, i) => {
        //     console.log(user.username, 'USER!!!!', user)
        //     //     < View >
        //     //     <TouchableOpacity key={i} onPress={() => { alert('pressed ID: ' + i) }}>
        //     //         <View style={styles.userList}>
        //     //             <Text>{user.username}</Text>
        //     //             <Text>{user.password}</Text>
        //     //         </View>
        //     //     </TouchableOpacity >
        //     // </View >
        // })
        const users = this.props.users.map((user, i) => (
            <ListItem key={i} i={i} users={user} />
        ))
        console.log(users, 'USERS WHY U NO WORK')

        return (
            <View>
                <Header />
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.container}>
                        {/* <Landing loginOptionHandler={this.loginOptionHandler} signupButtonClick={this.signupButtonClick} loginButtonClick={this.loginButtonClick} {...this.state} />
                        <Login modalCloseHandler={this.modalCloseHandler} signupButtonClick={this.signupButtonClick} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
                        <Signup modalCloseHandler={this.modalCloseHandler} loginButtonClick={this.loginButtonClick} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
                        <Text>{this.state.username}</Text> */}
                        {/* <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.inputHandler('username')}
                                style={styles.inputField} value={this.state.username} placeholder='username' />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.inputHandler('password')}
                                style={styles.inputField} value={this.state.password} placeholder='password' />
                        </View> */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.addUsernameInput}
                                // onChangeText={this.addUsernameInput('username')}
                                style={styles.inputField} value={this.props.username} placeholder='username' />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.addPasswordInput}
                                // onChangeText={this.addPasswordInput('password')}
                                style={styles.inputField} value={this.props.password} placeholder='password' />
                        </View>
                        <Button onPress={this.submitHandler} style={styles.placeButton} title='Add' />
                        <ScrollView style={styles.scroller}>
                            <View style={styles.userList}>{users}</View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputField: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
    },
    placeButton: {
        width: '30%'
    },
    userList: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column-reverse'
    },
    scroller: {
        width: '85%',
    },
    baseImage: {
        height: '95%',
    },

});

const mapStateToProps = state => {
    return {
        username: state.users.username,
        password: state.users.password,
        selectedUser: state.users.selectedUser,
        users: state.users.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUsername: (username) => dispatch(addUsername(username)),
        onAddPassword: (password) => dispatch(addPassword(password)),
        onAddUser: (username, password) => dispatch(submitUser(username, password)),
        onSelectUser: (key) => dispatch(selectUser(key)),
        onInputHandler: (name, value) => dispatch(inputHandler(name, value)),
        onDeselectUser: () => dispatch(deselectUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
