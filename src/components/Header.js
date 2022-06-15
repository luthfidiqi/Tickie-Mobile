import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <View>
        <Image source={require('../assets/logo-tickitz-color.png')} />
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={require('../assets/hamburger-menu.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#dedede',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 24
  },
});
