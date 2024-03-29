import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';
import Register from '../screen/Register';
import Forgot from '../screen/Forgot';
import SetPass from '../screen/Forgot/SetPass';

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Forgot}
        name="Forgot"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SetPass}
        name="SetPass"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
