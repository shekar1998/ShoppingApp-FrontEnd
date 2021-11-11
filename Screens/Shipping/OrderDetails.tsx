import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

interface Props {}

const bgcolor = color.light;

const OrderDetails = (props: Props) => {
  const navigation: any = useNavigation();
  const selectedValue = useSelector((state: any) => state.Item.Item);
  let initialPrice: any = 0;
  let Total: any = 50;

  selectedValue.map((data: any) => {
    initialPrice = data.price + initialPrice;
  });

  selectedValue.map((data: any) => {
    Total = data.price + data.price * 0.029 + Total;
  });
  let tax = initialPrice * 0.029;

  return (
    <View style={{marginTop: 10, justifyContent: 'space-between'}}>
      <Text style={{...styles.Pricetext, fontSize: 21, fontWeight: '700'}}>
        Order Details
      </Text>
      <View style={{...styles.PriceContainer, marginTop: 15, marginBottom: 5}}>
        <Text style={{...styles.orderPrice, fontSize: 14}}>Subtotal </Text>
        <Text
          style={{
            ...styles.Pricetext,
            fontSize: 14,
            fontWeight: '700',
            color: bgcolor.price3,
          }}>
          &#8377;{initialPrice.toFixed(2)}
        </Text>
      </View>
      <View style={{...styles.PriceContainer}}>
        <Text style={{...styles.orderPrice, fontSize: 14}}>Shipping Cose </Text>
        <Text
          style={{
            ...styles.Pricetext,
            fontSize: 14,
            fontWeight: '700',
            color: bgcolor.price3,
          }}>
          &#8377;50
        </Text>
      </View>
      <View style={{...styles.PriceContainer, marginTop: 6, marginBottom: 5}}>
        <Text style={{...styles.orderPrice, fontSize: 14}}>Tax </Text>
        <Text
          style={{
            ...styles.Pricetext,
            fontSize: 14,
            fontWeight: '500',
            color: bgcolor.price3,
          }}>
          {'(+2.9%) '}
          &#8377;{tax.toFixed(2)}
        </Text>
      </View>
      <View style={{...styles.PriceContainer, marginVertical: 20}}>
        <Text
          style={{
            ...styles.orderPrice,
            fontSize: 19,
            color: bgcolor.text,
            fontWeight: '600',
          }}>
          Total
        </Text>
        <Text style={{...styles.Pricetext, fontSize: 18, fontWeight: '700'}}>
          &#8377;{Total.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.95}>
        <View style={styles.quantitiyContainer}>
          <Text style={styles.text}>Checkout</Text>
          <Icon
            style={styles.Icon}
            name="check-circle"
            color={bgcolor.available}
            size={35}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  Pricetext: {
    color: bgcolor.text,
    fontWeight: '600',
    fontSize: 14,
    textAlignVertical: 'center',
    marginHorizontal: 30,
  },
  orderPrice: {
    color: bgcolor.Icon,
    fontSize: 14,
    textAlignVertical: 'center',
    fontWeight: '400',
    marginHorizontal: 30,
  },
  PriceContainer: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  Icon: {
    marginHorizontal: 10,
    textAlignVertical: 'center',
    marginVertical: 4,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 20,
    textAlign: 'center',
  },
  text: {
    color: bgcolor.text2,
    fontSize: 22,
    textAlignVertical: 'center',
  },
  quantitiyContainer: {
    backgroundColor: bgcolor.text,
    width: Dimensions.get('window').width - 70,
    height: 60,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
