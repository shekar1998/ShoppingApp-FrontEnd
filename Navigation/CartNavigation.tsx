import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../color/color';
import CartProducts from '../Screens/Cart/CartProducts';
import MainShipping from '../Screens/Shipping/MainShipping';
import AddressPage from '../Screens/Shipping/AddressPage';
import Address from '../Screens/Shipping/Address';
import PaymentPage from '../Screens/Shipping/PaymentPage';
import card from '../Screens/Shipping/card';
import CardDetails from '../Screens/Shipping/CardDetails';

const Stack = createNativeStackNavigator();

const bgcolor = color.light;
function CartNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCart"
        options={{
          headerLeft: () => (
            <Icon
              style={{margin: 10}}
              name="keyboard-arrow-left"
              size={35}
              color={bgcolor.text}
            />
          ),
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        component={CartProducts}
      />

      <Stack.Screen
        name="MainShipping"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerShadowVisible: false,
          headerTintColor: bgcolor.background,
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={MainShipping}
      />

      <Stack.Screen
        name="AddressPage"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerShadowVisible: false,
          headerTintColor: bgcolor.background,
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={AddressPage}
      />

      <Stack.Screen
        name="Address"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerShadowVisible: false,
          headerTintColor: bgcolor.background,
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={Address}
      />

      <Stack.Screen
        name="PaymentPage"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerShadowVisible: false,
          headerTintColor: bgcolor.background,
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={PaymentPage}
      />

      <Stack.Screen
        name="card"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerShadowVisible: false,
          headerTintColor: bgcolor.background,
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={card}
      />

      <Stack.Screen
        name="Credit/Debit Card"
        options={{
          headerTitleAlign: 'center',
          headerRight: () => (
            <MaterialCommunityIcons
              name="truck-fast-outline"
              size={28}
              color={'#000'}
            />
          ),
          headerLeft: () => (
            <Icon name="arrow-back-ios" size={25} color={'#000'} />
          ),
        }}
        component={CardDetails}
      />
    </Stack.Navigator>
  );
}

export default CartNavigation;
