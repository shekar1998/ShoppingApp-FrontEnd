import {Box, Icon, Button} from 'native-base';
import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../color/color';
import {GoogleSignin, statusCodes} from 'react-native-login-google';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const ImageBox = (props: Props) => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '113681786659-210f1eb95v54bq3fiisc4tp0ctljbfto.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId:
      '113681786659-210f1eb95v54bq3fiisc4tp0ctljbfto.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });

  const handleGoogleLoginPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info ', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <Box
      justifyContent="center"
      flexDirection={'row'}
      w={{
        base: '100%',
        md: '100%',
      }}>
      <Button
        backgroundColor={bgcolor.text2}
        style={{...styles.SocialButton}}
        onPress={handleGoogleLoginPress}>
        <Image
          style={styles.SocialImage}
          source={require('../../assets/images/google.png')}
        />
      </Button>
      <Button backgroundColor={bgcolor.text2} style={{...styles.SocialButton}}>
        <Image
          style={styles.SocialImage2}
          source={require('../../assets/images/facebook.png')}
        />
      </Button>
      <Button
        backgroundColor={bgcolor.text2}
        style={{...styles.SocialButton}}
        onPress={() => console.log('hello world')}>
        <Icon as={<AntDesign name="apple1" />} size={7} color={bgcolor.text} />
      </Button>
    </Box>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  SocialButton: {
    width: 110,
    marginVertical: 25,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    elevation: 2,
    overflow: 'hidden',
  },
  SocialImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  SocialImage2: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
});
