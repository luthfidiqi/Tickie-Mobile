import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import styles from './styles';
import Notification from '../../utils/notif';

import axios from '../../utils/axios';

function LoginScreen(props) {
  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleForgot = () => {
    props.navigation.navigate('Forgot');
  };

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
      // alert('Berhasil Login');

      const setNotification = {
        title: 'Success Login',
        message: 'Lets booking ticket now!!!',
      };
      console.log(setNotification);
      Notification.reminderLoginNotification(setNotification);

      // Notification.reminderLoginNotification();
      resetForm();
    } catch (error) {
      alert('Email atau password tidak sesuai');
      console.log(error);
      resetForm();
    }
  };
  const handleChangeForm = (text, name) => {
    setForm({ ...form, [name]: text });
  };

  const disabledBtn = form.email || form.password ? false : true;

  const resetForm = () => {
    setForm({
      name: '',
      password: '',
    });
  };

  return (
    <ScrollView style={styles.login}>
      <Image
        style={{ marginBottom: 20 }}
        source={require('../../assets/logo-tickitz-color.png')}
      />
      <Text
        style={{
          color: '#121212',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
        }}>
        Sign In
      </Text>
      <Text style={{ color: '#8692A6', fontSize: 13, marginBottom: 30 }}>
        Sign in with your data that you entered during your registration
      </Text>
      <View>
        <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
          Email
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Write your email"
          value={form.email}
          onChangeText={text => handleChangeForm(text, 'email')}
        />

        <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
          Password
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Write your password"
          value={form.password}
          onChangeText={text => handleChangeForm(text, 'password')}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={disabledBtn ? styles.btnDisable : styles.btnPrim}
            onReset={resetForm}
            onPress={handleLogin}
            disabled={disabledBtn}>
            <Text style={styles.btnPrimText}>Sign In</Text>
          </TouchableOpacity>
          {/* <Button title="Login" color="#5F2EEA" onPress={handleLogin} /> */}
        </View>

        <TouchableOpacity onPress={handleForgot}>
          <Text style={{ textAlign: 'center', marginTop: 15 }}>
            Forgot your password? Reset now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={{ textAlign: 'center', marginTop: 15 }}>
            Don’t have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
