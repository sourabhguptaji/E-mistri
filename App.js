import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/splash';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login'
import Register from './components/register'
const Stack = createStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={Register}
                options={{
                    title: 'Register', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
};



export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
              {/* SplashScreen which will come once for 5 Seconds */}
              <Stack.Screen
                  name="SplashScreen"
                  component={Splash}
                  // Hiding header for Splash Screen
                  options={{ headerShown: false }}
              />
              {/* Auth Navigator: Include Login and Signup */}
              <Stack.Screen
                  name="Auth"
                  component={Auth}
                  options={{ headerShown: false }}
              />
              {/* Navigation Drawer as a landing page */}
             
          </Stack.Navigator>
      </NavigationContainer>
  );
}


