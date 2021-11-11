import {Box, Icon, Button} from 'native-base';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../color/color';

interface Props {}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const ImageBox = (props: Props) => {
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
        onPress={() => console.log('hello world')}>
        <Image
          style={styles.SocialImage}
          source={require('../../assets/images/google.png')}
        />
      </Button>
      <Button
        backgroundColor={bgcolor.text2}
        style={{...styles.SocialButton}}
        onPress={() => console.log('hello world')}>
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
