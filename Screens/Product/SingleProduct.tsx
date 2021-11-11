import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import color from '../../color/color';
import ProductimageSlider from './ProductImageSlider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import ProductDetails from './ProductDetails';
import ProductCart from './ProductCart';

interface Props {}
const bgcolor = color.light;

const SingleProduct = (props: any) => {
  const route: any = useRoute();
    
  return (
    <View key={Date.now()} style={styles.container}>
      <View style={styles.Imagecontainer}>
        <View style={styles.topheader}>
          <Icon name="arrow-back-ios" size={25} color={'#000'} />
          <Icon2 name="dots-three-vertical" size={23} color={'#000'} />
        </View>
        <ProductimageSlider image={route.params.item.item.image} />
      </View>
      <ProductDetails item={route.params.item.item} />
      <ProductCart />
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolor.text2,
  },
  Imagecontainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.65,
    backgroundColor: bgcolor.boxColor,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  Icon: {
    width: 50,
    height: 50,
    backgroundColor: bgcolor.text2,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: {
      width: -1,
      height: -10,
    },
    fontSize: 20,
    fontWeight: '700',
  },
});
