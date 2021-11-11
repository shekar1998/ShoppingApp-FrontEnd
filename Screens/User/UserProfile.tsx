import {Avatar, Box, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';
import {Screen} from 'react-native-screens';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../Api/BackEndCAlls';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserProfileEdit from './UserProfileEdit';

let list = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/128/3338/3338712.png',
    OptionName: 'Recent Order',
    navigateRoute: '',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/128/5488/5488533.png',
    OptionName: 'Saved Cards',
    navigateRoute: 'card',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/4560/4560631.png',
    OptionName: 'Saved Address',
    navigateRoute: 'AddressPage',
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/128/4862/4862632.png',
    OptionName: 'Black Friday Offers',
    navigateRoute: '',
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/128/3157/3157805.png',
    OptionName: 'Support',
    navigateRoute: '',
  },
  {
    id: 6,
    image: 'https://cdn-icons-png.flaticon.com/512/3157/3157808.png',
    OptionName: 'Info',
    navigateRoute: '',
  },
];

interface Props {
  navigation: any;
}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const UserProfile = (props: Props) => {
  const [UserDetails, setUserDetails]: any = useState([]);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);
  const UpdatedUSer: any = useSelector((state: any) => state.UpdatedValue);

  useEffect(() => {
    if (LoggedInInfo.isAuthenticated === true) {
      setUserDetails(LoggedInInfo.userProfile.user);
    }
    console.log('LoggedInInf', LoggedInInfo.userProfile);
  }, [LoggedInInfo.UpdatedCheck]);

  useEffect(() => {
    if (UpdatedUSer.Updated === true) {
      setUserDetails(UpdatedUSer.UpdatedValue);
      console.log(' UpdatedUSer LoggedInInf', UpdatedUSer);
    } else {
      console.log('alreadyUpdated');
    }
  }, [UpdatedUSer.Updated, UpdatedUSer.UpdatedValue]);

  function HandleClick() {
    console.log('Clicked', props);
    props.navigation.navigate('card');
  }

  return (
    <View style={{flex: 1, backgroundColor: bgcolor.background}}>
      <Box
        width="100%"
        alignSelf="center"
        _text={{
          fontSize: 'md',
          fontWeight: 'bold',
          color: bgcolor.text,
        }}>
        <Box>
          <Box
            alignItems={'center'}
            justifyContent={'space-between'}
            width="100%"
            alignSelf="center"
            px="4"
            flexDirection={'row'}>
            <Text style={styles.mainText}>Hi, {UserDetails.name}</Text>
            <UserProfileEdit />
          </Box>
          <Box
            justifyContent={'space-between'}
            width="100%"
            alignSelf="center"
            px="4"
            py="1">
            <Box
              alignItems={'center'}
              width="100%"
              alignSelf="center"
              flexDirection={'row'}>
              <Icon name="call" size={16} color={bgcolor.Icon} />
              <Text style={styles.Text}>+91 {UserDetails.phone}</Text>
            </Box>
            <Box alignItems={'center'} width="100%" flexDirection={'row'}>
              <Icon name="email" size={16} color={bgcolor.Icon} />
              <Text style={styles.Text}>{UserDetails.email}</Text>
            </Box>
          </Box>
        </Box>
        <Box width="100%" height="1%" bgColor={'#0001'} my={3}></Box>
        {list.map((data: any) => {
          return (
            <TouchableOpacity
              key={data.id}
              onPress={() =>
                props.navigation.navigate('Cart', {screen: data.navigateRoute})
              }
              activeOpacity={0.7}>
              <Box
                alignItems={'center'}
                justifyContent={'space-between'}
                width="100%"
                alignSelf="center"
                px={3}
                py={3}>
                <Box
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  width="100%"
                  flexDirection={'row'}>
                  <Box
                    alignItems={'center'}
                    alignSelf="center"
                    flexDirection={'row'}>
                    <Image
                      style={styles.Image}
                      source={{
                        uri: data.image,
                      }}></Image>
                    <Text style={styles.OptionText}>{data.OptionName}</Text>
                  </Box>
                  <Icon
                    name="arrow-forward-ios"
                    size={18}
                    color={bgcolor.Icon}
                  />
                </Box>
              </Box>
            </TouchableOpacity>
          );
        })}
        <Box width="100%" height="1%" bgColor={'#0001'} my={3}></Box>
        <Text style={styles.LegalText}>FAQs</Text>
        <Text style={styles.LegalText}>ABOUT US</Text>
        <Text style={styles.LegalText}>TEARMS OF USE</Text>
        <Box alignItems={'center'} width="100%" my={10}>
          <Button
            bg={bgcolor.text}
            borderColor={bgcolor.text}
            borderWidth={1}
            rightIcon={
              <AntDesign name="logout" size={18} color={bgcolor.text2} />
            }
            onPress={() => logoutUser(dispatch)}
            w={'80%'}>
            Logout
          </Button>
          <Text style={styles.LegalText}>APP VERSION 2.1.0</Text>
        </Box>
      </Box>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  mainText: {
    color: bgcolor.text,
    fontWeight: '700',
    fontSize: 20,
  },
  Text: {
    color: bgcolor.Icon,
    fontWeight: '600',
    fontSize: 13.5,
    paddingHorizontal: 5,
  },
  LegalText: {
    color: bgcolor.text,
    fontWeight: '600',
    fontSize: 13.5,
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  OptionText: {
    color: bgcolor.text,
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 25,
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
