import React, {useEffect} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  }, []);

  return (
    <ImageBackground source={require('../../assets/splash-bg.png')} resizeMode="cover">
    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',}}>
      <Image source={require('../../assets/logo-tickitz-white.png')} />
      <Text style={{color:'#FFFFFF', fontSize: 24,}}>wait, watch, wow!</Text>
    </View>
    </ImageBackground>
  );
}

export default SplashScreen;
