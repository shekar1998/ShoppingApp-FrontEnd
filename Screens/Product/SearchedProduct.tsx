import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import color from '../../color/color';
import VirtualizedView from '../VirtuaFlatList/Virtual';

interface Props {
  result: any;
}
const list = [
  {
    _id: '5f15d8852a025143f9593a7c',

    image:
      'https://www.pngmart.com/files/4/CPU-Cabinet-PNG-Transparent-Image.png',
    brand: 'PS3',
    price: 250,
    rating: 1,
    numReviews: 0,
    isFeatured: true,
    name: 'FIFA 20',
    description: 'The most hard FIFA ever',
    category: {
      $oid: '5f15d5cdcb4a6642bddc0fe9',
    },
    countInStock: 25,
    __v: 0,
  },
  {
    _id: '5f15d92ee520d44421ed8e9b',

    image:
      'https://cdn.vox-cdn.com/thumbor/4lNv5FwiPV-zkvMjh-03V_ZiOuI=/0x0:1600x1304/1200x800/filters:focal(647x358:903x614)/cdn.vox-cdn.com/uploads/chorus_image/image/66970334/dg7700nt_cnb_05000ff090_bk.0.png',
    brand: 'IKEA',
    price: 350.9,
    rating: 5,
    numReviews: 0,
    isFeatured: true,
    name: 'Garden Chair',
    description: 'beautiful chair for garden',
    category: {
      $oid: '5f15d5b7cb4a6642bddc0fe8',
    },
    countInStock: 10,
    __v: 0,
  },
];

const bgcolor = color.light;

const SearchedProduct = (props: Props) => {
  return (
    <VirtualizedView>
      <View style={styles.mainContainer}>
        {props.result.length > 0 ? null : (
          <Text
            style={{
              ...styles.text,
              fontSize: 18,
              fontWeight: '700',
              margin: 20,
            }}>
            Featured Products
          </Text>
        )}
        {props.result.length > 0
          ? props.result.map((data: any) => {
              return (
                <View key={data._id + Date.now()} style={styles.container}>
                  <View style={styles.detailContainer}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </View>
                    <View style={styles.info}>
                      <View style={styles.details}>
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 20,
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 15,
                            color: bgcolor.Icon,
                            paddingBottom: 5,
                          }}>
                          {data.description.length <= 15
                            ? data.description
                            : data.description.substring(0, 32) + '..'}
                        </Text>
                        <Text style={styles.price}>&#8377; {data.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })
          : list.map((data: any) => {
              return (
                <View key={data._id} style={styles.container}>
                  <View style={styles.detailContainer}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </View>
                    <View style={styles.info}>
                      <View style={styles.details}>
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: 20,
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{
                            ...styles.text,
                            fontSize: 15,
                            color: bgcolor.Icon,
                            paddingBottom: 5,
                          }}>
                          {data.description}
                        </Text>
                        <Text style={styles.price}>&#8377; {data.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
      </View>
    </VirtualizedView>
  );
};

export default SearchedProduct;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height / 5 - 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 10,
    backgroundColor: bgcolor.boxColor,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    color: '#000',
    marginVertical: 5,
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: bgcolor.text2,
    justifyContent: 'flex-start',
  },
  detailContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  details: {
    padding: 5,
    justifyContent: 'space-evenly',
  },
  mainContainer: {
    backgroundColor: bgcolor.text2,
    height: Dimensions.get('window').height,
  },
  ratings: {
    width: 45,
    height: 19,
    color: bgcolor.price,
    backgroundColor: bgcolor.ratings,
    borderColor: bgcolor.price,
    borderWidth: 0.1,
    borderRadius: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    marginBottom: 20,
  },
  ratingtext: {
    fontSize: 14,
    color: bgcolor.price,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: bgcolor.price,
    marginBottom: 20,
  },
  info: {
    justifyContent: 'space-evenly',

    flexDirection: 'row',
  },
  ratingsContainers: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
});
