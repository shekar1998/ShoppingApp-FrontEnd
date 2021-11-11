import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import color from '../color/color';
import Settings from '../Screens/User/UserProfile';
import SideNavigation from './SideNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';

const Stack = createNativeStackNavigator();

const bgcolor = color.light;
function AdminPanel() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        options={({navigation, route}: any) => ({
          headerShown:false,
       
          tabBarVisible:
          getFocusedRouteNameFromRoute(route) === 'Admin'
            ? false
            : true,
      })}
        component={SideNavigation}
      />
    </Stack.Navigator>
  );
}

export default AdminPanel;
