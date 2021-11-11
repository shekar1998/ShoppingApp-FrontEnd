import {Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import { Roboto_All, enableFontFaces, getExpoFontMap } from 'react-native-font-faces';

interface Props {}

const {width, height} = Dimensions.get('window');

const Status = (props: Props) => {
  return (
    <View style={styles.MainContainer}>
      <Text fontFamily="Dongle" fontWeight={600} fontSize={50}>Working</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
});
