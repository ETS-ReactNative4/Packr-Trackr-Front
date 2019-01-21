import React from 'react'
import { Modal, View, Text, Button } from 'react-native'

//want to make country a dropdown menu with pre-existing country charts

const Signup = (props) => {
    <Modal>
        <View>
            <TextInput placeholder='country' value={props.country} />
            <TextInput placeholder='username' value={props.username} />
            <TextInput placeholder='email' value={props.email} />
            <TextInput placeholder='password' value={props.password} />
            <View>
                <Buton title='Submit' />
                <Buton title='Existing User?' />
            </View>
        </View>

    </Modal>
}

export default Signup