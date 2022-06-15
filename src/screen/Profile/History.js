import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function History(props) {
  const handleBtn = () => {
    // props.navigation.navigate();
  };

  const handleTicket = async () => {
      props.navigation.navigate('Ticket');
  };

  const handleSwitch = async () => {
    props.navigation.navigate('Profile');
  };
  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{backgroundColor: '#ffffff', padding:24, flexDirection:'row'}}>
        <TouchableOpacity style={{width: '100%', flex:1, alignItems:'center'}} onPress={handleSwitch}>
          <Text style={styles.topNav}>Details Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', flex:1, alignItems:'center'}} onPress={handleBtn}>
          <Text style={styles.topNavActive}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:24, marginVertical:40}}>   
        
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:30,}}>
          <Image style={{marginBottom:20,}} source={require('../../assets/cineone.png')} />
          <Text style={{color:'#aaaaaa', fontSize: 13, fontWeight:'500', marginBottom:10, }}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={{color:'#14142B', fontSize: 16, fontWeight:'500', marginBottom:40, }}>Spider-Man: Homecoming</Text>
          <TouchableOpacity style={{width: '100%'}} onPress={handleTicket}>
            <Text style={styles.btnActive}>Ticket in active</Text>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:30,}}>
          <Image style={{marginBottom:20,}} source={require('../../assets/ebu.png')} />
          <Text style={{color:'#aaaaaa', fontSize: 13, fontWeight:'500', marginBottom:10, }}>Monday, 14 June 2020 - 02:00pm</Text>
          <Text style={{color:'#14142B', fontSize: 16, fontWeight:'500', marginBottom:40, }}>Avengers: End Game</Text>
          <TouchableOpacity style={{width: '100%'}} onPress={handleBtn}>
            <Text style={styles.btnUsed}>Ticket used</Text>
          </TouchableOpacity>
        </View>

      </View>
        
      <Footer />
    </ScrollView>
  );
}

export default History;
