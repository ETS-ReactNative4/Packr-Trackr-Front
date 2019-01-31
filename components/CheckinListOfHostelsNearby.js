import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import homeImage from '../assets/prism.png'
import logo from '../assets/PTlogo.png'
import { addHostels, selectHostel } from './store/actions/index';


class CheckinListOfHostelsNearby extends React.Component {

    addSelectHostel = (key) => {
        this.props.onSelectHostel(key)
        Actions.individualHostel()
    }

    render() {
        const hostels = this.props.hostelList.hostelList.map(hostel => {
            return (
                <TouchableOpacity onPress={() => this.addSelectHostel(hostel.id)} key={hostel.id} style={styles.individualHostelContainer} >
                    <Image style={styles.hostelImage} source={{ uri: hostel.image }} />
                    <View style={styles.hostelInfoContainer}>
                        <Text style={styles.hostelName}>{hostel.name}</Text>
                        <Text style={styles.hostelDistance}>Distance:</Text>
                    </View>
                </TouchableOpacity>
            )
        })
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.lighterBG}>
                        <View style={styles.movingLogo}>
                            <Image source={logo} style={styles.logoImage} />
                        </View>
                        <View style={{ marginTop: -14 }}>
                            <ScrollView>
                                <View style={styles.hostelContainer}>
                                    {hostels}
                                </View>
                                <View style={{ height: 215 }}></View>
                            </ScrollView>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    hostelName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    hostelContainer: {
        justifyContent: 'center',
        width: 280,
        flexDirection: 'column',
        backgroundColor: 'rgba(128, 128, 128, 0.96)',
        borderRadius: 5,
        borderColor: 'rgba(235, 128, 46, 0.767)',
        borderWidth: 0.6,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
    },
    individualHostelContainer: {
        backgroundColor: 'rgb(236, 234, 234)',
        height: 60,
        width: '95%',
        borderRadius: 6,
        margin: 5,
        flexDirection: 'row',
    },
    hostelInfoContainer: {
        flexDirection: 'column',
        marginLeft: 18,
        justifyContent: 'space-between'
    },
    baseImage: {
        height: '100%',
        alignItems: 'center'
    },
    hostelImage: {
        marginTop: 5,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    hostelDistance: {
        marginBottom: 8
    },
    movingLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 220,
        marginTop: 13
    },
    logoImage: {
        height: 88,
        width: 76,
    },
    lighterBG: {
        backgroundColor: 'rgba(250, 250, 250, 0.04)',
        width: '100%',
        alignItems: 'center',
    },

})
const mapStateToProps = state => {
    return {
        hostelList: state.users.hostelList,
        selectedHostel: state.users.selectedHostel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddHostels: (hostels) => dispatch(addHostels(hostels)),
        onSelectHostel: (key) => dispatch(selectHostel(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinListOfHostelsNearby)


// export default CheckinListOfHostelsNerby