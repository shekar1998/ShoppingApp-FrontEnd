import * as React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import color from '../color/color';
import Homescreen from '../Screens/Home/Homescreen';
import SingleProduct from '../Screens/Product/SingleProduct';
import ProductList from '../Screens/Product/ProductList';

const Stack = createNativeStackNavigator();

const bgcolor = color.light;
function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homescreen"
        options={{
          headerStyle: { backgroundColor: bgcolor.background },
          headerTintColor: bgcolor.background,
          headerShadowVisible:false,
          headerRight: () => (
            <Image
              style={{width: 37, height: 37, borderRadius: 50, margin: 10}}
              source={require('../assets/images/spiderman.jpg')}
            />
          ),
          headerLeft: () => (
            <Icon
              style={{margin: 10}}
              name="grid"
              size={24}
              color={bgcolor.text}
            />
          ),
        }}
        component={Homescreen}
      />
      <Stack.Screen
        name="SingleProduct"
        options={{
          headerShown: false,
        }}
        component={SingleProduct}
      />
       
    </Stack.Navigator>
  );
}

export default RootNavigation;
