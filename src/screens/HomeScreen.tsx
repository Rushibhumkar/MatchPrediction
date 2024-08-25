import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HorComps from '../components/HorComps';
import YesScreen from './YesScreen';
import NoScreen from './NoScreen';
import MatchDetails from './MatchDetails';

const HomeScreen = () => {
  const [showDetailsScreen, setShowDetailsScreen] = useState(false);
  const [showYesScreen, setShowYesScreen] = useState(false);
  const [showNoScreen, setShowNoScreen] = useState(false);
  const [categories, setCategories] = useState({
    show: false,
    data: ['stocks', 'sports', 'movies', 'others'],
  });
  const {height, width} = useWindowDimensions();
  console.log({showDetailsScreen});
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        padding: 12,
      }}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}>
        {/* <-------------Top title bar--------------> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 100,
          }}>
          <TouchableOpacity
            onPress={() =>
              setCategories(prev => ({...prev, show: !categories.show}))
            }
            style={{gap: 8, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#fff'}}>Category</Text>
            {categories.show && (
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 0,
                  backgroundColor: '#fff',
                  zIndex: 100,
                  borderRadius: 4,
                  paddingHorizontal: 24,
                  paddingVertical: 8,
                }}>
                {categories.data.map((item, ind) => {
                  return (
                    <Text
                      style={{
                        color: 'grey',
                        borderBottomColor: 'grey',
                        paddingBottom: 4,
                        borderBottomWidth: 0.8,
                        borderStyle: 'dashed',
                      }}
                      key={ind}>
                      {item}
                    </Text>
                  );
                })}
              </View>
            )}

            <Image
              tintColor={'#fff'}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/32/32195.png',
              }}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 18,
              marginRight: 4,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5683/5683501.png',
              }}
              style={{width: 40, height: 40}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 14, color: '#fff', fontWeight: 'bold'}}>
              LIVE
            </Text>
            <Image
              tintColor={'#fff'}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/3239/3239958.png',
              }}
              style={{
                width: 24,
                height: 24,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* <----------Small components-----------> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HorComps
              title={'Bitcoin'}
              price={'$5438'}
              rate={'+0.23'}
              imgUrl={'https://cdn-icons-png.flaticon.com/128/9729/9729141.png'}
            />
            <HorComps
              title={'IPL'}
              price={'2024'}
              rate={''}
              imgUrl={
                'https://cdn-icons-png.flaticon.com/128/12557/12557892.png'
              }
            />
            <HorComps
              title={'Ethereum'}
              price={'$5438'}
              rate={'+0.23'}
              imgUrl={
                'https://cdn-icons-png.flaticon.com/128/14446/14446159.png'
              }
            />
            <HorComps
              title={'Champion league'}
              price={'Football'}
              rate={''}
              imgUrl={'https://cdn-icons-png.flaticon.com/128/1099/1099794.png'}
            />
            <HorComps
              title={`Men's world cup`}
              price={'Cridket'}
              rate={''}
              imgUrl={'https://cdn-icons-png.flaticon.com/128/1099/1099794.png'}
            />
          </ScrollView>
        </View>
        {/* <--------Banner image---------> */}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 24,
            paddingVertical: 12,
            backgroundColor: '#fff',
            gap: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '65%'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold',
                marginBottom: 8,
              }}>
              Background Story
            </Text>
            <Text style={{color: 'grey', fontSize: 8}}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20230824/ourmid/pngtree-line-illustration-of-people-walking-around-vector-png-image_6924904.png',
            }}
            style={{width: 120, height: 120}}
            resizeMode="contain"
          />
        </View>
        {/* <------------Components-----------> */}
        <HomeComp
          setShowDetailsScreen={setShowDetailsScreen}
          setShowYesScreen={setShowYesScreen}
          setShowNoScreen={setShowNoScreen}
        />
        <HomeComp
          setShowDetailsScreen={setShowDetailsScreen}
          setShowYesScreen={setShowYesScreen}
          setShowNoScreen={setShowNoScreen}
        />
        <HomeComp
          setShowDetailsScreen={setShowDetailsScreen}
          setShowYesScreen={setShowYesScreen}
          setShowNoScreen={setShowNoScreen}
        />
        <HomeComp
          setShowDetailsScreen={setShowDetailsScreen}
          setShowYesScreen={setShowYesScreen}
          setShowNoScreen={setShowNoScreen}
        />
      </ScrollView>
      {/* <--------show screens-----------> */}
      {showYesScreen && (
        <View style={{backgroundColor: '#000', borderRadius: 12}}>
          <TouchableOpacity
            style={{
              position: 'relative',
              top: -24,
              alignSelf: 'center',
              width: 45,
              height: 14,
              backgroundColor: '#fff',
              borderRadius: 12,
            }}
            onPress={() => setShowYesScreen(false)}></TouchableOpacity>
          <YesScreen />
        </View>
      )}
      {showNoScreen && (
        <View style={{backgroundColor: '#000', borderRadius: 12}}>
          <TouchableOpacity
            style={{
              position: 'relative',
              top: -24,
              alignSelf: 'center',
              width: 45,
              height: 14,
              backgroundColor: '#fff',
              borderRadius: 12,
            }}
            onPress={() => setShowNoScreen(false)}></TouchableOpacity>
          <NoScreen />
        </View>
      )}
      {showDetailsScreen && (
        <View
          style={{
            padding: 16,
            backgroundColor: '#000',
            flex: 1,
            height: height,
            width: width,
            position: 'absolute',
            top: 0,
          }}>
          {/* <----------header----------> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <TouchableOpacity onPress={() => setShowDetailsScreen(false)}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    tintColor: '#fff',
                    padding: 12,
                  }}
                  resizeMode="contain"
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png',
                  }}
                />
              </TouchableOpacity>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Event 8625
              </Text>
            </View>
            <Image
              style={{height: 24, width: 24, tintColor: '#fff', padding: 12}}
              resizeMode="contain"
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1358/1358023.png',
              }}
            />
          </View>
          <MatchDetails />
        </View>
      )}
    </View>
  );
};
const HomeComp = ({
  setShowDetailsScreen,
  setShowYesScreen,
  setShowNoScreen,
}: any) => {
  return (
    <View
      style={{
        backgroundColor: '#303030',
        padding: 12,
        marginTop: 20,
        borderRadius: 8,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => setShowDetailsScreen(true)}>
        <View>
          <Text style={{color: '#fff'}}>
            Kolkata to win the match vs Mumbai?
          </Text>

          <Text>H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAOwSBWTNgXrxKFOuVW7DxKs9SvJ_zmZqLA&s',
          }}
          style={{width: 60, height: 60, borderRadius: 8}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0373fc',
            width: '46%',
            borderRadius: 8,
            paddingVertical: 12,
          }}
          onPress={() => setShowYesScreen(true)}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Yes ₹ 5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#5bc276',
            width: '46%',
            borderRadius: 8,
            paddingVertical: 12,
          }}
          onPress={() => setShowNoScreen(true)}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>No ₹ 4.7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
