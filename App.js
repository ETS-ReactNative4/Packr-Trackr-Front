import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import ListItem from './components/ListItem'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            users: []
        }
    }
    userNameChangeHandler = (value) => {
        this.setState({ username: value });
    }
    passwordChangeHandler = (value) => {
        this.setState({ password: value });
    }
    submitHandler = (event) => {
        if (this.state.username === '' || this.state.password === '') {
            return
        }
        this.setState({
            users: [...this.state.users, { username: this.state.username, password: this.state.password },]
        })
    }
    render() {
        const users = this.state.users.map((user, i) => (
            <ListItem key={i} i={i} users={user} />
        ))
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Still? WORKING?</Text>
                <Text>Still? WORKING?</Text>
                <Text>{this.state.username}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={this.userNameChangeHandler}
                        style={styles.placeInput} placeholder='username' />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={this.passwordChangeHandler}
                        style={styles.placeInput} placeholder='password' />
                </View>
                <Button onPress={this.submitHandler} style={styles.placeButton} title='Add' />
                <ScrollView style={styles.scroller}>
                    <View style={styles.userList}>{users}</View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeInput: {
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
        width: '80%',
    }

});
