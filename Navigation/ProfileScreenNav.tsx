import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import color from '../color/color';
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import UserProfile from '../Screens/User/UserProfile';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const bgcolor = color.light;
function ProfileScreenNav() {
  const [Check, setCheck]: any = useState('Login');
  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);

  useEffect(() => {
    if (LoggedInInfo.isAuthenticated === true) {
      console.log('UserAuthenticated');
      setCheck('UserProfile');
      console.log('LoggedInInfo => ', Check);
    }
  }, [LoggedInInfo.isAuthenticated]);
  return (
    <Stack.Navigator>
      {!LoggedInInfo.isAuthenticated ? (
        <>
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{
              headerShown: false,
            }}
            component={Register}
          />
        </>
      ) : (
        <Stack.Screen
          name="UserProfile"
          options={{
            headerTintColor: bgcolor.text,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: () => (
              <MaterialIcons name="arrow-back-ios" size={25} color={'#000'} />
            ),
          }}
          component={UserProfile}
        />
      )}
    </Stack.Navigator>
  );
}

export default ProfileScreenNav;
