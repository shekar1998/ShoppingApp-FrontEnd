import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';

interface Props {
  Value: any;
  Icon: any;
  data: any;
}
const bgcolor = color.light;

export default function AddressContainer(props: Props) {
  const navigation: any = useNavigation();
  const [Data, setData] = useState();


  useEffect(() => {
    if (typeof props.data !== undefined) {
      setData(props.data);
    }
  }, []);

  return (
    <View style={styles.locationContainer}>
      <Text style={styles.text}>Deliviry Location</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          props.Value === 'Address'
            ? navigation.navigate('AddressPage')
            : navigation.navigate('PaymentPage')
        }>
        <View style={styles.ProductBox}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              {props.Value === 'Address' ? (
                <MaterialCommunityIcons
                  style={styles.Icon}
                  name={props.Icon}
                  size={28}
                  color={bgcolor.price2}
                />
              ) : (
                <MaterialIcons
                  style={styles.Icon}
                  name={(typeof props.data.IconName === undefined || !props.data.IconName)? 'money-check' : props.data.IconName}
                  size={28}
                  color={bgcolor.price2}
                />
              )}
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>
                {typeof props.data !== undefined
                  ? props.Value === 'Address'
                    ? typeof props.data.Address1 === undefined || !props.data.Address1 ? 'Choose your address' : props.data.Address1
                    :typeof  props.data.paymentName === undefined || !props.data.paymentName ? 'Payment Method' : props.data.paymentName
                  : props.Value}
              </Text>
              <Text style={styles.brand}>
                {typeof props.data !== undefined
                  ? props.Value === 'Address'
                    ? props.data.Name
                    : typeof props.data.pymentCashback === undefined || !props.data.pymentCashback  ? 'Choose the Payment Method'
                        : props.data.pymentCashback === undefined  || !props.data ? 'Choose Card' : '' +  props.data.pymentCashback
                  : props.Value}
              </Text>
            </View>
            <View style={styles.productIcon}>
              <MaterialIcons
                style={styles.Icon}
                name="chevron-right"
                size={20}
                color={bgcolor.text}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  locationContainer: {
    width: '100%',
    height: '15%',
    marginTop: 10,
  },
  ProductBox: {
    justifyContent: 'space-between',
  },
  container: {
    width: Dimensions.get('window').width - 30,
    height: 80,
    alignSelf: 'center',
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainer: {
    width: 65,
    height: 65,
    backgroundColor: bgcolor.boxColor,
    borderRadius: 12,
    alignSelf: 'center',
    marginHorizontal: 10,
    padding: 10,
    justifyContent: 'center',
  },
  detailsContainer: {
    width: '100%',
    height: '100%',
    flex: 2.8,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: bgcolor.text,
    fontSize: 20,
    textAlignVertical: 'center',
    marginHorizontal: 25,
    marginVertical: 10,
    fontWeight: '700',
  },
  Icon: {
    borderRadius: 20,
    padding: 2,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    color: bgcolor.text,
    fontSize: 15,
    textAlignVertical: 'center',
    fontWeight: '800',
  },
  brand: {
    color: bgcolor.Icon,
    fontSize: 14,
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  price: {
    color: bgcolor.text,
    fontSize: 16,
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  productIcon: {
    justifyContent: 'center',
    padding: 5,
  },
  quantity: {
    fontSize: 14,
    color: bgcolor.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
