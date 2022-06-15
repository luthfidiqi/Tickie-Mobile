import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";

function ViewAll(props) {
  
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%',}}>
        <View>
          <View style={{paddingVertical: 40, paddingHorizontal:24,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom:25}}>
              <Text style={{color:'#14142B', fontSize: 16, fontWeight: 'bold'}}>List Movie</Text>
            </View>
            <ScrollView horizontal={true} style={{marginBottom: 30,}}>
              <Text style={styles.btnDateActive}>September</Text>
              <Text style={styles.btnDate}>October</Text>
              <Text style={styles.btnDate}>November</Text>
              <Text style={styles.btnDate}>December</Text>
            </ScrollView>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <CardHome {...props}/>
              <CardHome {...props}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CardHome {...props}/>
              <CardHome {...props}/>
            </View>
          </View>
        </View>
      
      <Footer />
    </ScrollView>
  );
}

export default ViewAll;
