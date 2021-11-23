import { Box, Text } from 'native-base';
import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import color from '../../color/color';

interface Props {
    item:any
}
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
const AdminProductCategoryList = (props: Props) => {
    return (
        <Box
            w={'43%'}
            justifyContent={'space-between'}
            alignSelf={'center'}
            h={200}
            m={3}
            shadow={"3"}
            overflow={'hidden'}
            borderRadius={10}
            borderColor={bgcolor.Icon}>
            <Text
              color={bgcolor.text}
              fontFamily={'Dongle'}
              fontSize={40}
              justifyContent={'center'}>
              {props.item.name}
            </Text>
            <Box
              h={'65%'}
              w={'120%'}
              p={5}
              borderTopRadius={120}
              bg={{
                linearGradient: {
                  colors: ['lightBlue.600', 'lightBlue.400', 'lightBlue.500'],
                  start: [0, 0],
                  end: [2, 0],
                },
              }}>
              <Image
                style={styles.Image}
                source={{
                  uri: 'https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png',
                }}
              />
            </Box>
          </Box>
    )
}

export default AdminProductCategoryList

const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 90,
        resizeMode: 'contain',
        paddingVertical: 20,
      },
})
