import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';

function RegisterScreen(props) {
  const handleRegister = () => {
    props.navigation.navigate('Login');
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.login}>
      <Image style={{marginBottom: 30}} source={require('../../assets/logo-tickitz-color.png')} />
      <Text style={{color:'#121212', fontSize: 24, fontWeight: 'bold', marginBottom:12,}}>Sign Up</Text>
      <Text style={{color:'#8692A6', fontSize: 13, marginBottom:30,}}>Fill your additional details</Text>
      <View style={{paddingBottom: 100,}}>
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>First Name</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your first name"
        />
        
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Last Name</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your last name"
        />

        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Phone Number</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your phone number"
        />

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
          <Button title="Sign Up" color="#5F2EEA" onPress={handleRegister} />
        </View>

        <TouchableOpacity onPress={handleLogin}>
          <Text style={{textAlign: 'center', marginTop: 15,}}>Already have account ? Sign In</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

export default RegisterScreen;
