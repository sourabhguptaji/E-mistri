import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert
} from 'react-native';
import Login from '../components/login'

export default class Splash extends Component
{
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 4000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={require('../assets/Logo.jpeg')}
                        style={{ width: '45%', height: '45%', resizeMode: 'contain' }} />
                </View>
            </View>)
        return (
            <View style={styles.MainContainer}>
                <Text style={{ textAlign: 'center' }}>  </Text>
                {
                    (this.state.isVisible === true) ? Splash_Screen : <Login navigation={this.props.navigation} />
                }
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: ( Platform.OS === 'ios') ? 20 : 0
        },

        SplashScreen_RootView:
        {
            justifyContent: 'center',
            flex: 1,
            margin: 10,
            position: 'absolute',
            width: '100%',
            height: '100%',
        },

        SplashScreen_ChildView:
        {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex: 1,
        },
    }); 
