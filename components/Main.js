import React from 'react';
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import EditProfile from './EditProfile'
import UserFriends from './UserFriends'
import CheckedinHostelHome from './CheckedinHostelHome'
import CheckinIndividualHostel from './CheckinIndividualHostel'
import CheckinListOfHostelsNearby from './CheckinListOfHostelsNearby'
import HostelMessageBoard from './HostelMessageBoard'
import HostelMessagePost from './HostelMessagePost'
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';
import { addHostels } from './store/actions/index';
import { connect } from 'react-redux'
import HostelStayers from './HostelStayers';
import { Actions } from 'react-native-router-flux'


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
                    <Scene key="landing"
                        hideNavBar={true}
                        component={Landing} title='Welcome' initial />
                    <Scene renderBackButton={() => (null)}
                        navTransparent={1}
                        key="login" component={Login} title="" />
                    <Scene renderBackButton={() => (null)}
                        navTransparent={1}
                        key="signup" component={Signup} title="" />
                    <Scene renderLeftButton={() => (null)}
                        navTransparent={1}
                        key="home" component={Home} title="" />
                    <Scene renderBackButton={() => (null)}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5 }} navTransparent={1}
                        key="profile" component={Profile} title="Profile" />
                    <Scene renderLeftButton={() => (null)}
                        navTransparent={1}
                        key="checkedin" component={CheckedinHostelHome} title="" />
                    <Scene renderBackButton={() => (null)} onBack={() => Actions.checkedin()}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5 }} navTransparent={1}
                        key="messageBoard" component={HostelMessageBoard} title="Message Board" />
                    <Scene renderBackButton={() => (null)}
                        key="messagePost" component={HostelMessagePost} title="New Message" />
                    <Scene renderBackButton={() => (null)}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 15 }} navTransparent={1}
                        key="hostelStayers" component={HostelStayers} title="People Here" />
                    <Scene renderBackButton={() => (null)}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 15 }} navTransparent={1}
                        key="friends" component={UserFriends} title="Friends" />
                    <Scene renderBackButton={() => (null)}
                        key="editProfile" component={EditProfile} title="Edit Profile" />
                    <Scene renderBackButton={() => (null)}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5 }} navTransparent={1}
                        key="nearbyHostels" component={CheckinListOfHostelsNearby} title="Hostels Nearby" />
                    <Scene renderBackButton={() => (null)}
                        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 5 }} navTransparent={1}
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
