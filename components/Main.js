import React from 'react';
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import { Scene, Router, Stack } from 'react-native-router-flux';


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
                        key="home" component={Home} title="Sign Up" />
                </Stack>
            </Router>
        );
    }
}

export default Main
