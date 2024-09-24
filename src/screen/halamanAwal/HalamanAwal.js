import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

const HalamanAwal = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Detail');
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#535c68',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'#535c68'} barStyle={'dark-content'} />
      <Image
        source={require('../../assets/Sisambi.png')}
        style={{height: 200, width: 200, marginBottom: 20}}
      />
      <Text
        style={{
          color: '#007cd1',
          fontSize: 40,
          fontWeight: '600',
          fontFamily: 'Roboto-Bold',
        }}>
        DISAMBI
      </Text>
    </View>
  );
};

export default HalamanAwal;
