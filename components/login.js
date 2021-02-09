import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput
} from 'react-native';
import { color } from 'react-native-reanimated';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    validate_field = () => {
        const  { username, password } = this.state
        if (username == "") {
            alert("Username must not be empty")
            return false
        }
        else if (password == "") {
            alert("Password must not be empty")
            return false
        }
        return true
    }

    making_api_call = () => {
        if (this.validate_field()) {
            alert("successfully login")
        }
    }
    render() {
        return (
            <View style={{
                width: "100%", height: "100%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center"
            }}>
                <Image source={require('../assets/Logo.jpeg')}
                    style={{ width: '30%', height: '30%', resizeMode: 'contain', marginTop: '5%' }} />

                <TextInput placeholder={"username"}
                    onChangeText={(value) => this.setState({ username: value })}
                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
                />
                <TextInput placeholder={"Password"}
                    onChangeText={(value) => this.setState({ password: value })}

                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginTop: "10%" }}
                />
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, height: 42, width: "80%",
                        justifyContent: "center", alignItems: "center", borderRadius: 40,
                        backgroundColor: "black", alignSelf: "center"
                    }}
                        onPress={() => this.making_api_call()}
                    >
                        <Text style={{ color: "white" }}>
                            Log in
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'green' }}>
                            don't have any account? Register
                    </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }

}