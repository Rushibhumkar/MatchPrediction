import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
