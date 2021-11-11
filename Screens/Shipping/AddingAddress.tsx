import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import VirtualizedView from '../VirtuaFlatList/Virtual';
import Address from './Address';
import ChoosingAddress from './ChoosingAddress';

interface Props {}

const AddingAddress = (props: Props) => {
  const selectedValue = useSelector((state: any) => state.Input.Input);

  return (
    <View style={styles.container}>
      <VirtualizedView>
        {selectedValue.length > 0 ? (
          <View style={styles.Chooseaddress}>
            <ChoosingAddress />
          </View>
        ) : (
          <Address />
        )}
      </VirtualizedView>
    </View>
  );
};

export default AddingAddress;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  Chooseaddress: {
    width: '100%',
    height: '100%',
  },
});
