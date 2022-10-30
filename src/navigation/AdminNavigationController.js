import {} from 'react-native'
import React, { useContext } from 'react'
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import { GlobalContext } from '../../App';
import { NavigationContainer } from '@react-navigation/native';
import AdminNavigation from './AdminNavigation';
import AdminHome from '../screens/adminHome/AdminHome';

const AdminNavigationControl = ({onPress}) => {
    const {isAdminLoggedIn, setisAdminLoggedIn}= useContext(GlobalContext);
   
    return (
      <NavigationContainer>
          { 
            isAdminLoggedIn ? <AdminHome /> : <AdminNavigation/>
          }
      </NavigationContainer>
    )
  }
  
export default AdminNavigationControl ;