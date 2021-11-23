import {Box, Text} from 'native-base';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import {
  Shadow,
  Neomorph,
  NeomorphFlex,
  NeomorphBlur,
} from 'react-native-neomorph-shadows';
import {useDispatch} from 'react-redux';
import {SetSelectedCategory} from '../../hooks/api/ApiCalls';
import {useNavigation} from '@react-navigation/core';

interface Props {}
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
let ProductCategory = [
  {
    _id: '617f88804767637770e8b6f8',
    name: 'Electronics',
    image: 'https://www.pngall.com/wp-content/uploads/9/Gadget-PNG-Pic.png',
  },
  {
    _id: '617f88804767637770e8b6f9',
    name: 'Phone',
    image:
      'https://www.pngall.com/wp-content/uploads/11/iPhone-13-Transparent.png',
  },
  {
    _id: '617f88804767637770e8b6fc',
    name: 'Home',
    image: 'https://www.pngmart.com/files/7/Sleeper-Sofa-PNG-Transparent.png',
  },
  {
    _id: '617f88804767637770e8b6fa',
    name: 'Computer',
    image:
      'https://www.pngmart.com/files/16/Laptop-Top-View-Transparent-Background.png',
  },
  {
    _id: '617f88804767637770e8b6fb',
    name: 'Headphone',
    image: 'https://www.pngmart.com/files/7/Mobile-Earphone-PNG-Photos.png',
  },
  {
    _id: '617f88804767637770e8b6fd',
    name: 'Garden',
    image:
      'https://www.pngmart.com/files/15/Flower-Pot-Plants-Transparent-PNG.png',
  },
  {
    _id: '617f88804767637770e8b6fe',
    name: 'Game',
    image: 'https://www.pngmart.com/files/7/Console-Transparent-Background.png',
  },
];
const AdminCategoryList = (props: Props) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  async function handleSelect(item: any) {
    console.log('Item => ', item);

    SetSelectedCategory(dispatch, item);
    navigation.navigate('ProductList');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={ProductCategory}
          renderItem={(item: any) => (
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => handleSelect(item.item)}>
              <View style={styles.mainContainer}>
                <NeomorphFlex
                  swapShadows
                  style={{
                    elevation: 20,
                    shadowRadius: 12,
                    borderRadius: 150,
                    backgroundColor: bgcolor.boxColor,
                    shadowColor: bgcolor.available,
                    width: 110,
                    height: 110,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Box
                    w={'100%'}
                    h={'100%'}
                    borderRadius={150}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={{
                      linearGradient: {
                        colors: [
                          'lightBlue.600',
                          'lightBlue.400',
                          'lightBlue.500',
                        ],
                        start: [0, 0],
                        end: [2, 0],
                      },
                    }}>
                    <Image
                      style={styles.Image}
                      source={{
                        uri: item.item.image,
                      }}
                    />
                  </Box>
                </NeomorphFlex>
                <Text
                  color={bgcolor.text}
                  fontFamily={'Dongle'}
                  fontSize={32}
                  justifyContent={'center'}>
                  {item.item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
        />
      </View>
    </ScrollView>
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
    height: '90%',
    resizeMode: 'contain',
  },
  mainContainer: {
    width: width / 2 - 12,
    height: height / 3 - 80,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
