/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect, useState} from 'react';
 import {LogBox, SafeAreaView, StyleSheet} from 'react-native';
 import 'react-native-gesture-handler';
 import RootNavigation from './Navigation/RootNavigation';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 import color from './color/color';
 import BottomStackNavigation from './Navigation/BottomStackNavigation';
 import {NavigationContainer} from '@react-navigation/native';
 import store from './hooks/redux/redux';
 import {Provider} from 'react-redux';
 import {NativeBaseProvider} from 'native-base';
 import axios from 'axios';
 import BaseUrl from './Assets/Connection/BaseUrl';
 import { SetCategory } from './hooks/api/ApiCalls';
 import Toast from 'react-native-toast-message';
import themeNative from './Screens/Fonts/FontsNativeBase';
 
 
 const bgcolor = color.light;
 const App = () => {
   const [Data, setData] = useState([]);
   LogBox.ignoreAllLogs();//Ignore all log notifications
   const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    }
  }
 
   return (
     <SafeAreaProvider style={styles.container}>
       <Provider store={store}>
         <NativeBaseProvider theme={themeNative} config={config}>
           <NavigationContainer>
             <BottomStackNavigation />
             <Toast ref={(ref:any) => Toast.setRef(ref)} />
           </NavigationContainer>
         </NativeBaseProvider>
       </Provider>
     </SafeAreaProvider>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: bgcolor.background,
   },
 });
 
 export default App;
 