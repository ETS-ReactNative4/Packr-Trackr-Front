import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'


export default class SideMenu extends React.Component {


    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={styles.container}>
                <Text>menu items go here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },

});