import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const HalamanKedua = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [isTrue, setIsTrue] = useState(false);
  const [tutup, setTutup] = useState(true);

  const handlerHidden = () => {
    setIsTrue(!isTrue);
  };
  // console.log(handlerTutup);
  const handlerTutup = () => {
    setTutup(!tutup);
  };
  const login = () => {
    return fetch('https://dev-disambi.sandboxindonesia.id/api/auth/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json?.data) {
          Alert.alert('Anda berhasil login');
          setTimeout(() => {
            navigation.navigate('DetailKedua');
          }, 4000);
          setPassword('');
          setUsername('');
        } else {
          Alert.alert(json?.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#535c68'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#535c68'} />
      <View style={{padding: 20, margin: 10, marginTop: 130}}>
        <Image
          source={require('../../assets/Sisambi.png')}
          style={{width: 120, height: 120, marginLeft: 100, marginBottom: 50}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            marginTop: -40,
            marginBottom: 20,
          }}>
          DISAMBI
        </Text>
        <Text style={{color: 'black', fontSize: 15}}>Username</Text>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1 / 2,
            borderColor: 'grey',
            borderRadius: 5,
            marginTop: 5,
            height: 45,
            elevation: 2,
          }}>
          <TextInput
            placeholder="Masukan username"
            placeholderTextColor={'gray'}
            value={username}
            onChangeText={text => setUsername(text)}
            style={{color: 'black', marginLeft: 10}}
          />
        </View>
        <Text style={{color: 'black', fontSize: 15, marginTop: 20}}>
          Password
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1 / 2,
            borderColor: 'grey',
            borderRadius: 5,
            marginTop: 5,
            height: 45,
            marginBottom: 20,
            elevation: 2,
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Masukan password"
            placeholderTextColor={'grey'}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{color: 'black', marginLeft: 10}}
            secureTextEntry={tutup}
          />
          <TouchableOpacity
            onPress={() => handlerTutup()}
            style={{position: 'absolute', marginLeft: 200}}>
            <Image
              source={
                tutup == true
                  ? require('../../assets/eye.png')
                  : require('../../assets/hidden.png')
              }
              style={{
                width: 20,
                height: 20,
                marginTop: 12,
                marginLeft: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 18,
              height: 18,
              backgroundColor: 'white',
              borderWidth: 1 / 2,
              borderRadius: 3,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            onPress={() => handlerHidden()}>
            <View>
              {isTrue ? (
                <Image
                  source={require('../../assets/check.png')}
                  style={{width: 16, height: 16}}
                />
              ) : (
                <View style={{width: 18, height: 18}}></View>
              )}
            </View>
          </TouchableOpacity>
          <Text style={{color: 'black', fontFamily: 'Roboto-Regular'}}>
            Ingatkan saya
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2296f3',
              height: 40,
              width: 300,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => login()}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HalamanKedua;
