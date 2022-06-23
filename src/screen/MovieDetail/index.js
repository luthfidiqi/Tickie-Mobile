import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import axios from '../../utils/axios';

import Footer from "../../components/Footer";

function MovieDetail(props) {

  const [movieData, setMovieData] = useState(props.route.params.data);
  const [schedule, setSchedule] = useState([]);
  const [activeSchedule, setActiveSchedule] = useState('');
  const [activeTime, setActiveTime] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [bookingData, setBookingData] = useState({
    dateBooking: `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`,
    timeBooking: '',
    scheduleId: '',
    paymentMethod: '',
    statusPayment: '',
    seat: [],
    price: 0,
    movieName: movieData.name,
    movieId: movieData.id,
  });
  const [activePage, setActivePage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDD, setOpenDD] = useState(false);
  const [value, setValue] = useState(null);
  const [location, setLocation] = useState('');
  const [option, setOption] = useState([
    'NAME A - Z',
    'NAME Z - A',
    'DATE 1 - 31',
    'DATE 31 - 1',
  ]);

  const getMovieSchedule = async () => {
    try {
      const result = await axios.get(
        `schedule?movieId=${movieData.id}&location=${location}`,
      );
      setSchedule(result.data.data);
    } catch (err) {
      setSchedule([]);
    }
  };

  const setTime = (btn, index, time, price) => {
    setActiveSchedule(btn);
    setActiveTime(index);
    setSelectedTime(time);
    setBookingData({
      ...bookingData,
      scheduleId: btn,
      timeBooking: time,
      price,
    });
  };

  useEffect(() => {}, [bookingData]);

  const handleBook = () => {
    props.navigation.navigate('Order', {
      bookingData,
    });
  };

  useEffect(() => {
    setBookingData({
      ...bookingData,
      dateBooking: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`,
    });
  }, [date]);

  useEffect(() => {
    getMovieSchedule();
  }, [location]);

  useEffect(() => {
    getMovieSchedule();
  }, []);

  const formatIDR = data => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%',}}>
      <View style={{alignItems: 'center', margin:30}}>
        <View style={{padding: 30, borderColor: '#DEDEDE', borderWidth: 1, borderRadius: 8}}>
          {/* <Image source={require('../../assets/img-detail.png')} /> */}
          <Image source={{ uri: `https://res.cloudinary.com/luthfidiqi/image/upload/v1649598083/${movieData.image}`}} style={{width: 160, height: 250, borderRadius:6}}/>
        </View>
      </View>

      <View style={{paddingHorizontal: 24}}>
        <Text style={{color:'#000000', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>{movieData.name}</Text>
        <Text style={{color:'#4E4B66', fontSize: 14, textAlign: 'center', marginTop: 10, marginBottom: 30}}>{movieData.category}</Text>
        <View style={{flexDirection:'row',}}>
          <View style={{flexDirection:'column'}}>
              <View style={{marginRight: 80, marginBottom:20}}>
                  <Text style={{color:'#8692A6', fontSize: 14,}}>Release date</Text>
                  <Text style={{color:'#121212', fontSize: 16,}}>{movieData.releaseDate.slice(0, 10)}</Text>
              </View>
              <View style={{marginRight: 70}}>
                  <Text style={{color:'#8692A6', fontSize: 14,}}>Duration</Text>
                  <Text style={{color:'#121212', fontSize: 16,}}>{movieData.duration}</Text>
              </View>
          </View>

          <View style={{flexDirection:'column'}}>
              <View style={{marginBottom:20}}>
                  <Text style={{color:'#8692A6', fontSize: 14,}}>Directed by</Text>
                  <Text style={{color:'#121212', fontSize: 16,}}>{movieData.director}</Text>
              </View>
              <View>
                  <Text style={{color:'#8692A6', fontSize: 14,}}>Casts</Text>
                  <Text style={{color:'#121212', fontSize: 16, maxWidth: 150}}>{movieData.casts}</Text>
              </View>
          </View>
        </View>
        <Text style={{color:'#121212', fontSize: 16, marginTop: 50, marginBottom:16}}>Synopsis</Text>
        <Text style={{color:'#8692A6', fontSize: 14, lineHeight:22}}>{movieData.synopsis}</Text>
      </View>

      <View style={{backgroundColor:'#F5F6F8', paddingHorizontal: 24, paddingVertical: 40, marginVertical: 50}}>
        <Text style={{color:'#000000', fontSize: 18, marginBottom:30, fontWeight: '600', textAlign: 'center'}}>Showtimes and Tickets</Text>

        {schedule.length > 0
          ? schedule.map(item => (
          <View style={{backgroundColor:'#ffffff', padding: 30, borderRadius: 8, marginBottom:25}} key={item.price}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image source={require('../../assets/ebu.png')} />
            </View>
            <Text style={{color:'#AAAAAA', fontSize: 13, marginTop:10, fontWeight: '400', textAlign: 'center'}}>{item.location}</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', marginTop:20}}>
                      {item.time.split(',').map((ele, index) => (
                        <TouchableOpacity
                          key={index}
                          style={styles.listTime}
                          onPress={() =>
                            setTime(item.id, index, ele, item.price)
                          }>
                          <Text
                            style={
                              activeTime == index && activeSchedule == item.id
                                ? styles.listTimeTextActive
                                : styles.listTimeText
                            }>
                            {ele}
                          </Text>
                        </TouchableOpacity>
                      ))}
            </View>
          <View style={{flexDirection:'row', marginTop:30, marginBottom:30, justifyContent: 'space-between'}}>
            <Text style={{color:'#6B6B6B', fontSize: 14}}>Price</Text>
            <Text style={{color:'#000000', fontSize: 14, fontWeight:'600'}}>Rp {formatIDR(item.price)} / seat</Text>
          </View>
          {/* <TouchableOpacity 
          style={{width: '100%'}} 
          underlayColor="none"
          onPress={async () =>
            handleBook({
            movieId: movie.id,
            scheduleId: item.id,
            premiere: item.premiere,
            nameMovie: await AsyncStorage.getItem('nameMovie'),
            date: new Date(date).toDateString(),
            dateBooking: new Date(date).toISOString().split('T')[0],
            time: selectedActiveTime,
            })}>
            <Text style={styles.btnBook}>Book Now</Text>
          </TouchableOpacity> */}
          <TouchableOpacity 
          style={{width: '100%'}} 
          underlayColor="none"
          onPress={handleBook}>
            <Text style={styles.btnBook}>Book Now</Text>
          </TouchableOpacity>
        </View>

      )) : (
        <View >
          <Text>
            Schedule not available
          </Text>
        </View>
      )}
      </View>
      

      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;