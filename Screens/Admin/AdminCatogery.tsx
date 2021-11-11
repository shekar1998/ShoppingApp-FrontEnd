import {Box} from 'native-base';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdminCategoryList from './AdminCategoryList';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const AdminCatogery = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <Box
          w={'100%'}
          h={'100%'}
          alignItems={'center'}
          borderRadius={10}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          bg={{
            linearGradient: {
              colors: ['lightBlue.600', 'lightBlue.400', 'lightBlue.500'],
              start: [0, 0],
              end: [2, 0],
            },
          }}
          px={10}
          rounded="lg"
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'black',
          }}>
          <Box w={'50%'} h={'100%'} py={5} justifyContent={'center'}>
            <Text style={{...styles.text, fontSize: 10}}>POPULAR CATOGERY</Text>
            <Text style={{...styles.text, fontSize: 25}}>Electronics</Text>
          </Box>
          <Image
            style={styles.Image}
            source={{
              uri: 'https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png',
            }}
          />
        </Box>
      </View>
      <Box
        justifyContent={'space-between'}
        alignItems={'center'}
        w="92%"
        my={6}
        flexDirection={'row'}>
        <Text style={styles.Text}>CATEGORY LIST</Text>
        <Icon name="category" size={30} color={bgcolor.text} />
      </Box>
      <AdminCategoryList />
    </View>
  );
};

export default AdminCatogery;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: bgcolor.background,
    alignItems: 'center',
  },
  Box: {
    elevation: 2,
    width: width - 30,
    height: height / 8,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 30,
  },
  Image: {
    width: '45%',
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    color: bgcolor.text2,
    fontWeight: '600',
    marginBottom: 5,
  },
  Text: {
    color: bgcolor.text,
    fontWeight: '600',
    fontSize: 22,
    paddingHorizontal: 5,
  },
});
