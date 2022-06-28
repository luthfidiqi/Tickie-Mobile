import React, { useEffect, useState } from 'react';
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

import axios from '../../utils/axios';

import Footer from '../../components/Footer';

function History(props) {
  const handleBtn = () => {
    // props.navigation.navigate();
  };

  // const handleTicket = async () => {
  //   props.navigation.navigate('Ticket', {
  //     booking,
  //   });
  // };

  const handleSwitch = async () => {
    props.navigation.navigate('Profile');
  };

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

  const [booking, setBooking] = useState([]);
  console.log(booking);

  const getBooking = async () => {
    try {
      const result = await axios.get(`booking/user/${dataUser.id}`);
      setBooking(result.data.data);
    } catch (err) {
      setBooking([]);
    }
  };

  // const getBooking = async () => {
  //   await AsyncStorage.getItem('id')
  //     .then(async value => {
  //       try {
  //         const result = await axios.get(`booking/user/${value}`);
  //         setBooking(result.data.data[0]);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  useEffect(() => {
    getBooking();
  }, []);

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
          onPress={handleSwitch}>
          <Text style={styles.topNav}>Details Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: '100%', flex: 1, alignItems: 'center' }}
          onPress={handleBtn}>
          <Text style={styles.topNavActive}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 24, marginVertical: 40 }}>
        {booking.length > 0 ? (
          booking.map(item => (
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 30,
                borderRadius: 16,
                marginBottom: 30,
              }}>
              <Image
                style={{ marginBottom: 20 }}
                source={require('../../assets/ebu.png')}
              />
              <Text
                style={{
                  color: '#aaaaaa',
                  fontSize: 13,
                  fontWeight: '500',
                  marginBottom: 10,
                }}>
                {/* Tuesday, 07 July 2020 - 04:30pm */}
                {item.dateBooking.split('T')[0] + ' - ' + item.timeBooking}
              </Text>
              <Text
                style={{
                  color: '#14142B',
                  fontSize: 16,
                  fontWeight: '500',
                  marginBottom: 30,
                }}>
                {/* Spider-Man: Homecoming */}
                {item.name}
              </Text>
              <TouchableOpacity
                style={{ width: '100%' }}
                disabled={item.statusUsed === 'nonActive' ? true : false}
                onPress={() =>
                  props.navigation.navigate('Ticket', { data: item })
                }
                // onPress={handleTicket}
                // onPress={() =>
                //   handleTicket({
                //     name: item.name,
                //     category: item.category,
                //     date: item.dateBooking,
                //     time: item.timeBooking,
                //     seat: item.seat,
                //     total: item.totalPayment,
                //     id: item.bookingId,
                //   })
                // }
              >
                <Text
                  style={
                    item.statusUsed !== 'nonActive'
                      ? styles.btnActive
                      : styles.btnUsed
                  }>
                  {item.statusUsed !== 'nonActive'
                    ? 'Ticket in Active'
                    : 'Ticket is Already Used'}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View>
            <Text>Order ticket not available</Text>
          </View>
        )}

        {/* <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 30,
          }}>
          <Image
            style={{ marginBottom: 20 }}
            source={require('../../assets/ebu.png')}
          />
          <Text
            style={{
              color: '#aaaaaa',
              fontSize: 13,
              fontWeight: '500',
              marginBottom: 10,
            }}>
            Monday, 14 June 2020 - 02:00pm
          </Text>
          <Text
            style={{
              color: '#14142B',
              fontSize: 16,
              fontWeight: '500',
              marginBottom: 40,
            }}>
            Avengers: End Game
          </Text>
          <TouchableOpacity style={{ width: '100%' }} onPress={handleBtn}>
            <Text style={styles.btnUsed}>Ticket used</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <Footer />
    </ScrollView>
  );
}

export default History;
