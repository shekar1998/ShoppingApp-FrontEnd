import {Box, Icon} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import color from '../../color/color';

interface Props {
  phone: any;
  email: any;
}
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
const userDetailComponent = (props: Props) => {
  return (
    <View style={styles.container}>
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
          <Text style={styles.Text}>+91 {props.phone}</Text>
        </Box>
        <Box alignItems={'center'} width="100%" flexDirection={'row'}>
          <Icon name="email" size={16} color={bgcolor.Icon} />
          <Text style={styles.Text}>{props.email}</Text>
        </Box>
      </Box>
    </View>
  );
};

export default userDetailComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  Text: {
    color: bgcolor.Icon,
    fontWeight: '600',
    fontSize: 13.5,
    paddingHorizontal: 5,
  },
});
