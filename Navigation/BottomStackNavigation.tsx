import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../color/color';
import CartNavigation from './CartNavigation';
import RootNavigation from './RootNavigation';
import {View} from 'react-native';
import Badge from '../Screens/Shipping/Badge';
import ProfileScreenNav from './ProfileScreenNav';
import {useSelector} from 'react-redux';
import AdminPanel from './AdminPanel';

const Tab = createBottomTabNavigator();
const bgcolor = color.light;
export default function BottomStackNavigation() {
  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);
  console.log('Bottom App Nav', LoggedInInfo);

  return (
    <Tab.Navigator
      initialRouteName="RootNavigation"
      tabBarOptions={{
        activeTintColor: bgcolor.tabIconDefault,
        inactiveColor: bgcolor.Icon,
      }}>
      <Tab.Screen
        name="RootNavigation"
        component={RootNavigation}
        options={({navigation, route}: any) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color}: any) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarVisible:
            getFocusedRouteNameFromRoute(route) === 'SingleProduct'
              ? false
              : true,
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={({navigation, route}: any) => ({
          tabBarLabel: 'cart',
          tabBarIcon: ({color}: any) => (
            <View style={{flexDirection: 'row', width: 25}}>
              <MaterialIcons name="shopping-cart" color={color} size={26} />
              <Badge />
            </View>
          ),
          tabBarVisible:
            getFocusedRouteNameFromRoute(route) === 'MainShipping' ||
            'AddressPage'
              ? false
              : true,
        })}
      />
      {LoggedInInfo.isAuthenticated ? (
        LoggedInInfo.userProfile.user.isAdmin ? (
          <Tab.Screen
            name="Admin"
            component={AdminPanel}
            options={({navigation, route}: any) => ({
              tabBarLabel: 'Admin',
              tabBarIcon: ({color}: any) => (
                <MaterialIcons name="settings" color={color} size={26} />
              ),  tabBarVisible:
              getFocusedRouteNameFromRoute(route) === 'Setting'
                ? false
                : true,
          })}
            />
        ) : null
      ) : null}

      <Tab.Screen
        name="ProfileScreenNav"
        component={ProfileScreenNav}
        options={({navigation, route}: any) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}: any) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarVisible:
            getFocusedRouteNameFromRoute(route) === 'Register' || 'Login'
              ? false
              : true,
        })}
      />
    </Tab.Navigator>
  );
}
