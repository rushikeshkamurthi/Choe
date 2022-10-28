import {} from 'react-native'
import React, { useContext } from 'react'
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import { GlobalContext } from '../../App';
import { NavigationContainer } from '@react-navigation/native';

const UserNavigation = ({onPress}) => {
    const {isLoggedIn,setisLoggedIn}= useContext(GlobalContext);
   console.log('Onpress',onPress);
    return (
      <NavigationContainer>
          { 
          isLoggedIn ? <HomeNavigation/> : <AuthNavigation/>
          }
      </NavigationContainer>
    )
  }
  
export default UserNavigation ;