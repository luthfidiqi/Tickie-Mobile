import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Button,
  TextInput,
} from 'react-native';
import styles from './styles';

import Footer from '../../components/Footer';

import axios from '../../utils/axios';
// import { connect } from 'react-redux';
// import { getUser } from '../../redux/action/auth';

function Profile(props) {
  const [dataUser, setDataUser] = useState([]);

  const getDataUser = async () => {
    await AsyncStorage.getItem('id')
      .then(async value => {
        try {
          const result = await axios.get(`user/${value}`);
          setDataUser(result.data.data[0]);
        } catch (error) {
          console.log(error);
        }
      })
      .then(res => {
        console.log(res);
      });
  };

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
  });

  const handleChangeForm = (text, name) => {
    setForm({ ...form, [name]: text });
  };

  const updateDataUser = async () => {
    await AsyncStorage.getItem('id')
      .then(async value => {
        try {
          const result = await axios.patch(`user/profile/${value}`, form);
          alert(`${form.firstName}\n${form.lastName}\n${form.noTelp}`);
        } catch (error) {
          console.log(error);
        }
      })
      .then(res => {
        console.log(res);
      });
    await getDataUser;
    setDataUser(result.data.data);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const [formPassword, setFormPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangePassword = (text, name) => {
    setFormPassword({ ...formPassword, [name]: text });
  };

  const updatePassword = async () => {
    await AsyncStorage.getItem('id')
      .then(async value => {
        try {
          const result = await axios.patch(
            `user/password/${value}`,
            formPassword,
          );
          // alert(`${form.firstName}\n${form.lastName}\n${form.noTelp}`);
        } catch (error) {
          console.log(error);
        }
      })
      .then(res => {
        console.log(res);
      });
  };

  const handleBtn = () => {
    // props.navigation.navigate();
  };

  const handleLogout = async () => {
    alert('Logout');
    props.navigation.navigate('Login');
  };

  const handleSwitch = async () => {
    props.navigation.navigate('History');
  };
  return (
    <ScrollView style={{ backgroundColor: '#F5F6F8', height: '100%' }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 24,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{ width: '100%', flex: 1, alignItems: 'center' }}
          onPress={handleBtn}>
          <Text style={styles.topNavActive}>Details Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: '100%', flex: 1, alignItems: 'center' }}
          onPress={handleSwitch}>
          <Text style={styles.topNav}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 24, marginVertical: 40 }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 50,
          }}>
          <Text
            style={{
              color: '#4E4B66',
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 30,
            }}>
            INFO
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../../assets/profile-img.png')} />
            <Text
              style={{
                color: '#14142B',
                fontSize: 20,
                fontWeight: '700',
                marginBottom: 10,
              }}>
              {dataUser.firstName + ' ' + dataUser.lastName}
            </Text>
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 14,
                fontWeight: '400',
                marginBottom: 30,
              }}>
              {dataUser.email}
            </Text>
            <TouchableOpacity style={{ width: '70%' }} onPress={handleLogout}>
              <Text style={styles.btnBook}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            color: '#14142B',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 15,
          }}>
          Account Settings
        </Text>

        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: '#14142B',
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 30,
            }}>
            Details Information
          </Text>
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            First Name
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your Full Name"
            onChangeText={text => handleChangeForm(text, 'firstName')}
          />
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            last Name
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your email"
            onChangeText={text => handleChangeForm(text, 'lastName')}
          />
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            Phone Number
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Input your Phone  Number"
            onChangeText={text => handleChangeForm(text, 'noTelp')}
          />
        </View>

        <TouchableOpacity style={{ width: '100%' }} onPress={updateDataUser}>
          <Text style={styles.btnBook}>Update changes</Text>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 30,
            marginTop: 50,
          }}>
          <Text
            style={{
              color: '#14142B',
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 30,
            }}>
            Account and Privacy
          </Text>
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            New Password
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your new password"
            onChangeText={text => handleChangePassword(text, 'newPassword')}
          />

          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            Confirm Password
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your confirm password"
            onChangeText={text => handleChangePassword(text, 'confirmPassword')}
          />
        </View>

        <TouchableOpacity
          style={{ width: '100%', marginBottom: 30 }}
          onPress={updatePassword}>
          <Text style={styles.btnBook}>Update changes</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
}

export default Profile;
