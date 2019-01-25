import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// TO BE REMOVED.... I THINK ============================================================
//==============================================================
//============================================================
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Packr Trackr</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,

    },
})

export default Header