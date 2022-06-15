import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
// import styles from './styles';

import Footer from "../../components/Footer";

function Profile() {
  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Choose Your Seat</Text>
        
      </View>
        
      <Footer />
    </ScrollView>
  );
}

export default Profile;
