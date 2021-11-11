import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {Badge, Center, Circle, Radio} from 'native-base';
import {SelectedAddress} from '../../hooks/api/ApiCalls';
import {useNavigation} from '@react-navigation/core';
import Icons from 'react-native-vector-icons/MaterialIcons';

interface Props {}

const list = [
  {
    Address1: '#183/1, 3rd Cross, Madhuranagar',
    Address2: 'Nagarbhavi',
    Country: 'India',
    Name: 'ManjuShekar',
    Phone: '8217236803',
    PinCode: '560072',
  },
  {
    Address1: '#183/1, 3rd Cross, Madhuranagar',
    Address2: 'Nagarbhavi',
    Country: 'India',
    Name: 'Manjunath',
    Phone: '8217236803',
    PinCode: '560072',
  },
];

const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const ChoosingAddress = (props: Props) => {
  const selectedValue = useSelector((state: any) => state.Input.Input);
  const [Active, setActive]: any = useState(0);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  function handleClick(item: any) {
    setActive(list.indexOf(item.item));
    SelectedAddress(dispatch, item.item);
    setTimeout(() => {
      navigation.navigate('MainShipping');
    }, 500);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Address')}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            padding: 10,
            borderColor: bgcolor.text,
            borderWidth: 0.6,
            width: width - 55,
            marginRight: 8,
            justifyContent: 'center',
            borderRadius: 7,
            marginVertical: 10,
          }}>
          <Circle
            size={28}
            bg={bgcolor.text2}
            borderColor={bgcolor.text}
            borderWidth={1}>
            <Icon name="plus" color="black" size={18} />
          </Circle>
          <Text
            style={{
              color: bgcolor.text,
              textAlignVertical: 'center',
              marginHorizontal: 10,
              fontWeight: '700',
            }}>
            Add New Address
          </Text>
        </View>
      </TouchableOpacity>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <FlatList
            data={selectedValue}
            key={Date.now()}
            renderItem={(item: any) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleClick(item)}>
                <View
                  style={[
                    styles.AddressContainer,
                    {borderWidth: 1, borderRadius: 10},
                    Active === list.indexOf(item.item)
                      ? styles.ActiveContainer
                      : styles.InActiveContainer,
                  ]}>
                  <View style={styles.topContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="home"
                        size={24}
                        style={{
                          color:
                            Active === list.indexOf(item.item)
                              ? bgcolor.price
                              : bgcolor.text,
                        }}
                      />
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              Active === list.indexOf(item.item)
                                ? bgcolor.price
                                : bgcolor.text,
                          },
                        ]}>
                        Home
                      </Text>
                    </View>
                    <View>
                      <Icon
                        name="checkcircleo"
                        size={24}
                        style={{
                          color:
                            Active === list.indexOf(item.item)
                              ? bgcolor.price
                              : bgcolor.text2,
                        }}
                      />
                    </View>
                  </View>
                  <View style={styles.Address}>
                    <Text style={styles.brand}>{item.item.Name}</Text>
                    <Text style={styles.brand}>+91 {item.item.Phone}</Text>
                  </View>
                  <View style={styles.Address}>
                    <Text style={styles.Addressbrand}>
                      {item.item.Address1} {item.item.Address2}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ChoosingAddress;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: bgcolor.background,
  },
  AddressContainer: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height / 5.5,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  ActiveContainer: {
    borderColor: bgcolor.price,
    backgroundColor: bgcolor.ratings,
  },
  InActiveContainer: {
    borderColor: bgcolor.text,
  },
  topContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  NonIcon: {
    color: bgcolor.text,
  },
  selectedIcon: {
    color: bgcolor.price,
  },
  text: {
    color: bgcolor.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '800',
  },
  Address: {
    marginVertical: 3,
  },
  brand: {
    color: bgcolor.text,
    fontSize: 15,
    fontWeight: '600',
  },
  Addressbrand: {
    color: bgcolor.Icon,
    fontSize: 14,
    fontWeight: '800',
  },
});
