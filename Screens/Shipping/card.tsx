import {useNavigation} from '@react-navigation/native';
import {Circle} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import color from '../../color/color';
import AddCard from './AddCard';
import Creditcard from './CreditCArd';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const card = (props: Props) => {
  const state :any= useSelector((state: any) => state.CardInput.CardInput);
  
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '2%'}}>
        <AddCard Card={state} />
      </View>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolor.background,
    width: width,
    height: height,
  },
});
