import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import color from '../../color/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
const bgcolor = color.light;

export default function ShippingProducts() {
  const selectedValue = useSelector((state: any) => state.Item.Item);
  let containerStyle: any = styles.container;
  let ImageStyle: any = styles.imageContainer;
  let MaincontainerStyle: any = styles.Maincontainer;
  if (selectedValue.length === 1) {
    containerStyle = styles.singleProduct;
    ImageStyle = styles.singleimageContainer;
    MaincontainerStyle = styles.singleProductMaincontainer;
  } else if (selectedValue.length === 2) {
    containerStyle = styles.twoProducts;
    ImageStyle = styles.twoimageContainer;
    MaincontainerStyle = styles.TwoProductMaincontainer;
  }

  return (
    <View
      style={{
        ...MaincontainerStyle,
        backgroundColor: bgcolor.background,
      }}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={true}
          alwaysBounceVertical={true}
          bounces={true}
          bouncesZoom={true}>
          <View style={styles.ProductBox}>
            {selectedValue.map((data: any) => {
              return (
                <View
                  key={Date.now() + data._id.$oid}
                  style={{
                    ...containerStyle,
                    alignSelf: 'center',
                    marginVertical: 3,
                    borderRadius: 12,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      ...ImageStyle,
                      backgroundColor: bgcolor.boxColor,
                      borderRadius: 12,
                      alignSelf: 'center',
                      marginHorizontal: 10,
                      padding: 10,
                    }}>
                    <Image style={styles.image} source={{uri: data.image}} />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{data.name}</Text>
                    {selectedValue.length === 1 ||
                    selectedValue.length === 2 ? (
                      <Text style={styles.brand}>{data.brand}</Text>
                    ) : null}
                    <Text style={styles.price}>
                      &#8377; {data.price.toFixed(2)}
                      <Text style={styles.brand}> (+ 2.9% tax)</Text>
                    </Text>
                    {selectedValue.length === 1 ||
                    selectedValue.length === 2 ? (
                      <Text style={styles.brand}>Quantity : 1</Text>
                    ) : null}
                  </View>
                  <View style={styles.productIcon}>
                    <Text style={styles.quantity}></Text>
                    {selectedValue.length === 1 ||
                    selectedValue.length === 2 ? null : (
                      <MaterialCommunityIcons
                        style={styles.Icon}
                        name="shopping-outline"
                        size={18}
                        color={bgcolor.text}
                      />
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    height: '29%',
  },
  singleProductMaincontainer: {
    width: '100%',
    height: '15%',
  },
  TwoProductMaincontainer: {
    width: '100%',
    height: '27%',
  },
  ProductBox: {
    justifyContent: 'space-between',
  },
  singleProduct: {
    width: Dimensions.get('window').width - 10,
    height: 120,
  },
  twoProducts: {
    width: Dimensions.get('window').width - 10,
    height: 110,
  },
  container: {
    width: Dimensions.get('window').width - 30,
    height: 80,
  },
  imageContainer: {
    width: 75,
    height: 75,
  },
  singleimageContainer: {
    width: 115,
    height: 115,
  },
  twoimageContainer: {
    width: 95,
    height: 95,
  },
  detailsContainer: {
    width: '100%',
    height: '100%',
    flex: 2.8,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: bgcolor.text2,
    fontSize: 22,
    textAlignVertical: 'center',
  },
  Icon: {
    marginHorizontal: 10,
    textAlignVertical: 'center',
    marginVertical: 4,
    borderRadius: 20,
    textAlign: 'center',
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  name: {
    color: bgcolor.text,
    fontSize: 15,
    textAlignVertical: 'center',
    fontWeight: '800',
  },
  brand: {
    color: bgcolor.Icon,
    fontSize: 14,
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  price: {
    color: bgcolor.text,
    fontSize: 16,
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  productIcon: {
    justifyContent: 'space-between',
    padding: 5,
  },
  quantity: {
    fontSize: 14,
    color: bgcolor.text,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
