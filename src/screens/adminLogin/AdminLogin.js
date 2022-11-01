import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../App';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

const LoginContainer = styled.View`
  justify-content: center;  
`;

const InputContainer = styled.View`
  margin-top: 6px;
  padding: 8px;
  
`;
const ButtonContainer = styled.View`
margin: 14px;
margin-top:20px;

`;
const LoginText = styled.Text`
padding-top: 150px;
  font-size: 34px;
  text-align: center;
    font-weight: bold;
    color:blue;
`;
const Subtext = styled.Text`
  font-size: 10px;
  text-align: center;
    font-weight: bold;
    color:#4136a8; 
`;
const ClickableText = styled.Text`
  text-align: center;
    font-weight: bold;
    margin:10px; 
    color: blue;
`;
const ErrorContainer = styled.View`
background-color: red;
height:20px;
border-radius:5px;
margin:10px;  
justify-content: space-between;  
flex-direction:row;
padding-horizontal:8px;
`;

const AdminLogin = () => {

  const {isLoggedIn,setisLoggedIn,AdminLogin, setAdminLogin,  isAdminLoggedIn, setisAdminLoggedIn}= useContext(GlobalContext);
  const [LoginError, setLoginError] = useState(false);
  const CheckPassword = ()=>{
    if(userName==='Admin' && password==='Admin@123'){
      setisAdminLoggedIn(true);
    }else{
      console.log('====================================');
      console.log('Invalid credentials');
      console.log('====================================');
      setLoginError(true);
    }
  }
  const CloseErrorBox = () =>{
    setLoginError(false);
  }
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const SwitchToUserLogin =()=> {
    setAdminLogin(false);
  }
  return (
    <LoginContainer>
        <LoginText>Admin Login</LoginText>
        <Subtext>Make sure you have a right credentials !!</Subtext>
        {LoginError && <ErrorContainer><Text>Invalid Credentials</Text><Text onPress={CloseErrorBox}>X</Text></ErrorContainer>}
        <InputContainer>
        <TextInput placeholder='Enter Admin Name'  label="Admin Name" mode="outlined" onChangeText={(value)=>setuserName(value)}></TextInput>
        </InputContainer>
        <InputContainer>
        <TextInput placeholder='Enter your Password'  label="Password" mode="outlined" secureTextEntry onChangeText={(value)=>setpassword(value)}></TextInput>
        </InputContainer>
        <ButtonContainer>
        <Button  mode="contained" onPress={CheckPassword}>Login</Button>
        <ClickableText onPress={SwitchToUserLogin}>Switch to User Login ?</ClickableText>
        </ButtonContainer>
    </LoginContainer>
    
  )
}

export default AdminLogin