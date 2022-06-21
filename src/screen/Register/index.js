import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';

import {useDispatch} from 'react-redux';
import { register } from '../../stores/actions/auth';

function RegisterScreen(props) {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: '',
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      console.log(form);

      await dispatch(register(form));
      props.navigation.navigate('Login');

      alert('Registrasi Berhasil');
    } catch (error) {
      console.log(error);
      props.navigation.navigate('Login');
      alert('Registrasi Berhasil');
    }
  };

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
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
        onChangeText={text => handleChangeForm(text, 'firstName')}
        />
        
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Last Name</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your last name"
        onChangeText={text => handleChangeForm(text, 'lastName')}
        />

        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Phone Number</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your phone number"
        onChangeText={text => handleChangeForm(text, 'noTelp')}
        />

        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your email"
        onChangeText={text => handleChangeForm(text, 'email')}
        />

        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Password</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your password"
        onChangeText={text => handleChangeForm(text, 'password')}
        />
        
        <View style={{marginTop:20,}}>
          <Button title="Sign Up" color="#5F2EEA" onPress={handleSubmit} />
        </View>

        <TouchableOpacity onPress={handleLogin}>
          <Text style={{textAlign: 'center', marginTop: 15,}}>Already have account ? Sign In</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

export default RegisterScreen;
