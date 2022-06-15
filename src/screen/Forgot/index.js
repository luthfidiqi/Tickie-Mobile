import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';

function Forgot(props) {

  const handleSend = () => {
    props.navigation.navigate('Login');
  };

  return (
    // <View style={{backgroundColor: 'blue'}}>
    <View style={styles.login}>
      <Image style={{marginBottom: 30}} source={require('../../assets/logo-tickitz-color.png')} />
      <Text style={{color:'#121212', fontSize: 24, fontWeight: 'bold', marginBottom:12,}}>Forgot Password</Text>
      <Text style={{color:'#8692A6', fontSize: 13, marginBottom:30,}}>we'll send a link to your email shortly</Text>
      <ScrollView>
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your email"
        />
        
        <View style={{marginTop:20,}}>
          <Button title="Send" color="#5F2EEA" onPress={handleSend} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Forgot;
