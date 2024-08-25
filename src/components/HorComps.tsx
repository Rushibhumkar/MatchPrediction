import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HorComps = ({title, price, rate, imgUrl}: any) => {
  return (
    <View
      style={{
        marginRight: 16,
        backgroundColor: '#303030',
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginTop: 20,
        borderRadius: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 18,
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 14}}>{title}</Text>
          <View style={{gap: 6, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'grey'}}>{price}</Text>
            <Text style={{color: 'green'}}>{rate}</Text>
          </View>
        </View>
        <Image
          source={{uri: imgUrl}}
          style={{height: 40, width: 40}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HorComps;
