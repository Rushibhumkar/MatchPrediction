import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MatchDetails = () => {
  const {height, width} = useWindowDimensions();
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#000'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 60}}>
      {/* <-----------screenstart------------> */}
      <View
        style={{
          marginBottom: 20,
          alignItems: 'center',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.8,
          paddingBottom: 8,
        }}>
        <Image
          style={{height: 120, width: 120, marginTop: 20}}
          resizeMode="contain"
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/12557/12557892.png',
          }}
        />
        <Text style={{color: '#fff', fontWeight: 'bold', marginTop: 10}}>
          Kolkata to win the match vs Mumbai?
        </Text>
        <Text
          style={{
            color: 'green',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop: 12,
          }}>
          LAST 5 T20 : KOLKATA 4. MUMBAI 1. DRAW 0.
        </Text>
      </View>
      {/* <------mid component---------> */}
      <View>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
          THE MARKET PREDICT
        </Text>
        <Image
          source={require('../assets/images/graph.jpg')}
          resizeMode="contain"
          style={{height: 600, width: 400, marginTop: 10}}
        />
      </View>
      {/* <--------last component---------> */}
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
          <Text
            style={{
              color: '#fff',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              fontSize: 16,
              fontWeight: 'bold',
              paddingBottom: 4,
            }}>
            Activity
          </Text>
          <Text style={{color: '#ff', fontWeight: 'bold', fontSize: 16}}>
            Order Book
          </Text>
        </View>
        <DoubleComponent />
        <DoubleComponent />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 4,
            width: '100%',
          }}>
          <Text style={{color: '#fff'}}>Show all</Text>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            About the event
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              marginTop: 12,
            }}>
            <View>
              <Text>Traders</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                ₹ 47.12K
              </Text>
            </View>
            <View>
              <Text>Volume</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                ₹ 9.9L
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              marginTop: 12,
            }}>
            <View>
              <Text>Traders</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                ₹ 47.12K
              </Text>
            </View>
            <View>
              <Text>Volume</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
                ₹ 9.9L
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#fff',
            borderTopColor: '#fff',
            borderTopWidth: 1,
            marginTop: 12,
            paddingVertical: 12,
            borderStyle: 'dashed',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
                Overview
              </Text>
              <Text>Information about event</Text>
            </View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
              }}
              style={{height: 16, width: 16, tintColor: '#fff'}}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#fff',
            paddingVertical: 12,
            borderStyle: 'dashed',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
                Source of Truth
              </Text>
              <Text>Information about event</Text>
            </View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
              }}
              style={{height: 16, width: 16, tintColor: '#fff'}}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#fff',
            paddingVertical: 12,
            borderStyle: 'dashed',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 16}}>
                Overview
              </Text>
              <Text>Information about event</Text>
            </View>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
              }}
              style={{height: 16, width: 16, tintColor: '#fff'}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const DoubleComponent = () => {
  return (
    <View style={{marginTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          marginTop: 18,
        }}>
        <Image
          resizeMode="contain"
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/17286/17286792.png',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0373fc',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              paddingVertical: 4,
              width: '85%',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>₹9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5bc276',
              borderTopRightRadius: 8,
              borderBottomEndRadius: 8,
              paddingVertical: 4,
              width: '15%',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>₹1</Text>
          </TouchableOpacity>
        </View>

        <Image
          resizeMode="contain"
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/17286/17286792.png',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
          marginHorizontal: 8,
        }}>
        <Text style={{color: '#fff'}}>Hella</Text>
        <Text>a few seconds ago</Text>
        <Text style={{color: '#fff'}}>Robin</Text>
      </View>
    </View>
  );
};
export default MatchDetails;
