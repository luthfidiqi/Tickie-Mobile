import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function Ticket() {
  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <View style={{backgroundColor: '#ffffff', padding:24, borderRadius:8}}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Image style={{marginBottom:20,}} source={require('../../assets/qr.png')} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View >
                    <View style={{marginBottom: 10}}>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Release date</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>Spider-Man: ..</Text>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Date</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>07 Jul</Text>
                    </View>
                    <View>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Count</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>3 pcs</Text>
                    </View>
                </View>

                <View >
                    <View style={{marginBottom: 10}}>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Category</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>Action</Text>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Time</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>2:00pm</Text>
                    </View>
                    <View>
                        <Text style={{color:'#AAAAAA', fontSize: 12, }}>Seats</Text>
                        <Text style={{color:'#14142B', fontSize: 14,}}>C4, C5, C6</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop:40, justifyContent: 'space-between', alignItems:'center', borderColor:'#DEDEDE', borderWidth:1, borderRadius:4, padding:10}}>
            <Text style={{color:'#000000', fontSize: 16, fontWeight:'600'}}>Total</Text>
            <Text style={{color:'#5F2EEA', fontSize: 16, fontWeight:'700'}}>$30.00</Text>
          </View>
        </View>
        
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
