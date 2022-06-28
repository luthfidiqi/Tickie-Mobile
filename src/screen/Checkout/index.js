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

import axios from '../../utils/axios';

import Notification from '../../utils/notif';

import Footer from '../../components/Footer';

function Checkout(props) {
  const [dataBooking, setDataBooking] = useState(
    props.route.params.dataBooking,
  );
  // const [idUser, setIdUser] = useState('');

  const [selectedPayment, setSelectedPayment] = useState('');

  const [dataUser, setDataUser] = useState({
    fullName: 'Luthfi Thufail Asiddiqi',
    email: 'luthfi@gmail.com',
    phoneNumber: '08958000',
  });

  const changeFullName = text => {
    setDataUser({
      ...dataUser,
      fullName: text,
    });
  };
  const changePhoneNumber = text => {
    setDataUser({
      ...dataUser,
      phoneNumber: text,
    });
  };
  const changeEmail = text => {
    setDataUser({
      ...dataUser,
      email: text,
    });
  };

  // useEffect(async () => {
  //   setIdUser(await AsyncStorage.getItem('id', result.data.data.id));
  // }, []);

  // const toTicket = async () => {
  //   try {
  //     const setData = {
  //       dateBooking: dataBooking.dateBooking,
  //       timeBooking: dataBooking.timeBooking,
  //       scheduleId: dataBooking.scheduleId,
  //       paymentMethod: dataBooking.paymentMethod,
  //       statusPayment: 'success',
  //       seat: dataBooking.seat,
  //     };

  //     console.log(setData);

  //     axios.post('booking/', setData).then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     });

  //     alert('Berhasil');
  //   } catch (err) {
  //     alert('Gagal');
  //     console.log(err.res);
  //   }
  // };

  const handlePayment = async () => {
    await AsyncStorage.getItem('id')
      .then(async value => {
        let userId = await value;

        // await alert(userId);
        try {
          const setData = {
            userId: userId,
            scheduleId: dataBooking.scheduleId,
            dateBooking: dataBooking.dateBooking,
            timeBooking: dataBooking.timeBooking,
            paymentMethod: dataBooking.paymentMethod,
            totalPayment: dataBooking.price * dataBooking.seat.length,
            statusPayment: 'success',
            seat: dataBooking.seat,
          };

          console.log('setData', setData);

          await axios.post('booking/', setData).then(res => {
            console.log(res);
            console.log(res.data);
          });

          const messageNotif = JSON.stringify(setData, null, ' ');

          const setNotification = {
            title: 'Checkout Berhasil',
            // message: `${messageNotif}`,
            message: 'Tiket kamu berhasil dipesan.',
          };
          console.log(setNotification);
          Notification.reminderCheckoutNotification(setNotification);

          // alert('Checkout Berhasil');
        } catch (err) {
          alert(err);
          alert('Checkout Gagal');
        }
      })
      .then(res => {
        console.log(res);
      });
  };

  useEffect(() => {
    setDataBooking({
      ...dataBooking,
      paymentMethod: selectedPayment,
    });
  }, [selectedPayment]);

  // const handlePayment = async () => {
  //   await toTicket();
  // };

  const formatIDR = data => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <ScrollView style={{ backgroundColor: '#F5F6F8', height: '100%' }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}>
        <Text style={{ color: '#AAAAAA', fontSize: 16, fontWeight: '600' }}>
          Total Payment
        </Text>
        <Text style={{ color: '#14142B', fontSize: 20, fontWeight: '700' }}>
          Rp {formatIDR(dataBooking.price * dataBooking.seat.length)}
        </Text>
      </View>
      <View style={{ marginHorizontal: 24, marginVertical: 40 }}>
        <Text
          style={{
            color: '#14142B',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 15,
          }}>
          Payment Method
        </Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 50,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 15,
            }}>
            <TouchableOpacity
              style={
                selectedPayment == 'googlepay'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('googlepay')}>
              <Image
                source={require('../../assets/googlepay.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedPayment == 'visa'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('visa')}>
              <Image
                source={require('../../assets/visa.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedPayment == 'gopay'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('gopay')}>
              <Image
                source={require('../../assets/gopay.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <TouchableOpacity
              style={
                selectedPayment == 'paypal'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('paypal')}>
              <Image
                source={require('../../assets/paypal.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedPayment == 'ovo'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('ovo')}>
              <Image
                source={require('../../assets/ovo.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedPayment == 'dana'
                  ? styles.paymentMethodItemActive
                  : styles.paymentMethodItem
              }
              onPress={() => setSelectedPayment('dana')}>
              <Image
                source={require('../../assets/dana.png')}
                style={{ height: 20, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>
          {/* <Image style={{marginBottom: 10, width:'100%'}} source={require('../../assets/payment-test.png')} /> */}
          <Text
            style={{
              color: '#6E7191',
              fontSize: 14,
              fontWeight: '600',
              marginBottom: 15,
              marginTop: 15,
            }}>
            Or
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#6E7191', fontSize: 14, fontWeight: '600' }}>
              Pay via cash.
            </Text>
            <Text style={{ color: '#5F2EEA', fontSize: 14, fontWeight: '600' }}>
              See how it work
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: '#14142B',
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 15,
          }}>
          Personal Info
        </Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 30,
            borderRadius: 16,
            marginBottom: 50,
          }}>
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            Full Name
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your Full Name"
            onChangeText={text => changeFullName(text)}
          />
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            Email
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Write your email"
            onChangeText={text => changeEmail(text)}
          />
          <Text style={{ color: '#4E4B66', fontSize: 14, marginBottom: 10 }}>
            Phone Number
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Input your Phone  Number"
            onChangeText={text => changePhoneNumber(text)}
          />
        </View>

        <TouchableOpacity style={{ width: '100%' }} onPress={handlePayment}>
          <Text style={styles.btnBook}>Checkout Now</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
}

export default Checkout;
