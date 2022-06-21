import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput, FlatList} from 'react-native';
import styles from './styles';

import axios from '../../utils/axios';

import CardHome from "../../components/CardHome";
import Footer from "../../components/Footer";

function ViewAll(props) {
  
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
            <View>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({item}) => (
                  <View style={styles.card}>
                    <Image source={{ uri: `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${item.image}`}} style={{width: 110, height: 170, borderRadius:6}}/>
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
        </View>
      
      <Footer />
    </ScrollView>
  );
}

export default ViewAll;
