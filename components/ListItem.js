import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
    // const users = null
    // if (props.users) {
    //     users = props.users.map((user, i) => (
    //         <TouchableOpacity onPress={() => { alert('pressed ID: ' + i) }}>
    //             <View style={styles.userList}>
    //                 <Text>{user.username}</Text>
    //                 <Text>{user.password}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     ))
    // }
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