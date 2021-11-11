import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import color from '../../color/color';
import AddingAddress from './AddingAddress';

interface Props {}

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const AddressPage = (props: Props) => {
  return (
    <View style={styles.MainContainer}>
        <AddingAddress />
    </View>
  );
};

export default AddressPage;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
 
});
