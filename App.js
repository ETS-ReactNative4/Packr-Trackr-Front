import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import ListItem from './components/ListItem'
import homeImage from './assets/homeImage2.jpg'
import Header from './components/Header'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            users: [],
            email: '',
            country: '',
            selectedLogin: false,
            selectedSignup: false,
        }
    }
    inputHandler = (name) => (value) => {
        this.setState({
            [name]: value
        })
    }
    submitHandler = () => {
        if (this.state.selectedLogin === true) {
            if (this.state.username === '' || this.state.password === '') {
                return
            }
            this.setState({
                users: [...this.state.users, { username: this.state.username, password: this.state.password },],
            })
        }
        else if (this.state.selectedSignup === true) {
            if (this.state.username === '' || this.state.password === '' || this.state.email === '' || this.state.country === '')
                return
        }
        this.setState({
            users: [...this.state.users, { username: this.state.username, password: this.state.password },],
        })
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
        // const users = this.state.users.map((user, i) => (
        //     <ListItem key={i} i={i} users={user} />
        // ))
        return (
            <Router>
                <Stack key="root">
                    <Scene key="landing" component={Landing} loginOptionHandler={this.loginOptionHandler} signupButtonClick={this.signupButtonClick} loginButtonClick={this.loginButtonClick} {...this.state} title='Packr Trackr' initial />
                    <Scene renderBackButton={() => (null)}
                        key="login" component={Login} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} title="Login" />
                    <Scene renderBackButton={() => (null)}
                        key="signup" component={Signup} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} title="Sign Up" />
                </Stack>
            </Router>
            // <View>
            //     <Header />
            //     <ImageBackground source={homeImage} style={styles.baseImage}>
            //         <View style={styles.container}>
            //             <Landing loginOptionHandler={this.loginOptionHandler} signupButtonClick={this.signupButtonClick} loginButtonClick={this.loginButtonClick} {...this.state} />
            //             <Login modalCloseHandler={this.modalCloseHandler} signupButtonClick={this.signupButtonClick} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
            //             <Signup modalCloseHandler={this.modalCloseHandler} loginButtonClick={this.loginButtonClick} inputHandler={this.inputHandler} submitHandler={this.submitHandler} {...this.state} />
            //             <Text>{this.state.username}</Text>
            //             <View style={styles.inputContainer}>
            //                 <TextInput
            //                     onChangeText={this.inputHandler('username')}
            //                     style={styles.inputField} value={this.state.username} placeholder='username' />
            //             </View>
            //             <View style={styles.inputContainer}>
            //                 <TextInput
            //                     onChangeText={this.inputHandler('password')}
            //                     style={styles.inputField} value={this.state.password} placeholder='password' />
            //             </View>
            //             <Button onPress={this.submitHandler} style={styles.placeButton} title='Add' />
            //             <ScrollView style={styles.scroller}>
            //                 <View style={styles.userList}>{users}</View>
            //             </ScrollView>
            //         </View>
            //     </ImageBackground>
            // </View >
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
    }

});
