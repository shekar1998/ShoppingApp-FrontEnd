import {Box, Text} from 'native-base';
import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import color from '../../color/color';

interface Props {}
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
let ProductCategory = [
  {
    name: 'Electronics',
    image: 'https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png',
  },
  {
    name: 'Electronics',
    image: 'https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png',
  },
];
const AdminCategoryList = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ProductCategory}
        renderItem={(item: any) => (
          <Box
            w={'43%'}
            justifyContent={'space-between'}
            alignSelf={'center'}
            h={200}
            m={3}
            overflow={'hidden'}
            borderWidth={0.5}
            borderRadius={10}
            borderColor={bgcolor.Icon}>
            <Text
              color={bgcolor.text}
              fontFamily={'Dongle'}
              fontSize={40}
              justifyContent={'center'}>
              {item.item.name}
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
        )}
        numColumns={2}
        scrollEnabled={true}
        scrollToOverflowEnabled={true}
      />
    </View>
  );
};

export default AdminCategoryList;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    paddingVertical: 20,
  },
});
