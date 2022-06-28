import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';
import axios from '../utils/axios';

// import Notification from '../utils/notif';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent(props) {
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

  useEffect(() => {
    getDataUser();
  }, []);

  const handleLogout = async () => {
    try {
      // const setNotification = {
      //   title: 'Log Out',
      //   message: 'Please login again!!!',
      // };
      // console.log(setNotification);
      // Notification.reminderLoginNotification(setNotification);
      // alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
        <Image
          source={dataUser.image ? {uri: `${process.env.REACT_APP_URL_CLOUDINARY}/${dataUser.image}`} : {uri: `${process.env.REACT_APP_URL_CLOUDINARY}/Tickitz/user/blank-avatar_ddsbif`}}
          style={{ width: 40, height: 40, borderRadius:40,}}
        />
          {/* <View style={styles.avatar} /> */}
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {dataUser.firstName + ' ' + dataUser.lastName}
            </Text>
            <Text style={styles.caption}>{dataUser.email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
