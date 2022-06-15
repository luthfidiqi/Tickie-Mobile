import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function MovieDetail(props) {
  const handleBook = () => {
    props.navigation.navigate('Order');
  };
  
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

      <View style={{backgroundColor:'#F5F6F8', paddingHorizontal: 24, paddingVertical: 40, marginVertical: 50}}>
        <Text style={{color:'#000000', fontSize: 18, marginBottom:30, fontWeight: '600', textAlign: 'center'}}>Showtimes and Tickets</Text>
        <View style={{backgroundColor:'#ffffff', padding: 30, borderRadius: 8}}>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../assets/ebu.png')} />
          </View>
          <Text style={{color:'#AAAAAA', fontSize: 13, marginTop:10, fontWeight: '400', textAlign: 'center'}}>Whatever street No.12, South Purwokerto</Text>
          <View style={{flexDirection:'row', marginTop:20, justifyContent:'center',}}>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14,}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12}}>08:30am</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',}}>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12, marginRight:14}}>08:30am</Text>
            <Text style={{color:'#4E4B66', fontSize: 12,}}>08:30am</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:30, marginBottom:30, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>Price</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>$10.00/seat</Text>
          </View>
          <TouchableOpacity style={{width: '100%'}} onPress={handleBook}>
            <Text style={styles.btnBook}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;
