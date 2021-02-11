 import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }
    validate_field = () => {
        const { username, password } = this.state
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
                width: "100%", height: "70%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center",
            }}>
                <View style={{ width: "50%", height: '30%', justifyContent: "center", alignItems: "center", marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight:"bold" }}>Register here</Text>

                </View>
                
                <TextInput placeholder={"email"}
                    onChangeText={(value) => this.setState({ email: value })}
                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 30, }}
                />
                <TextInput placeholder={"username"}
                    onChangeText={(value) => this.setState({ username: value })}
                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 30, }}
                />
                <TextInput placeholder={"Password"}
                    onChangeText={(value) => this.setState({ password: value })}

                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
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
                            Register
                    </Text>
                    </TouchableOpacity>
                   
                </View>

            </View>
            
        );
    }

}