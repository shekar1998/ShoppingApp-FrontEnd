import {useNavigation} from '@react-navigation/core';
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Spinner,
  Stack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../color/color';
import ImageBox from './ImageBox';
import {useToast} from 'native-base';
import {LoginUser, SetCurrentLoggedInUser} from '../../Api/BackEndCAlls';
import {fontStyle, textStyle} from 'styled-system';
import {useDispatch, useSelector} from 'react-redux';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const Login = (props: Props) => {
  const [Show, setShow]: any = useState(false);
  const [Email, setEmail] = useState('manju@gmail.com');
  const [Password, setPassword] = useState('1234');
  const [spinner, setspinner] = useState(false);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);

  useEffect(() => {
    if (LoggedInInfo.isAuthenticated === true) {
      console.log('------------------------------------');
      console.log('Navigaing');
      console.log('-------------------------------------');
      navigation.navigate('UserProfile');
      return () => {};
    }
  }, [LoggedInInfo.isAuthenticated]);

  async function handleSubmit() {
    setspinner(true);
    if (Email === '' || Password === '') {
      toast.show({
        title: 'Something went wrong',
        status: 'error',
        description: 'Please fill all the fields',
        placement: 'top',
      });
    } else {
      const inputvalues = {
        email: Email,
        password: Password,
      };
      await LoginUser(inputvalues)
        .then((res: any) => {
          console.log(res.data);

          if (res.status === 200) {
            SetCurrentLoggedInUser(dispatch, res.data);
            setspinner(false);
            toast.show({
              title: 'Account verified',
              status: 'success',
              description: 'Thanks for signing up with us.',
              placement: 'top',
            });
          }
        })
        .catch((err: any) => {
          setspinner(false);
          toast.show({
            title: 'Something went wrong',
            status: 'error',
            description: err.message,
            placement: 'top',
          });
        });
    }
  }

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      enableOnAndroid={true}
      extraScrollHeight={18}
      contentContainerStyle={{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 0,
      }}>
      <View style={styles.container}>
        <View style={styles.ImageCntainer}>
          <View style={{top: 50, elevation: 10}}>
            {spinner ? (
              <Spinner
                size="lg"
                color="warning.500"
                accessibilityLabel="Loading posts"
              />
            ) : null}
          </View>
          <Image
            style={styles.Image}
            source={require('../../assets/images/Telecommuting-pana.png')}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.text}>Login</Text>
          <Box
            w={{
              base: '90%',
              md: '25%',
            }}>
            <FormControl>
              <Stack mx="1">
                <Input
                  style={styles.Input}
                  variant="underlined"
                  placeholder="Email"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={<Ionicons name="ios-person-circle-outline" />}
                      size={7}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  onChangeText={(text: any) => setEmail(text)}
                  value={Email}
                />
                <Input
                  style={styles.Input}
                  variant="underlined"
                  placeholder="Enter Password"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={
                        !Show ? (
                          <MaterialCommunityIcons
                            onPress={() => setShow(!Show)}
                            name="eye-off-outline"
                          />
                        ) : (
                          <MaterialCommunityIcons
                            onPress={() => setShow(!Show)}
                            name="eye-outline"
                          />
                        )
                      }
                      size={26.5}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  type={Show ? 'text' : 'password'}
                  onChangeText={(text: any) => setPassword(text)}
                  value={Password}
                />
              </Stack>
            </FormControl>
            <Box
              justifyContent="center"
              flexDirection={'row'}
              w={{
                base: '100%',
                md: '100%',
              }}>
              <Button
                backgroundColor={bgcolor.text2}
                style={{...styles.Button}}
                onPress={() => console.log('hello world')}>
                <Text style={{color: bgcolor.text, fontWeight: '500'}}>
                  Forgot Password ?
                </Text>
              </Button>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSubmit()}>
                <Text style={{...styles.LoginButton}}>Login</Text>
              </TouchableOpacity>
            </Box>
            <Box
              justifyContent="center"
              flexDirection={'row'}
              w={{
                base: '100%',
                md: '100%',
              }}>
              <Text style={styles.text3}>or login with...</Text>
            </Box>
            <ImageBox />
            <Box
              justifyContent="center"
              flexDirection={'row'}
              w={{
                base: '100%',
              }}>
              <Text style={styles.text3}>New to Shopping App ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    ...styles.text3,
                    color: bgcolor.price2,
                    fontWeight: '700',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: bgcolor.background,
  },
  ImageCntainer: {
    width: '100%',
    height: '40%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '110%',
    height: '80%',
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
    color: bgcolor.text,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  InputContainer: {
    padding: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 25,
    backgroundColor: bgcolor.text2,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Input: {
    marginVertical: 10,
    padding: 0,
  },
  Button: {
    width: 155,
    marginVertical: 25,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  LoginButton: {
    width: 155,
    marginVertical: 25,
    borderRadius: 5,
    marginHorizontal: 5,
    color: bgcolor.text2,
    backgroundColor: bgcolor.price2,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
  },
  text2: {
    color: bgcolor.text,
    fontWeight: '500',
  },
  text3: {
    color: bgcolor.Icon,
    fontWeight: '400',
    paddingVertical: 10,
  },
});
