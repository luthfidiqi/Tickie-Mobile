import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
// import styles from './styles';

import Footer from "../../components/Footer";

function MovieDetail() {
  
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%',}}>
      <View style={{alignItems: 'center', margin:30}}>
        <View style={{padding: 30, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 8}}>
          <Image source={require('../../assets/img-detail.png')} />
        </View>
      </View>

      <View style={{paddingHorizontal: 24}}>
        <Text style={{color:'#000000', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Spider-Man: Homecoming</Text>
        <Text style={{color:'#4E4B66', fontSize: 14, textAlign: 'center', marginTop: 10, marginBottom: 30}}>Adventure, Action, Sci-Fi</Text>

        <View style={{flexDirection:'row'}}>
            <View style={{marginRight: 60}}>
                <Text style={{color:'#8692A6', fontSize: 14,}}>Release date</Text>
                <Text style={{color:'#121212', fontSize: 16,}}>June 28, 2017</Text>
            </View>
            <View>
                <Text style={{color:'#8692A6', fontSize: 14,}}>Directed by</Text>
                <Text style={{color:'#121212', fontSize: 16,}}>Jon Watss</Text>
            </View>
        </View>

        <View style={{flexDirection:'row', marginTop:20}}>
            <View style={{marginRight: 70}}>
                <Text style={{color:'#8692A6', fontSize: 14,}}>Duration</Text>
                <Text style={{color:'#121212', fontSize: 16,}}>2 hrs 13 min</Text>
            </View>
            <View>
                <Text style={{color:'#8692A6', fontSize: 14,}}>Casts</Text>
                <Text style={{color:'#121212', fontSize: 16, maxWidth: 150}}>Tom Holland, Robert Downey Jr., etc.</Text>
            </View>
        </View>

        <Text style={{color:'#121212', fontSize: 16, marginTop: 50, marginBottom:16}}>Synopsis</Text>
        <Text style={{color:'#8692A6', fontSize: 14, lineHeight:22}}>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </Text>
      </View>

      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;
