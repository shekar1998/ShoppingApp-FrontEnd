import {
  Box,
  FormControl,
  Stack,
  Input,
  Icon,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useToast} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import color from '../../color/color';
import ImageBox from './ImageBox';
import {useNavigation} from '@react-navigation/native';
import {RegisterUser} from '../../Api/BackEndCAlls';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const Register = (props: Props) => {
  const [Show, setShow]: any = useState(false);
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const navigation: any = useNavigation();
  const toast = useToast();



  function handleSubmit() {
    if (Name === '' || Password === '') {
      toast.show({
        title: 'Something went wrong',
        status: 'error',
        description: 'Please fill all the fields',
        placement: 'top',
      });
    } else {
      const inputvalues = {
        name: Name,
        passwordHash: Password,
        email: Email,
        phone: Phone,
      };
      RegisterUser(inputvalues).then((res: any) =>{
        console.log(res.status);
        
        if(res.status === 200 )
        {
          Toast.show({
            type: 'success',
            text1: 'Registration succeeded',
            text2: 'Please Login into your account',
            topOffset: 50,
          });
        }
      }
      ).catch((err:any) => 
      Toast.show({
        type: 'error',
        text1: 'Registration succeeded',
        text2: 'Please Login into your account',
        topOffset: 50,
      })
      )
    }
  }

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      enableOnAndroid={true}
      extraScrollHeight={15}
      contentContainerStyle={{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 0,
      }}>
      <View style={styles.container}>
        <View style={styles.ImageCntainer}>
          <Image
            style={styles.Image}
            source={require('../../assets/images/SecureData.png')}
          />
        </View>

        <View style={styles.InputContainer}>
          <Text style={styles.text}>Sign up</Text>
          <ImageBox />
          <Box
            justifyContent="center"
            flexDirection={'row'}
            w={{
              base: '100%',
              md: '100%',
            }}>
            <Text style={styles.text3}>or register with...</Text>
          </Box>
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
                  placeholder="Email ID"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={<Fontisto name="email" />}
                      size={6}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  onChangeText={(text: any) => setEmail(text)}
                />
                <Input
                  style={styles.Input}
                  variant="underlined"
                  placeholder="Full Name"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={<Ionicons name="md-person-outline" />}
                      size={6}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  onChangeText={(text: any) => setName(text)}
                />
                <Input
                  style={styles.Input}
                  variant="underlined"
                  placeholder="Password"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={<SimpleLineIcons name="lock" />}
                      size={6}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  onChangeText={(text: any) => setPassword(text)}
                />
                <Input
                  style={styles.Input}
                  variant="underlined"
                  placeholder="Phone Number"
                  InputLeftElement={
                    <Icon
                      style={{marginHorizontal: 20}}
                      as={<AntDesign name="phone" />}
                      size={7}
                      ml="3"
                      color="muted.400"
                    />
                  }
                  onChangeText={(text: any) => setPhone(text)}
                  keyboardType="numeric"
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
                backgroundColor={bgcolor.price2}
                style={{...styles.Button}}
                onPress={() => handleSubmit()}>
                Sign up
              </Button>
            </Box>
          </Box>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

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
    width: '70%',
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
    width: width - 80,
    marginVertical: 25,
    borderRadius: 10,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  text2: {
    color: bgcolor.text,
    fontWeight: '500',
  },
  text3: {
    color: bgcolor.Icon,
    fontWeight: '400',
    paddingVertical: 5,
  },
});
