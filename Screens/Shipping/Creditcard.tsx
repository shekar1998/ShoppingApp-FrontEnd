import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../color/color';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const Creditcard = (props: Props) => {
  return (
      <LinearGradient
        colors={['#CE9FFC', '#7367F0']}
        start={{x: 0.7, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam commodi iusto ad minus non libero, et praesentium dolor nesciunt voluptatem.</Text>
      </LinearGradient>
  );
};

export default Creditcard;

const styles = StyleSheet.create({
  linearGradient: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 8,
  },
  text:{
      fontSize:30,
      color:bgcolor.text
  }
});
