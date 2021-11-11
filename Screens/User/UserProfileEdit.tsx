import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  Icon,
  Input,
  Spinner,
  Text,
  useDisclose,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateUser} from '../../Api/BackEndCAlls';
import color from '../../color/color';
import {setUpdatedUser} from '../../hooks/redux/actions';
import ImagePicker from 'react-native-image-crop-picker';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const UserProfileEdit = (props: Props) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [avatarSource, setavatarSource] = useState();
  const [ButtonColor, setButtonColor] = useState(bgcolor.text);
  const [Loading, setLoading] = useState(false);
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const dispatch = useDispatch();

  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);
  useEffect(() => {
    setName(LoggedInInfo.userProfile.user.name);
    setPhone(LoggedInInfo.userProfile.user.phone);
    setEmail(LoggedInInfo.userProfile.user.email);
    setavatarSource(LoggedInInfo.userProfile.user.Image);
  }, []);

  console.log('ID', LoggedInInfo.userProfile.user.id);

  function handleSubmit() {
    setLoading(true);
    setButtonColor(bgcolor.background);
    let UpdatedObj = {
      name: Name,
      phone: Phone,
      email: Email,
      Image: avatarSource,
    };
    UpdateUser(dispatch, UpdatedObj, LoggedInInfo.userProfile.user.id)
      .then((res: any) => {
        console.log('res', res);

        if (res.status === 200) {
          dispatch(setUpdatedUser(true, res.data));
        }
      })
      .catch((err: any) => {
        console.log('Error', err);
      });
    setTimeout(() => {
      setLoading(false);
      setButtonColor(bgcolor.text);
    }, 1000);
  }

  async function handleImage() {

    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(async (image: any) => {
        console.log('Before =>', image);
        await setavatarSource(image.path);
        console.log('After =>', avatarSource);
      })
      .catch((err: any) => {
        console.log('Image => ', err);
      });
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.IconContainer}>
        <TouchableOpacity onPress={onOpen} activeOpacity={0.7}>
          <MaterialCommunityIcons
            name="account-edit"
            size={32}
            color={bgcolor.text}
          />
        </TouchableOpacity>
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box
            w="100%"
            h={60}
            px={1}
            flexDirection={'row'}
            alignSelf="center"
            alignItems="center"
            justifyContent="center">
            <Text fontSize={22} px={1} color={bgcolor.text} fontWeight={'700'}>
              Edit Profile
            </Text>
          </Box>
          <Box>
            {avatarSource && (
              <Avatar
                source={{
                  uri: avatarSource,
                }}
                size="xl"
              />
            )}

            <TouchableOpacity onPress={() => handleImage()} activeOpacity={0.7}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: bgcolor.text,
                  borderRadius: 50,
                  borderWidth: 1,
                  justifyContent: 'center',
                  top: -35,
                  left: 60,
                }}>
                <MaterialIcons
                  style={{alignSelf: 'center'}}
                  name="edit"
                  size={20}
                  color={bgcolor.text2}
                />
              </View>
            </TouchableOpacity>
          </Box>
          <Box w="100%" h={60} px={1} my={2.5} justifyContent="center">
            <Text
              px={4}
              py={1}
              color={bgcolor.Icon}
              fontWeight={'600'}
              alignSelf={'flex-start'}>
              Your Name
            </Text>
            <Input
              mx="3"
              fontSize={14}
              value={Name}
              borderRadius={7}
              borderWidth={0.7}
              placeholder="Input"
              onChangeText={(text: any) => setName(text)}
              borderColor={bgcolor.Icon}
              w={{
                base: '90%',
                md: '25%',
              }}
            />
          </Box>
          <Box w="100%" h={60} px={1} my={2.5} justifyContent="center">
            <Text
              px={4}
              py={1}
              color={bgcolor.Icon}
              fontWeight={'600'}
              alignSelf={'flex-start'}>
              Phone Number
            </Text>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="phone" />}
                  size={5}
                  ml="3"
                  color="muted.400"
                />
              }
              value={Phone}
              fontSize={14}
              mx="3"
              borderRadius={7}
              borderWidth={0.7}
              placeholder="Input"
              onChangeText={(text: any) => setPhone(text)}
              borderColor={bgcolor.Icon}
              w={{
                base: '90%',
                md: '25%',
              }}
              keyboardType={'number-pad'}
            />
          </Box>
          <Box w="100%" h={60} px={1} my={2.5} justifyContent="center">
            <Text
              px={4}
              py={1}
              color={bgcolor.Icon}
              fontWeight={'600'}
              alignSelf={'flex-start'}>
              Email ID
            </Text>
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialCommunityIcons name="email" />}
                  size={5}
                  ml="3"
                  color="muted.400"
                />
              }
              value={Email}
              fontSize={14}
              mx="3"
              borderRadius={7}
              borderWidth={0.7}
              placeholder="Input"
              onChangeText={(text: any) => setEmail(text)}
              borderColor={bgcolor.Icon}
              w={{
                base: '90%',
                md: '25%',
              }}
              keyboardType={'number-pad'}
            />
          </Box>
          <Box
            alignItems="center"
            w="90%"
            h={10}
            my={5}
            flexDirection={'row'}
            justifyContent="center">
            <Button
              onPress={() => handleSubmit()}
              w="97%"
              h={43}
              mx={2}
              bg={ButtonColor}
              borderRadius={20}>
              {!Loading ? 'Update' : <Spinner color="indigo.500" />}
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default UserProfileEdit;

const styles = StyleSheet.create({
  IconContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
});
