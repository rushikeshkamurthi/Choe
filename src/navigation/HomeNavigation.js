import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import ChatScreen from '../screens/chat/ChatScreen';
import SelectContact from '../screens/selectContact/SelectContact';
import SelectMultipleContact from '../screens/selectMultipleContact/SelectMultipleContact';
import YourCart from '../screens/newChat/YourCart';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="YourCart" options={{title:"Your Cart"}} component={YourCart}></Stack.Screen>
            <Stack.Screen  name="Chat" component={ChatScreen} options={({route})=>({title:route.params?.item?.name ?route.params?.item?.name : 'Chat' })}></Stack.Screen>
            <Stack.Screen name="SelectContact" component={SelectContact}></Stack.Screen>
            <Stack.Screen name="SelectMultipleContact" component={SelectMultipleContact}></Stack.Screen>

        </Stack.Navigator>
      )
    }

export default HomeNavigation;