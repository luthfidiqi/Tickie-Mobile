import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';

function LoginScreen(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleForgot = () => {
    props.navigation.navigate('Forgot');
  };

  return (
    <ScrollView style={styles.login}>
      <Image style={{marginBottom: 30}} source={require('../../assets/logo-tickitz-color.png')} />
      <Text style={{color:'#121212', fontSize: 24, fontWeight: 'bold', marginBottom:12,}}>Sign In</Text>
      <Text style={{color:'#8692A6', fontSize: 13, marginBottom:30,}}>Sign in with your data that you entered during 
      your registration</Text>
      <View>
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your email"
        />
        
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Password</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your password"
        />
        
        <View style={{marginTop:20,}}>
          <Button title="Login" color="#5F2EEA" onPress={handleLogin} />
        </View>

        <TouchableOpacity onPress={handleForgot}>
          <Text style={{textAlign: 'center', marginTop: 15,}}>Forgot your password? Reset now</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={{textAlign: 'center', marginTop: 15,}}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
