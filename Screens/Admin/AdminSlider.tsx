import {Box, Text} from 'native-base';
import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../color/color';
const {width} = Dimensions.get('window');

interface Props {}
const bgcolor = color.light;
export default function Slider(props: Props) {
  return (
    <View style={styles.container}>
      <Swiper height={300} horizontal={true}>
      <Box
          w={'100%'}
          justifyContent={'space-between'}
          h={'60%'}
          flexDirection={'row'}
          alignContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}>
          <Box w={'49%'} h={'95%'} justifyContent={'center'}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://www.freepnglogos.com/uploads/macbook-png/apple-macbook-pro-quot-mid-21.png',
              }}
            />
          </Box>
          <Box w={'49%'} h={'95%'}>
            <Text
              justifyContent="center"
              fontFamily={'Dongle'}
              fontWeight={'400'}
              color={bgcolor.Icon}
              textAlign={'center'}
              fontSize={26}>
              Most Viewed Product
            </Text>
            <Box
              w={'100%'}
              h={'23%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              alignSelf={'center'}
              flexDirection={'row'}>
              <MaterialCommunityIcons
                name="bullseye-arrow"
                size={22}
                color={bgcolor.Icon}
              />
              <Text fontWeight={'700'} px={3} color={'grey'} fontSize={16}>
                10,574
              </Text>
            </Box>
            <Box
              w={'100%'}
              h={'35%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'row'}>
              <Image
                style={styles.Iconimage}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/4721/4721635.png',
                }}
              />
              <Text
                textAlign={'center'}
                justifyContent="center"
                fontFamily={'Dongle'}
                fontWeight={'400'}
                color={'green.500'}
                marginX={3}
                fontSize={27}>
                84.54%
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          w={'100%'}
          justifyContent={'space-between'}
          h={'60%'}
          flexDirection={'row'}
          alignContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}>
          <Box w={'49%'} h={'95%'} justifyContent={'center'}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG9.png',
              }}
            />
          </Box>
          <Box w={'49%'} h={'95%'}>
            <Text
              justifyContent="center"
              fontFamily={'Dongle'}
              fontWeight={'400'}
              color={bgcolor.Icon}
              textAlign={'center'}
              fontSize={26}>
              Best Selling Product
            </Text>
            <Box
              w={'100%'}
              h={'23%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              alignSelf={'center'}
              flexDirection={'row'}>
              <MaterialCommunityIcons
                name="bullseye-arrow"
                size={22}
                color={bgcolor.Icon}
              />
              <Text fontWeight={'700'} px={3} color={'grey'} fontSize={16}>
                10,574
              </Text>
            </Box>
            <Box
              w={'100%'}
              h={'35%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'row'}>
              <Image
                style={styles.Iconimage}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/4721/4721635.png',
                }}
              />
              <Text
                textAlign={'center'}
                justifyContent="center"
                fontFamily={'Dongle'}
                fontWeight={'400'}
                color={'green.500'}
                marginX={3}
                fontSize={27}>
                84.54%
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          w={'100%'}
          justifyContent={'space-between'}
          h={'60%'}
          flexDirection={'row'}
          alignContent={'center'}
          alignItems={'center'}
          alignSelf={'center'}>
          <Box w={'49%'} h={'100%'} justifyContent={'center'}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://www.pngmart.com/files/13/Airpods-PNG-Background-Image.png',
              }}
            />
          </Box>
          <Box w={'49%'} h={'95%'}>
            <Text
              justifyContent="center"
              fontFamily={'Dongle'}
              fontWeight={'400'}
              textAlign={'center'}
              fontSize={26}>
              Best Selling Product
            </Text>
            <Box
              w={'100%'}
              h={'23%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              alignSelf={'center'}
              flexDirection={'row'}>
              <MaterialCommunityIcons
                name="bullseye-arrow"
                size={22}
                color={bgcolor.Icon}
              />
              <Text fontWeight={'700'} px={3} color={'grey'} fontSize={16}>
                10,574
              </Text>
            </Box>
            <Box
              w={'100%'}
              h={'35%'}
              my={0.25}
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'row'}>
              <Image
                style={styles.Iconimage}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/4721/4721635.png',
                }}
              />
              <Text
                textAlign={'center'}
                justifyContent="center"
                fontFamily={'Dongle'}
                fontWeight={'400'}
                color={'green.500'}
                marginX={3}
                fontSize={27}>
                84.54%
              </Text>
            </Box>
          </Box>
        </Box>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  slide: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'MochiyPopOne',
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    width: 220,
    height: 270,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Iconimage: {
    width: 24,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
