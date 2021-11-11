import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {blueGrey900} from 'react-native-paper/lib/typescript/styles/colors';
import {useSelector} from 'react-redux';
import color from '../../color/color';
import AddressContainer from './AddressContainer';
import OrderDetails from './OrderDetails';
import ShippingProducts from './ShippingProducts';

interface Props {}
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const ShippingList = (props: Props) => {
  const [Active, setActive]: any = useState(0);
  const selectedValue = useSelector((state: any) => state.CardInputChoosen.CardInputChoosen);
  const AddressValue = useSelector((state: any) => state.Address.Address);


  return (
    <View style={styles.MainContainer}>
      <ShippingProducts />
      <AddressContainer
        data={AddressValue}
        Value="Address"
        Icon={'map-marked-alt'}
      />
       <AddressContainer
        data={selectedValue}
        Value="Payment Method"
        Icon={'map-marked-alt'}
      />
        <OrderDetails />
       
    </View>
  );
};

export default ShippingList;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: bgcolor.background,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  locationContainer: {
    width: '100%',
    height: '20%',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: bgcolor.text,
  },
  active: {
    backgroundColor: bgcolor.text,
  },
  inactive: {
    backgroundColor: bgcolor.boxColor,
  },
  textActive: {
    color: bgcolor.text2,
  },
  textinactive: {
    color: bgcolor.text,
  },
  Categorytext: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CategorytextContainer: {
    margin: 10,
    padding: 3,
    width: 100,
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
});
