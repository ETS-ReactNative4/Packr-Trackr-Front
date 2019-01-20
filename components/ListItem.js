import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => { alert('pressed ID: ' + props.i) }}>
            <View style={styles.userList}>
                <Text>{props.users.username}</Text>
                <Text>{props.users.password}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userList: {
        padding: 10,
        margin: 5,
        marginRight: 10,
        backgroundColor: '#eee',
        justifyContent: 'flex-start'
    }
})

export default ListItem