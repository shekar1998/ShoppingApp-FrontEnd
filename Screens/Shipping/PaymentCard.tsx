import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

interface Props {}

const PaymentCard = (props: Props) => {
  const selectedValue = useSelector((state: any) => state.Choice.Choice);

  return (
    <View style={{flex:1}}>
    <Text style={{color:'#000'}}>{selectedValue}</Text>
    </View>
  )
};

export default PaymentCard;

const styles = StyleSheet.create({});
