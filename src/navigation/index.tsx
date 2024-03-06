import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Auth from '../screens/Auth';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
import {colors} from '../utils/colors';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Agencia de Viaje',
          headerStyle: {backgroundColor: colors.blueTitle},
          headerTitleStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Agencia de Viaje',
          headerStyle: {backgroundColor: colors.blueTitle},
          headerTitleStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
