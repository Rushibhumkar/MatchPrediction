import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';

const RootNavigator = () => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      {index === 0 ? (
        <HomeScreen />
      ) : index === 1 ? (
        <PortfolioScreen />
      ) : index === 2 ? (
        <WalletScreen />
      ) : (
        <ProfileScreen />
      )}
      <View
        style={{
          backgroundColor: '#000',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 6,
          borderRadius: 8,
          shadowColor: '#fff',
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 2,
        }}>
        <TouchableOpacity
          onPress={() => setIndex(0)}
          style={{justifyContent: 'center', alignItems: 'center', padding: 2}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/263/263115.png',
            }}
            style={{height: 22, width: 22, tintColor: '#fff'}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 12, color: '#fff'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIndex(1)}
          style={{justifyContent: 'center', alignItems: 'center', padding: 2}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1063/1063376.png',
            }}
            style={{height: 22, width: 22, tintColor: '#fff'}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 12, color: '#fff'}}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIndex(2)}
          style={{justifyContent: 'center', alignItems: 'center', padding: 2}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2169/2169864.png',
            }}
            style={{height: 22, width: 22, tintColor: '#fff'}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 12, color: '#fff'}}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIndex(3)}
          style={{justifyContent: 'center', alignItems: 'center', padding: 2}}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png',
            }}
            style={{height: 22, width: 22, tintColor: '#fff'}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 12, color: '#fff'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RootNavigator;
