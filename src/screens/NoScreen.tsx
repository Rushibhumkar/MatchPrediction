import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NoScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#000',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
          Kolkata to win the match vs Mumbai?
        </Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAOwSBWTNgXrxKFOuVW7DxKs9SvJ_zmZqLA&s',
          }}
          style={{width: 60, height: 60, borderRadius: 8}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
          backgroundColor: 'grey',
          borderRadius: 22,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',
            width: '46%',
            borderRadius: 22,
            paddingVertical: 16,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Yes ₹ 5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#5bc276',
            width: '53%',
            borderRadius: 22,
            paddingVertical: 16,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>No ₹ 4.7</Text>
        </TouchableOpacity>
      </View>
      {/* <------------box component-----------> */}
      <View
        style={{
          borderRadius: 8,
          borderWidth: 0.6,
          borderColor: 'grey',
          padding: 12,
          marginVertical: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#fff'}}>Price</Text>
          <Text style={{color: '#fff'}}>₹ 5.3</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            marginTop: 16,
          }}>
          <Image
            resizeMode="contain"
            style={{width: 40, height: 40, tintColor: '#fff'}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2040/2040522.png',
            }}
          />
          <View
            style={{
              flex: 1,
              height: 12,
              borderRadius: 12,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                position: 'relative',
                left: 0,
                backgroundColor: '#5bc276',
                width: 50,
                zIndex: 20,
                height: 12,
                borderRadius: 12,
              }}
            />
            <View
              style={{
                position: 'relative',
                left: 40,
                backgroundColor: '#5bc276',
                width: 20,
                zIndex: 20,
                height: 20,
                top: -16,
                borderRadius: 10,
              }}
            />
          </View>
          <Image
            resizeMode="contain"
            style={{width: 40, height: 40, tintColor: '#fff'}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3161/3161837.png',
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 0.8,
            marginVertical: 16,
            borderStyle: 'dashed',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
              ₹ 5.3
            </Text>
            <Text style={{color: 'grey', fontSize: 13}}>You Put</Text>
          </View>
          <View>
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 15}}>
              ₹ 10
            </Text>
            <Text style={{color: 'grey', fontSize: 13}}>You get</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5bc276',
          flexDirection: 'row',
          paddingVertical: 22,
          borderRadius: 50,
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/12131/12131392.png',
          }}
          style={{
            position: 'absolute',
            left: 4,
            top: 4,
            width: 60,
            height: 60,
            borderRadius: 8,
            tintColor: '#fff',
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          Swip for No
        </Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', marginTop: 4}}>
        Available Balance : 400.00
      </Text>
    </View>
  );
};

export default NoScreen;
