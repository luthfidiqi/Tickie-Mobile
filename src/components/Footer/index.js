import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';

function Footer() {
    const handleJoin = () => {
    };
  
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%',}}>

        <View style={{paddingVertical: 50, paddingHorizontal:24,}}>
          <Image style={{marginBottom: 20}} source={require('../../assets/logo-tickitz-color.png')} />
          <Text style={{color:'#6E7191', fontSize: 14, marginBottom: 40, lineHeight: 25}}>Stop waiting in line. Buy tickets
          conveniently, watch movies quietly.</Text>
          
          <Text style={{color:'#000000', fontSize: 16, marginBottom: 20}}>Explore</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleJoin}>
              <Text style={{color:'#6E7191', fontSize: 14, marginRight: 30}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleJoin}>
              <Text style={{color:'#6E7191', fontSize: 14}}>List Movie</Text>
            </TouchableOpacity>
          </View>

          <Text style={{color:'#000000', fontSize: 16, marginTop: 40, marginBottom: 20}}>Our Sponsor</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Image style={{marginRight: 20}} source={require('../../assets/ebu.png')} />
            <Image style={{marginRight: 20}} source={require('../../assets/cineone.png')} />
            <Image style={{marginRight: 20}} source={require('../../assets/hiflix.png')} />
          </View>

          <Text style={{color:'#000000', fontSize: 16, marginTop: 40, marginBottom: 20}}>Follow us</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Image style={{marginRight: 30}} source={require('../../assets/facebook.png')} />
            <Image style={{marginRight: 30}} source={require('../../assets/instagram.png')} />
            <Image style={{marginRight: 30}} source={require('../../assets/twitter.png')} />
            <Image style={{marginRight: 30}} source={require('../../assets/youtube.png')} />
          </View>

          <Text style={{color:'#6E7191', fontSize: 12, marginTop: 60}}>© 2020 Tickitz. All Rights Reserved.</Text>
        </View>
      
    </ScrollView>
  );
}

export default Footer;
