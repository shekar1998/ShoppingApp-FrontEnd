import {Box, Text} from 'native-base';
import * as React from 'react';
import {View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import color from '../../color/color';
import VirtualizedView from '../VirtuaFlatList/Virtual';
import AdminSlider from './AdminSlider';
import NormalChart from './NormalChart';

const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

export default function AdminProducts() {
  return (
    <View style={styles.mainContaienr}>
      <View style={styles.Slider}>
        <AdminSlider />
      </View>
      <ScrollView>
        <View style={styles.Chart}>
          <NormalChart />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContaienr: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: bgcolor.background,
  },
  Slider: {
    width: width,
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
  },
  Chart:{
    width:width,
    height:height,
    marginBottom:50
  }
});
