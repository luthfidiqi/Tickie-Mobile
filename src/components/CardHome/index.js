import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

function CardHome(props) {
  const handleDetail = () => {
    props.navigation.navigate('Detail');
  };
  
  return (
    <View style={styles.card}>
        <Image source={require('../../assets/card-img.png')} />
        <Text style={{color:'#14142B', fontSize: 14, marginTop:12,}}>Black Widow</Text>
        <Text style={{color:'#A0A3BD', fontSize: 12, marginTop:5, marginBottom:25, maxWidth: 120, textAlign: 'center'}}>Action, Adventure, Sci-Fi</Text>
        <TouchableOpacity style={{width:'100%'}} onPress={handleDetail}>
          <Text style={styles.btnCard}>Details</Text>
        </TouchableOpacity>
    </View>
  );
}

export default CardHome;
