import React from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Button,TextInput,} from 'react-native';
import styles from './styles';

import Footer from "../../components/Footer";

function Profile(props) {
  const handleBtn = () => {
    // props.navigation.navigate();
  };

  const handleLogout = async () => {
      alert('Logout');
      props.navigation.navigate('Login');
  };

  const handleSwitch = async () => {
    props.navigation.navigate('History');
  };
  return (
    <ScrollView style={{backgroundColor: '#F5F6F8', height: '100%',}}>
      <View style={{backgroundColor: '#ffffff', padding:24, flexDirection:'row'}}>
        <TouchableOpacity style={{width: '100%', flex:1, alignItems:'center'}} onPress={handleBtn}>
          <Text style={styles.topNavActive}>Details Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', flex:1, alignItems:'center'}} onPress={handleSwitch}>
          <Text style={styles.topNav}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:24, marginVertical:40}}>
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:50,}}>
          <Text style={{color:'#4E4B66', fontSize: 16, fontWeight:'500', marginBottom:30, }}>INFO</Text>
          <View style={{alignItems:'center'}}>
            <Image source={require('../../assets/profile-img.png')} />
            <Text style={{color:'#14142B', fontSize: 20, fontWeight:'700', marginBottom:10, }}>Jonas El Rodriguez</Text>
            <Text style={{color:'#4E4B66', fontSize: 14, fontWeight:'400', marginBottom:30, }}>Moviegoers</Text>
            <TouchableOpacity style={{width: '70%'}} onPress={handleLogout}>
              <Text style={styles.btnBook}>Logout</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <Text style={{color:'#14142B', fontSize: 18, fontWeight:'700', marginBottom:15, }}>Account Settings</Text>    
        
        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:30,}}>
          <Text style={{color:'#14142B', fontSize: 16, fontWeight:'500', marginBottom:30, }}>Details Information</Text>
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Full Name</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your Full Name"
          />
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your email"
          />
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Phone  Number</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Input your Phone  Number"
          />
        </View>

        <TouchableOpacity style={{width: '100%'}} onPress={handleBtn}>
          <Text style={styles.btnBook}>Update changes</Text>
        </TouchableOpacity>

        <View style={{backgroundColor: '#ffffff', padding: 30, borderRadius:16, marginBottom:30, marginTop:50}}>
          <Text style={{color:'#14142B', fontSize: 16, fontWeight:'500', marginBottom:30, }}>Account and Privacy</Text>
          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>New Password</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your new password"
          />

          <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Confirm Password</Text>
          <TextInput 
          style={styles.inputBox}
          placeholder="Write your confirm password"
          />
        </View>

        <TouchableOpacity style={{width: '100%',marginBottom:30}} onPress={handleBtn}>
          <Text style={styles.btnBook}>Update changes</Text>
        </TouchableOpacity>
      </View>
        
      <Footer />
    </ScrollView>
  );
}

export default Profile;
