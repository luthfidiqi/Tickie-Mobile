import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput, FlatList,} from 'react-native';
import styles from './styles';

import axios from '../../utils/axios';

import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";

function HomeScreen(props) {
  const handleDetail = () => {
    props.navigation.navigate('Detail');
  };

  const handleJoin = () => {
  };

  const handleViewAll = () => {
    props.navigation.navigate('List');
  };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  useEffect(() => {
    getDataMovie();
  }, []);

  const getDataMovie = async () => {
    try {
        const result = await axios.get(`movie?page=${page}&limit=9`);
        setData(result.data.data);
        setTotalPage(result.data.pagination.totalPage);
    } catch (error) {
      console.log(error);
    }
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
            {/* <ScrollView horizontal={true}>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
              <CardHome {...props}/>
            </ScrollView> */}
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({item}) => (
                  <View style={styles.card}>
                    <Image source={{ uri: `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${item.image}`}} style={{width: 120, height: 180, borderRadius:6}}/>
                    <Text style={{color:'#14142B', fontSize: 14, marginTop:12,}}>{item.name}</Text>
                    <Text style={{color:'#A0A3BD', fontSize: 12, marginTop:5, marginBottom:25, maxWidth: 120, textAlign: 'center'}}>{item.category}</Text>
                    <TouchableOpacity style={{width:'100%'}} onPress={handleDetail}>
                      <Text style={styles.btnCard}>Details</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
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
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({item}) => (
                  <View style={styles.card}>
                    <Image source={{ uri: `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${item.image}`}} style={{width: 120, height: 180, borderRadius:6}}/>
                    <Text style={{color:'#14142B', fontSize: 14, marginTop:12,}}>{item.name}</Text>
                    <Text style={{color:'#A0A3BD', fontSize: 12, marginTop:5, marginBottom:25, maxWidth: 120, textAlign: 'center'}}>{item.category}</Text>
                    <TouchableOpacity style={{width:'100%'}} onPress={handleDetail}>
                      <Text style={styles.btnCard}>Details</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
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
