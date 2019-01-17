import React from 'react';
import { StyleSheet, Text, View, TextInput, placeholderTextColor } from 'react-native';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }
    userNameChangeHandler = (value) => {
        this.setState({ username: value });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Still? WORKING?</Text>
                <Text>{this.state.username}</Text>
                <TextInput
                    onChangeText={this.userNameChangeHandler}
                    style={{ width: '70%', borderColor: 'black', borderWidth: 1 }} placeholder='username' />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 0.1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
