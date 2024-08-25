import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WalletScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Wallet Screen</Text>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
