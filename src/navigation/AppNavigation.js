import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'
import HomeNavigation from './HomeNavigation'
import { GlobalContext } from '../../App'
import AdminNavigation from './AdminNavigation'
import UserNavigation from './UserNavigation'

const AppNavigation = () => {
  const {AdminLogin, setAdminLogin}= useContext(GlobalContext);
  return (
    <>
        { 
        AdminLogin ? <AdminNavigation/> : <UserNavigation onPress={setAdminLogin}/>
        }
    </>
  )
}

export default AppNavigation;