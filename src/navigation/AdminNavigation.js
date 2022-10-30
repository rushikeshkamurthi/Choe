import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import AdminLogin from '../screens/adminLogin/AdminLogin';


const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
  return (
         <Stack.Navigator initialRouteName='Admin Login'>
        <Stack.Screen name="Admin Login" component={AdminLogin}></Stack.Screen>
        </Stack.Navigator>
  )
}

export default AdminNavigation