import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import homeImage from '../assets/prism.png'


class CheckinIndividualHostel extends React.Component {

    render() {
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.hostelContainer}>
                        <TouchableOpacity key={this.props.selectedHostel.id} >
                            <Image style={styles.hostelImage} source={{ uri: this.props.selectedHostel.image }} />
                            <Text style={styles.hostelName}>Hostel Name:</Text>
                            <Text style={styles.hostelName}>{this.props.selectedHostel.name}</Text>
                        </TouchableOpacity>
                        <View style={styles.movingCheckinButton}>
                            <TouchableOpacity onPress={() => Actions.checkedin()} style={styles.checkinButton}>
                                <Text style={styles.checkinButtonText}>Check-In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    hostelContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        width: 250,
        marginTop: 30
    },
    hostelName: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    baseImage: {
        height: '100%',
        alignItems: 'center'
    },
    hostelImage: {
        height: 260,
        width: 260,
        borderRadius: 130,
        marginTop: 5,
        marginBottom: 10,
    },
    hostelDistance: {
        marginBottom: 8
    },
    movingCheckinButton: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButton: {
        backgroundColor: '#EB7F2E',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        height: 70,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkinButtonText: {
        fontSize: 30,
    },

})
const mapStateToProps = state => {
    return {
        selectedHostel: state.users.selectedHostel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectHostel: (key) => dispatch(selectHostel(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndividualHostel)


// export default CheckinListOfHostelsNerby