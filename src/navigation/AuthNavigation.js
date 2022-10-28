import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

  return (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthNavigation; 