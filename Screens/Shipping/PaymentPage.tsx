import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import color from '../../color/color';
import PaymentMethods from './PaymentMethods';
import PaymentNavigation from './Payment';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

export default function PaymentPage(props: Props) {
  let selectedValue: any;
  selectedValue = useSelector((state: any) => state.Choice.Choice);

  return (
    <View style={styles.container}>
      <PaymentMethods />
      <PaymentNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolor.background,
    width: width,
    height: height,
  },
});
