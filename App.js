/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
 
  useColorScheme,
  View,
} from 'react-native';
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';
import { AsyncStorage } from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import AppNavigation from './src/navigation/AppNavigation';
import Login from './src/screens/login/Login';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Container = styled.View`
flex:1;
background-color: white;  
justify-content: center;
`;
export const GlobalContext = createContext({});

const App = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [AdminLogin, setAdminLogin] = useState(false);
  const [isAdminLoggedIn, setisAdminLoggedIn] = useState(false);
  const [products, setproducts] = useState( [
    {id:1, title: "Product 1",  price:"$ 25.00 USD", image:"https://via.placeholder.com/400x200/FFB6C1/000000"},
    {id:2, title: "Product 2",  price:"$ 10.13 USD", image:"https://via.placeholder.com/400x200/FA8072/000000"} ,
    {id:3, title: "Product 3",  price:"$ 12.12 USD", image:"https://via.placeholder.com/400x200/87CEEB/000000"}, 
    {id:4, title: "Product 4",  price:"$ 11.00 USD", image:"https://via.placeholder.com/400x200/4682B4/000000"}, 
    {id:5, title: "Product 5",  price:"$ 20.00 USD", image:"https://via.placeholder.com/400x200/008080/000000"}, 
    {id:6, title: "Product 6",  price:"$ 33.00 USD", image:"https://via.placeholder.com/400x200/40E0D0/000000"}, 
    {id:7, title: "Product 7",  price:"$ 20.95 USD", image:"https://via.placeholder.com/400x200/EE82EE/000000"}, 
    {id:8, title: "Product 8",  price:"$ 13.60 USD", image:"https://via.placeholder.com/400x200/48D1CC/000000"},
    {id:9, title: "Product 9",  price:"$ 15.30 USD", image:"https://via.placeholder.com/400x200/191970/000000"},
    {id:9, title: "Product 10", price:"$ 21.30 USD", image:"https://via.placeholder.com/400x200/7B68EE/000000"},
  ])
  const [cart, setcart] = useState([]);

  return (
    <GlobalContext.Provider value={{isLoggedIn,setisLoggedIn,AdminLogin, setAdminLogin,products, setproducts,cart, setcart, isAdminLoggedIn, setisAdminLoggedIn}}>
    <Container>    
    <AppNavigation/>
    </Container>
    </GlobalContext.Provider>
   
  );
};


export default App;
