import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../color/color';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { SetSelectedItem } from '../../hooks/api/ApiCalls';
import { useDispatch } from 'react-redux';

interface Props {
  item: any;
}

const bgcolor = color.light;

const ProductCard = (props: Props) => {
  const {name, description, rating, price, brand}: any = props.item;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.Infocontainer}>
        <View>
          <Text style={styles.text}>
            {name.length <= 15 ? name : name.substring(0, 12) + '..'}
          </Text>
          <Text style={styles.description}>
            {description.length <= 15
              ? description
              : description.substring(0, 15) + '..'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => SetSelectedItem(dispatch, props.item)}>
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
            start={{x: 0.7, y: 0}}
            style={styles.linearGradient}>
            <Text style={styles.button}>+</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>&#8377; {price}</Text>
        <View style={styles.ratings}>
          <Icon style={styles.staro} name="staro" color="coral" size={13} />
          <Text style={styles.ratingtext}> {rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 26.5,
    height: Dimensions.get('window').height / 4 - 120,
  },
  Infocontainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    fontSize: 19,
    fontWeight: '400',
    color: bgcolor.text2,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  linearGradient: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: bgcolor.price,
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  ratings: {
    width: 40,
    height: 18,
    color: bgcolor.price,
    backgroundColor: bgcolor.ratings,
    borderColor: bgcolor.price,
    borderWidth: 0.1,
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  ratingtext: {
    fontSize: 11,
    color: bgcolor.price,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: bgcolor.text,
  },
  description: {
    fontSize: 12,
    color: bgcolor.tabIconDefault,
  },
  staro: {},
});
