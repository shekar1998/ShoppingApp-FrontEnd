import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../Screens/User/UserProfile';
import User from '../Screens/User/Register';
import * as React from 'react';
import AdminProducts from '../Screens/Admin/AdminProducts';
import AdminUsersDetails from '../Screens/Admin/AdminUsersDetails';
import color from '../color/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AdminCatogery from '../Screens/Admin/AdminCatogery';

const Drawer = createDrawerNavigator();
const bgcolor = color.light;

export default function SideNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerTintColor: bgcolor.text,
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="home" size={25} color={bgcolor.Icon} />
          ),
        }}
        component={AdminProducts}
      />
      <Drawer.Screen
        name="Users"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerTintColor: bgcolor.text,
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="person" size={25} color={bgcolor.Icon} />
          ),
        }}
        component={AdminUsersDetails}
      />
      <Drawer.Screen
        name="Catogery"
        options={{
          headerStyle: {backgroundColor: bgcolor.background},
          headerTintColor: bgcolor.text,
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="category" size={25} color={bgcolor.Icon} />
          ),
        }}
        component={AdminCatogery}
      />
    </Drawer.Navigator>
  );
}
