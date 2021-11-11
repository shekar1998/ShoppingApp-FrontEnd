import {useNavigation} from '@react-navigation/core';
import {
  Center,
  Radio,
  HStack,
  Box,
  Heading,
  Divider,
  Flex,
  Avatar,
} from 'native-base';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import color from '../../color/color';
import {SlecetedChoice, SlecetedCreditCardInput, SlecetedCreditCardInputChoosen} from '../../hooks/api/ApiCalls';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {}

const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const data: any = [
  {
    id: 1,
    paymentType: 'Amazon Pay',
    paymentImage: require('../../assets/images/AmazonPay.png'),
    paymentName: 'Amazon Pay',
    pymentCashback: '25% cashback upto RS 100. no min order',
    IconName:'cc-amazon-pay'
  },
  {
    id: 2,
    paymentType: 'Credit and Debit cards',
    paymentImage: require('../../assets/images/credit-card.png'),
    paymentName: 'Choose your card',
    pymentCashback: '25% cashback upto RS 100. no min order',
    
  },
  {
    id: 3,
    paymentType: 'Google Pay',
    paymentImage: require('../../assets/images/google-pay.jpg'),
    paymentName: 'Google Pay',
    pymentCashback: 'Upto 100 cashback, Order above 299',
    IconName:'google'
  },
  {
    id: 4,
    paymentType: 'Wallet',
    paymentImage: require('../../assets/images/paytm2.jpg'),
    paymentName: 'Paytm',
    pymentCashback: 'Upto 100 cashback, Order above 99',
    IconName:'google-wallet'
  },
  {
    id: 5,
    paymentType: 'Cash on Delivery',
    paymentImage: require('../../assets/images/cashondelivery.png'),
    paymentName: 'Cash on Delivery',
    pymentCashback: 'Pay cash to partner upon delivery time.',
    IconName:'money-bill-wave-alt'
  },
];

const PaymentMethods = (props: Props) => {
  const navigation: any = useNavigation();
  const [Value, setValue] = useState();
  const [Active, setActive] = useState(-1);
  const dispatch = useDispatch();

  async function handleSubmit(value: any) {
    setActive(data.indexOf(value));
    SlecetedChoice(dispatch, value);
    if(value.paymentType === 'Credit and Debit cards')
    {
      navigation.navigate('card')
      return
    }else{
      await SlecetedCreditCardInputChoosen(dispatch, value);
      navigation.navigate('MainShipping');
    }
  }

  return (
    <Center>
      {data.map((value: any) => {
        return (
          <Center key={value.id}>
            <View style={styles.box}>
              <Text style={styles.text}>{value.paymentType}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleSubmit(value)}>
              <Box
                borderColor={
                  Active === data.indexOf(value) ? bgcolor.price : bgcolor.text2
                }
                borderWidth={0.3}
                backgroundColor={
                  Active === data.indexOf(value)
                    ? bgcolor.ratings
                    : bgcolor.text2
                }
                justifyContent={'space-between'}
                flexDirection="row"
                paddingX={3}
                paddingY={3}
                w={width}>
                <Avatar
                  style={{width: 30, height: 30}}
                  bg="indigo.500"
                  source={value.paymentImage}>
                  RS
                </Avatar>
                <Box paddingY={0.5} w={width - 100}>
                  <Text
                    style={{...styles.text, fontWeight: '400', fontSize: 16}}>
                    {value.paymentName}
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      color: bgcolor.paymentColor,
                      fontWeight: '400',
                    }}>
                    {value.pymentCashback}
                  </Text>
                </Box>
                <Box w={width}>
                  <Icon
                    name="checkcircleo"
                    size={28}
                    style={{
                      color:
                        Active === data.indexOf(value)
                          ? bgcolor.price
                          : bgcolor.text2,
                      textAlignVertical: 'center',
                      marginVertical:10
                    }}
                  />
                </Box>
              </Box>
            </TouchableOpacity>
          </Center>
        );
      })}
    </Center>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  radio: {
    width: width / 1.4,
    height: 60,
    borderColor: bgcolor.text2,
  },
  text: {
    color: bgcolor.text,
    fontWeight: '600',
    marginHorizontal: 13,
    fontSize: 12.5,
    textAlignVertical: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  box: {
    width: width,
    backgroundColor: bgcolor.paymentBox,
    height: 40,
    justifyContent: 'center',
  },
});
