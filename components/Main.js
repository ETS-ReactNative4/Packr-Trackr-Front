import React from 'react';
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import EditProfile from './EditProfile'
import UserFriends from './UserFriends'
import { Scene, Router, Stack } from 'react-native-router-flux';
//https://packr-trackr-db.herokuapp.com/users
//DEPLOYED URL
//https://packr-trackr-db.herokuapp.com/ 


class Main extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="landing" component={Landing} title='Packr Trackr' initial />
                    <Scene renderBackButton={() => (null)}
                        key="login" component={Login} title="Login" />
                    <Scene renderBackButton={() => (null)}
                        key="signup" component={Signup} title="Sign Up" />
                    <Scene renderLeftButton={() => (null)}
                        key="home" component={Home} title="Packr Trackr" />
                    <Scene renderBackButton={() => (null)}
                        key="profile" component={Profile} title="My Profile" />
                    <Scene renderBackButton={() => (null)}
                        key="friends" component={UserFriends} title="Friends" />
                    <Scene renderBackButton={() => (null)}
                        key="editProfile" component={EditProfile} title="Edit Profile" />

                </Stack>
            </Router>
        );
    }
}

export default Main
