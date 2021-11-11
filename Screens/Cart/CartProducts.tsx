import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import color from '../../color/color';
import {useSelector} from 'react-redux';
import EmptyCartSvg from './EmptyCartSvg';

interface Props {
  navigation:any
}

const bgcolor = color.light;

const CartProducts = (props: Props) => {
  const selectedValue = useSelector((state: any) => state.Item.Item);
  let initialPrice: any = 0;
  let Total: any = 50;

  selectedValue.map((data: any) => {
    initialPrice = data.price + initialPrice;
  });

  useEffect(() => {
    selectedValue.map((data: any) => {
      Total = data.price + data.price * 0.029 + Total;
    });
  }, []);

  return (
    <View style={styles.MainContainer}>
      {selectedValue.length > 0 ? (
        <ScrollView>
          <View style={styles.ProductBox}>
            {selectedValue.map((data: any) => {
              return (
                <View key={Date.now() + data._id.$oid} style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: data.image}} />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.brand}>{data.brand}</Text>
                    <Text style={styles.price}>
                      &#8377; {data.price.toFixed(2)}
                      <Text style={styles.brand}> (+ 2.9% tax)</Text>
                    </Text>
                    <View style={styles.ProductAction}>
                      <View style={styles.ProductIncrement}>
                        <MaterialCommunityIcons
                          style={styles.Icon}
                          name="plus"
                          size={20}
                          color={bgcolor.text}
                        />
                        <Text style={styles.price}>1</Text>
                        <MaterialCommunityIcons
                          style={styles.Icon}
                          name="minus"
                          size={20}
                          color={bgcolor.text}
                        />
                      </View>
                      <Icon2
                        style={styles.CancleIcon}
                        name="shopping-basket-remove"
                        size={20}
                        color={bgcolor.like}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <EmptyCartSvg />
      )}
      {selectedValue.length > 0 ? (
        <View>
          <View>

            <View style={{...styles.PriceContainer, height: 60}}>
              <Text style={{...styles.orderPrice, fontSize: 17}}>Total </Text>
              <Text
                style={{...styles.Pricetext, fontSize: 17, fontWeight: '800'}}>
                &#8377;{initialPrice.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      <TouchableOpacity onPress={() => props.navigation.navigate('MainShipping') }>
        <View style={styles.quantitiyContainer}>
          <Text style={styles.text}>Checkout</Text>
          <Icon
            style={styles.Icon}
            name="check-circle"
            color={bgcolor.available}
            size={35}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartProducts;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: bgcolor.text2,
    flex: 1,
    justifyContent: 'space-between',
  },
  ProductBox: {
    justifyContent: 'space-between',
  },
  container: {
    width: Dimensions.get('window').width - 30,
    height: 130,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainer: {
    width: 130,
    height: 130,
    backgroundColor: bgcolor.boxColor,
    borderRadius: 12,
    flex: 1.2,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  detailsContainer: {
    width: '100%',
    height: '100%',
    flex: 2,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    paddingTop: 10,
  },
  quantitiyContainer: {
    backgroundColor: bgcolor.text,
    width: Dimensions.get('window').width - 70,
    height: 60,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  PriceContainer: {
    width: Dimensions.get('window').width - 70,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: bgcolor.text2,
    fontSize: 22,
    textAlignVertical: 'center',
  },
  Pricetext: {
    color: bgcolor.text,
    fontWeight: '600',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  Icon: {
    marginHorizontal: 10,
    textAlignVertical: 'center',
    marginVertical: 4,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 20,
    textAlign: 'center',
  },
  CancleIcon: {
    marginHorizontal: 10,
    textAlignVertical: 'center',
    marginVertical: 5,
    alignSelf: 'center',
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
    fontWeight: '600',
  },
  brand: {
    color: bgcolor.Icon,
    fontSize: 14,
    textAlignVertical: 'center',
  },
  orderPrice: {
    color: bgcolor.Icon,
    fontSize: 14,
    textAlignVertical: 'center',
    fontWeight: '400',
  },
  price: {
    color: bgcolor.available,
    fontSize: 16,
    textAlignVertical: 'center',
    fontWeight: '900',
  },
  ProductAction: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ProductIncrement: {
    width: 90,
    height: 30,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: bgcolor.text2,
    marginVertical: 10,
  },
});
