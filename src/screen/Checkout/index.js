import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function Checkout(props) {
  const handlePayment = () => {
    // props.navigation.navigate();
  };

  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{backgroundColor: '#ffffff', padding: 24,flexDirection:'row',justifyContent:'space-between', borderBottomLeftRadius:16, borderBottomRightRadius:16}}>
        <Text style={{color:'#AAAAAA', fontSize: 16, fontWeight:'600',}}>Total Payment</Text>
        <Text style={{color:'#14142B', fontSize: 20, fontWeight:'700',}}>$30.00</Text>
      </View>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Payment Method</Text>
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50, alignItems: 'center'}}>
          <Image style={{marginBottom: 10, width:'100%'}} source={require('../../assets/payment-test.png')} />
          <Text style={{color:'#6E7191', fontSize: 14, fontWeight:'600', marginBottom: 15, marginTop:15}}>Or</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#6E7191', fontSize: 14, fontWeight:'600',}}>Pay via cash.</Text>
            <Text style={{color:'#5F2EEA', fontSize: 14, fontWeight:'600',}}>See how it work</Text>
          </View>
        </View>

        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Personal Info</Text>
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50,}}>
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Full Name</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your Full Name"
          />
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your email"
          />
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Phone  Number</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Input your Phone  Number"
          />
        </View>

        <TouchableOpacity style={{width: '100%'}} onPress={handlePayment}>
          <Text style={styles.btnBook}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
      
      <Footer />
    </ScrollView>
  );
}

export default Checkout;
