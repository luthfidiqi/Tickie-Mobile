import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';

function HomeScreen() {
  return (
    <ScrollView style={styles.home}>
      <View style={{paddingBottom: 100,}}>
        <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
          <Text style={{color:'#A0A3BD', fontSize: 12, marginBottom:5,}}>Nearest Cinema, Newest Movie,</Text>
          <Text style={{color:'#5F2EEA', fontSize: 30, fontWeight:'bold', marginBottom:30,}}>Find out now!</Text>
          <Image style={{marginBottom: 30,}} source={require('../../assets/home-header-img.png')} />
        </View>

        <View style={{backgroundColor:'#D6D8E7', marginBottom: 50,}}>
          <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:25}}>
            <Text style={{color:'#752EEA', fontSize: 16, fontWeight: 'bold'}}>Now Showing</Text>
            <Text style={{color:'#5F2EEA', fontSize: 14,}}>view all</Text>
            </View>
            <ScrollView horizontal={true}>
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
            </ScrollView>
          </View>
        </View>

        <View style={{marginBottom: 50,}}>
          <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:25}}>
            <Text style={{color:'#752EEA', fontSize: 16, fontWeight: 'bold'}}>Upcoming Movies</Text>
            <Text style={{color:'#5F2EEA', fontSize: 14,}}>view all</Text>
            </View>
            <ScrollView horizontal={true} style={{marginBottom: 30,}}>
              <Text style={styles.btnDateActive}>September</Text>
              <Text style={styles.btnDate}>October</Text>
              <Text style={styles.btnDate}>November</Text>
              <Text style={styles.btnDate}>December</Text>
            </ScrollView>
            <ScrollView horizontal={true}>
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
              <Image style={{marginRight: 15,}} source={require('../../assets/card-test.png')} />
            </ScrollView>
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
}

export default HomeScreen;
