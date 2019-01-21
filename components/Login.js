import React from 'react'
import { Modal, View, Text, Button } from 'react-native'

const Login = (props) => {
    <Modal>
        <View>
            <TextInput placeholder='username' value={props.username} />
            <TextInput placeholder='password' value={props.password} />
            <View>
                <Buton title='Eubmit' />
                <Buton title='Not A User?' />
            </View>
        </View>

    </Modal>
}

export default Login