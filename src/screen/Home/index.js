import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllMovie} from '../../stores/actions/movie';

import {useDispatch, useSelector} from 'react-redux';
import axios from '../../utils/axios';

import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";

function HomeScreen(props) {
  const handleJoin = () => {
  };

  const handleViewAll = () => {
    props.navigation.navigate('List');
  };

  return (
    <ScrollView style={styles.home}>
        <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
          <Text style={{color:'#A0A3BD', fontSize: 12, marginBottom:5,}}>Nearest Cinema, Newest Movie,</Text>
          <Text style={{color:'#5F2EEA', fontSize: 30, fontWeight:'bold', marginBottom:30,}}>Find out now!</Text>
          <Image style={{marginBottom: 30,}} source={require('../../assets/home-header-img.png')} />
        </View>

        <View style={{backgroundColor:'#D6D8E7', marginBottom: 50,}}>
          <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:25}}>
            <Text style={{color:'#752EEA', fontSize: 16, fontWeight: 'bold'}}>Now Showing</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={{color:'#5F2EEA', fontSize: 14,}}>view all</Text>
            </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
            </ScrollView>
          </View>
        </View>

        <View style={{marginBottom: 50,}}>
          <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:25}}>
              <Text style={{color:'#752EEA', fontSize: 16, fontWeight: 'bold'}}>Upcoming Movies</Text>
              <TouchableOpacity onPress={handleViewAll}>
                <Text style={{color:'#5F2EEA', fontSize: 14,}}>view all</Text>  
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{marginBottom: 30,}}>
              <Text style={styles.btnDateActive}>September</Text>
              <Text style={styles.btnDate}>October</Text>
              <Text style={styles.btnDate}>November</Text>
              <Text style={styles.btnDate}>December</Text>
            </ScrollView>
            <ScrollView horizontal={true}>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
            </ScrollView>
          </View>
        </View>

        <View style={{
        paddingVertical: 40, 
        paddingHorizontal:24, 
        margin: 30, 
        borderRadius:8 ,
        backgroundColor:'#F5F6F8', 
        borderColor: '#DEDEDE',
        borderWidth: 1.5,
        }}>
          <Text style={{color:'#A0A3BD', fontSize: 12, marginBottom:5, textAlign: 'center'}}>Be the vanguard of the</Text>
          <Text style={{color:'#5F2EEA', fontSize: 30, fontWeight:'bold', marginBottom:30, textAlign: 'center'}}>Moviegoers</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Type your email"
          />
          <TouchableOpacity onPress={handleJoin}>
            <Text style={styles.btnColor}>Join Now</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      
    </ScrollView>
  );
}

export default HomeScreen;
