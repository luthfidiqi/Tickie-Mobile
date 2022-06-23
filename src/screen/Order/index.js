import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput, FlatList, } from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";
import Seat from "../../components/Seat";

function Order(props) {
  const [dataBooking, setDataBooking] = useState(
    props.route.params.bookingData,
  );

  // const handleCheckout = () => {
  //   props.navigation.navigate('Checkout');
  // };

  const handleCheckout = () => {
    if (selectedSeat.length < 1) {
      alert('Belum memilih seat');
    } else {
      props.navigation.navigate('Checkout', {
        dataBooking,
      });
    }
  };

  const [seatCoosed, setSeatCoosed] = useState([]);
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    console.log(props.route.params);
  }, []);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  useEffect(() => {
    setDataBooking({
      ...dataBooking,
      totalPayment: selectedSeat.length * dataBooking.price,
      seat: selectedSeat,
    });
  }, [selectedSeat]);

  const formatIDR = data => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getSeatList = async () => {
    try {
      const result = await axios.get(
        `bookingSeat?scheduleId=${dataBooking.scheduleId}&movieId=${dataBooking.movieId}&dateBooking=${dataBooking.dateBooking}&timeBooking=${dataBooking.timeBooking}:00`,
      );

      const newResult = result.data.data;

      newResult.map(item => {
        reservedSeat.push(item.seat);
      });
    } catch (err) {
      setReservedSeat([]);
    }
  };

  useEffect(() => {}, [selectedSeat]);

  useEffect(() => {
    getSeatList();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Choose Your Seat</Text>
        <View style={{backgroundColor: '#ffffff', paddingHorizontal: 10, paddingVertical:20, borderRadius:16, marginBottom:50}}>
          {/* <Image style={{marginBottom: 30, width:'100%'}} source={require('../../assets/seat-test.png')} /> */}
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
          <View style={{marginHorizontal:10, marginVertical:10 }}>
            <Text style={{color:'#14142B', fontSize: 16, fontWeight:'500', marginBottom:15, }}>Seating key</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{marginRight:50}}>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/down-arrow.png')} />
                  <Text style={{color:'#4E4B66', fontSize: 15, fontWeight:'500', marginBottom:15, marginLeft:5}}>A - G</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/available.png')} />
                  <Text style={{color:'#4E4B66', fontSize: 15, fontWeight:'500', marginBottom:15, marginLeft:5}}>Available</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/sold.png')} />
                  <Text style={{color:'#4E4B66', fontSize: 15, fontWeight:'500', marginLeft:5}}>Sold</Text>
                </View>
              </View>
              <View>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/side-arrow.png')} />
                  <Text style={{color:'#4E4B66', fontSize: 15, fontWeight:'500', marginBottom:15, marginLeft:5}}>1 - 14</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/selected.png')} />
                  <Text style={{color:'#4E4B66', fontSize: 15, fontWeight:'500', marginBottom:15, marginLeft:5}}>Selected</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Order Info</Text>

        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50}}>
          <View style={{alignItems:'center'}}>
            <Image style={{marginBottom: 20,}} source={require('../../assets/cineone.png')} />
            <Text style={{color:'#14142B', fontSize: 24, fontWeight:'600', marginBottom:10, }}>CineOne21 Cinema</Text>
            <Text style={{color:'#14142B', fontSize: 14, fontWeight:'600', marginBottom:15, }}>{dataBooking.movieName}</Text>
          </View>

          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>{dataBooking.dateBooking}</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>{dataBooking.timeBooking}</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>One ticket price</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>Rp {formatIDR(dataBooking.price)}</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:15, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>Seat choosed</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600', flexWrap:'wrap', width:'60%', textAlign:'right'}}>{selectedSeat.sort((a, b) => a - b).join(', ')}</Text>
          </View>

          <View style={{flexDirection:'row', marginTop:50, justifyContent: 'space-between', alignItems:'center'}}>
            <Text style={{color:'#000000', fontSize: 18, fontWeight:'600'}}>Total Payment</Text>
            <Text style={{color:'#5F2EEA', fontSize: 22, fontWeight:'600'}}>Rp {formatIDR(dataBooking.price * selectedSeat.length)}</Text>
          </View>
        </View>

        <TouchableOpacity style={{width: '100%'}} onPress={handleCheckout}>
            <Text style={styles.btnBook}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
        
      <Footer />
    </ScrollView>
  );
}

export default Order;
