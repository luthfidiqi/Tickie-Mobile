import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/MovieDetail';
import Order from '../screen/Order';
import Checkout from '../screen/Checkout';

import List from '../screen/ViewAll';

import Profile from '../screen/Profile';
import History from '../screen/Profile/History';
import Ticket from '../screen/Profile/Ticket';

import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';

import Counter from '../screen/Counter';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Checkout}
        name="Checkout"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ListNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        component={List}
        name="List"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={History}
        name="History"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Ticket}
        name="Ticket"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function CounterNavigator() {
  return (
    <Stack.Navigator initialRouteName="Counter">
      <Stack.Screen
        component={Counter}
        name="Counter"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ListNavigator}
        name="ListNavigator"
        options={{
          title: 'List Movie',
          header: props => <Header {...props} />,
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
        }}
      />
      <Drawer.Screen
        component={CounterNavigator}
        name="CounterNavigator"
        options={{
          title: 'Counter',
          header: props => <Header {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
}