import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function Order(props) {
  const handleCheckout = () => {
    props.navigation.navigate('Checkout');
  };
  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Choose Your Seat</Text>
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50}}>
          <Image style={{marginBottom: 30, width:'100%'}} source={require('../../assets/seat-test.png')} />
        </View>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Order Info</Text>

        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50}}>
          <View style={{alignItems:'center'}}>
            <Image style={{marginBottom: 20,}} source={require('../../assets/cineone.png')} />
            <Text style={{color:'#14142B', fontSize: 24, fontWeight:'600', marginBottom:10, }}>CineOne21 Cinema</Text>
            <Text style={{color:'#14142B', fontSize: 14, fontWeight:'600', marginBottom:15, }}>Spider-Man: Homecoming</Text>
          </View>

          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>Tuesday, 07 July 2020</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>02:00pm</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>One ticket price</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>$10</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>Seat choosed</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>C4, C5, C6</Text>
          </View>

          <View style={{flexDirection:'row', marginTop:50, justifyContent: 'space-between', alignItems:'center'}}>
            <Text style={{color:'#000000', fontSize: 18, fontWeight:'600'}}>Total Payment</Text>
            <Text style={{color:'#5F2EEA', fontSize: 22, fontWeight:'600'}}>$30</Text>
          </View>
        </View>

        <TouchableOpacity style={{width: '100%'}} onPress={handleCheckout}>
            <Text style={styles.btnBook}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
        
      <Footer />
    </ScrollView>
  );
}

export default Order;
