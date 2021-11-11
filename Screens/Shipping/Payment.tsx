import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

interface Props {}
const { width, height} = Dimensions.get('window');


const Payment = (props: Props) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={{color: '#000'}}></Text>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  MainContainer:{
    backgroundColor:'#fff',
    width:width,
    height:height
  }
});