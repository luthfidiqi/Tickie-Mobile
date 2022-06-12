import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';

function LoginScreen(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  return (
    // <View style={{backgroundColor: 'blue'}}>
    <View style={styles.login}>
      <Image style={{marginBottom: 30}} source={require('../../assets/logo-tickitz-color.png')} />
      <Text style={{color:'#121212', fontSize: 24, fontWeight: 'bold', marginBottom:12,}}>Sign In</Text>
      <Text style={{color:'#8692A6', fontSize: 13, marginBottom:30,}}>Sign in with your data that you entered during 
      your registration</Text>
      <ScrollView>
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Email</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your email"
        />
        
        <Text style={{color:'#4E4B66', fontSize: 14, marginBottom:10,}}>Password</Text>
        <TextInput 
        style={styles.inputBox}
        placeholder="Write your password"
        />
        
        <View style={{marginTop:20,}}>
          <Button title="Login" color="#5F2EEA" onPress={handleLogin} />
        </View>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={{textAlign: 'center', marginTop: 15,}}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text>Right</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.textHeader}>Login Screen</Text>
      </View> */}
      

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'blue',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container2: {
//     backgroundColor: 'red',
//   },
//   textHeader: {
//     color: 'white',
//   },
// });

export default LoginScreen;
