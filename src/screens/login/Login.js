import { View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import styled from 'styled-components/native';
import { GlobalContext } from '../../../App';

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
const ClickableText = styled.Text`
  text-align: center;
    font-weight: bold;
    margin:10px; 
    color: blue;
`;
const LoginText = styled.Text`
padding-top: 150px;
  font-size: 40px;
  text-align: center;
    font-weight: bold;
    color:#b03087; 
`;

const Subtext = styled.Text`
  font-size: 10px;
  text-align: center;
    font-weight: bold;
    color:#4136a8; 
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
const Login = () => {
  const {isLoggedIn,setisLoggedIn,AdminLogin, setAdminLogin}= useContext(GlobalContext);
  const [LoginError, setLoginError] = useState(false);
  const CheckPassword = ()=>{
    if(userName==='Rushi' && password==='Rushi@123'){
      setisLoggedIn(true);
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
  const SwitchToAdminLogin =()=> {
    setAdminLogin(true);
  }
  return (
        <LoginContainer>
        <LoginText>Shoe</LoginText>
        <Subtext>Add wings to you foots</Subtext>
        {LoginError && <ErrorContainer><Text>Invalid Credentials</Text><Text onPress={CloseErrorBox}>X</Text></ErrorContainer>}
        <InputContainer>
        <TextInput placeholder='Enter User Name'  label="User Name" mode="outlined" onChangeText={(value)=>setuserName(value)}></TextInput>
        </InputContainer>
        <InputContainer>
        <TextInput placeholder='Enter your Password'  label="Password" mode="outlined" secureTextEntry onChangeText={(value)=>setpassword(value)}></TextInput>
        </InputContainer>
        <ButtonContainer>
        <Button  mode="contained" onPress={CheckPassword}>Login</Button>
        <ClickableText onPress={SwitchToAdminLogin}>Switch to admin Login ?</ClickableText>
        </ButtonContainer>
    </LoginContainer>
    
  )
}

export default Login