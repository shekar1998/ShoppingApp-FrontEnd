import {useNavigation} from '@react-navigation/core';
import {Avatar, Box, Text, Circle, Image} from 'native-base';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';

interface Props {
  Card: any;
}

const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {SlecetedCreditCardInputChoosen} from '../../hooks/api/ApiCalls';

let items = [
  require('../../assets/images/Credit-Card2.png'),
  require('../../assets/images/Credit-Card2.png'),
  require('../../assets/images/Black.jpeg'),
];

const AddCard = (props: Props) => {
  const navigation: any = useNavigation();
  let item: any;
  const dispatch = useDispatch();

  function handleSelect(data: any) {
    SlecetedCreditCardInputChoosen(dispatch, data);
    navigation.navigate('MainShipping');
  }
  return (
    <View>
      <ScrollView style={{width: '100%', height: height}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Credit/Debit Card')}>
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
            <Text color={bgcolor.text} mx={2} my={1} fontWeight="700">
              Add a Card
            </Text>
          </View>
        </TouchableOpacity>

        {props.Card.map((data: any) => {
          item = items[Math.floor(Math.random() * items.length)];
          console.log(data);

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSelect(data)}>
              <ImageBackground
                key={Math.random()}
                style={styles.image}
                source={item}>
                <Box
                  flexDirection={'row'}
                  alignSelf={'center'}
                  style={{width: '90%'}}>
                  <Box py={5} w={width - 180}>
                    <Text
                      paddingTop={3}
                      fontFamily="Dongle"
                      fontWeight={200}
                      style={{
                        ...styles.text,
                        fontSize: 25,
                        color: bgcolor.Icon,
                      }}>
                      Name
                    </Text>
                    <Text
                      paddingTop={3}
                      fontFamily="Dongle"
                      fontWeight={400}
                      style={{...styles.text, fontSize: 30}}>
                      {data.paymentName}
                    </Text>
                  </Box>
                  <Box paddingLeft={10} style={{width: '100%'}}>
                    <Image
                    
                      resizeMode={'contain'}
                      source={require('../../assets/images/MasterCard_early_1990s_logo.png')}
                      alt="Alternate Text"
                      size="sm"
                    />
                  </Box>
                </Box>
                <Box
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignSelf={'center'}
                  alignItems={'center'}
                  top={-20}
                  style={{width: '90%'}}>
                  <Text
                    fontSize={30}
                    color={bgcolor.text2}
                    fontFamily="Dongle"
                    fontWeight={200}>
                    * * * * * * * * * * * *
                  </Text>
                  <Text
                    fontSize={30}
                    color={bgcolor.text2}
                    fontFamily="Dongle"
                    fontWeight={200}>
                    {data.pymentCashback.slice(12, 16)}
                  </Text>
                  <Image
                    alignItems={'center'}
                    justifyContent={'center'}
                    alignSelf={'center'}
                    resizeMode={'contain'}
                    source={require('../../assets/images/Chip2.png')}
                    alt="Alternate Text"
                    size="sm"
                  />
                </Box>
                <Box
                  flexDirection={'row'}
                  alignSelf={'center'}
                  style={{width: '90%'}}>
                  <Box w={width - 220}>
                    <Text
                      fontFamily="Dongle"
                      fontWeight={200}
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: bgcolor.Icon,
                      }}>
                      EXP DATE
                    </Text>
                    <Text
                      paddingTop={3}
                      fontFamily="Dongle"
                      fontWeight={400}
                      style={{...styles.text, fontSize: 30}}>
                      {data.Month}/{data.Year}
                    </Text>
                  </Box>
                  <Box w={width - 180}>
                    <Text
                      fontFamily="Dongle"
                      fontWeight={200}
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: bgcolor.Icon,
                      }}>
                      CVV NUMBER
                    </Text>
                    <Text
                      paddingTop={3}
                      fontFamily="Dongle"
                      fontWeight={400}
                      style={{...styles.text, fontSize: 30}}>
                      {data.CVV}
                    </Text>
                  </Box>
                </Box>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  linearGradient: {
    width: width - 40,
    height: 210,
    borderRadius: 25,
    marginTop: 8,
    alignSelf: 'center',
    padding: 20,
  },
  text: {
    fontSize: 23,
    color: bgcolor.text2,
    fontWeight: '300',
  },
  image: {
    width: width - 50,
    height: 230,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 6,
  },
});
