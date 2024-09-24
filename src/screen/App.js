import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HalamanAwal from './halamanAwal/HalamanAwal';
import HalamanKedua from './halamanKedua/HalamanKedua';
import HalamanKetiga from './halamanKetiga/HalamanKetiga';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HalamanAwal} />
        <Stack.Screen name="Detail" component={HalamanKedua} />
        <Stack.Screen name="DetailKedua" component={HalamanKetiga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
