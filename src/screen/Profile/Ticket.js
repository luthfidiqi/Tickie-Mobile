import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Button,
  TextInput,
} from 'react-native';
import styles from './styles';

import axios from '../../utils/axios';

import Footer from '../../components/Footer';

function Ticket(props) {
  const [ticket, setTicket] = useState(props.route.params.data);

  //   console.log(ticket);

  //   const getTicket = async () => {
  //     try {
  //       const result = await axios.get(`booking/id/${booking.id}`);
  //       setTicket(result.data.data);
  //     } catch (err) {
  //       setTicket([]);
  //     }
  //   };

  //   useEffect(() => {
  //     getTicket();
  //   }, []);

  //   useEffect(() => {
  //     setTicket({
  //       ...ticket,
  //     });
  //   }, []);

  const formatIDR = data => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <ScrollView style={{ backgroundColor: '#F5F6F8', height: '100%' }}>
      <View style={{ marginHorizontal: 24, marginVertical: 40 }}>
        <View
          style={{ backgroundColor: '#ffffff', padding: 24, borderRadius: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image
              style={{ marginBottom: 20 }}
              source={require('../../assets/qr.png')}
            />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>
                  Release date
                </Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {/* Spider-Man: .. */}
                  {ticket.name}
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>Date</Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {ticket.dateBooking.split('T')[0]}
                </Text>
              </View>
              <View>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>Count</Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {/* {ticket.seat}  */}
                  {ticket.seat?.split(',').length
                    ? ticket.seat.split(',').length
                    : '0'}
                  pcs
                </Text>
              </View>
            </View>

            <View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>Category</Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {ticket.category}
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>Time</Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {ticket.timeBooking}
                </Text>
              </View>
              <View>
                <Text style={{ color: '#AAAAAA', fontSize: 12 }}>Seats</Text>
                <Text style={{ color: '#14142B', fontSize: 14 }}>
                  {ticket.seat}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderColor: '#DEDEDE',
              borderWidth: 1,
              borderRadius: 4,
              padding: 10,
            }}>
            <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
              Total
            </Text>
            <Text style={{ color: '#5F2EEA', fontSize: 16, fontWeight: '700' }}>
              Rp {formatIDR(ticket.totalPayment)}
            </Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
