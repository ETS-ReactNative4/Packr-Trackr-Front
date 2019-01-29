import React from 'react';
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import EditProfile from './EditProfile'
import UserFriends from './UserFriends'
import SideMenu from './SideMenu'
import CheckinIndividualHostel from './CheckinIndividualHostel'
import CheckinListOfHostelsNearby from './CheckinListOfHostelsNearby'
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';
import { addHostels } from './store/actions/index';
import { connect } from 'react-redux'

//https://packr-trackr-db.herokuapp.com/users
//DEPLOYED URL
//https://packr-trackr-db.herokuapp.com/ 

// addUsernameInput = (username) => {
//     this.props.onAddUsername(username)
//     console.log(this.props.username)

// }
// addInitialHostels = (hostels)



class Main extends React.Component {
    componentDidMount() {
        this.loadHostels()
    }
    loadHostels = () => {
        fetch('https://packr-trackr-db.herokuapp.com/hostels')
            .then(result => result.json())
            .then((response) => {
                this.props.onAddHostels(response)
            })
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="landing" component={Landing} title='Welcome' initial />
                    <Scene renderBackButton={() => (null)}
                        key="login" component={Login} title="Login" />
                    <Scene renderBackButton={() => (null)}
                        key="signup" component={Signup} title="Sign Up" />
                    <Scene renderLeftButton={() => (null)}
                        key="home" component={Home} title="Packr Trackr" />
                    <Scene renderBackButton={() => (null)}
                        key="profile" component={Profile} title="My Profile" />
                    {/* <Drawer
                        hideNavBar
                        key="sidemenu"
                        contentComponent={SideMenu}
                        drawerWidth={250}
                        drawerPosition="right"
                    /> */}
                    <Scene renderBackButton={() => (null)}
                        key="friends" component={UserFriends} title="Friends" />
                    <Scene renderBackButton={() => (null)}
                        key="editProfile" component={EditProfile} title="Edit Profile" />
                    <Scene renderBackButton={() => (null)}
                        key="nearbyHostels" component={CheckinListOfHostelsNearby} title="Hostels Nearby" />
                    <Scene renderBackButton={() => (null)}
                        key="individualHostel" component={CheckinIndividualHostel} title="Confirm" />
                </Stack>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        hostelList: state.users.hostelList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddHostels: (hostels) => dispatch(addHostels(hostels))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

        // export default Main
