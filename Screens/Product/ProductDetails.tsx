import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

interface Props {
  item: any;
}

const bgcolor = color.light;

const ProductDetails = (props: Props) => {
  const [favoutite, setfavoutite] = useState(true);
  let random: any = 50;

  useEffect(() => {
    random = Math.floor(Math.random() * 100);
   
  }, []);

  function handleSelected() {
    setfavoutite(!favoutite);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topheader}>
        <Text style={styles.price}>&#8377; {props.item.price}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={{paddingTop: 5}}
            name="star"
            size={25}
            color={bgcolor.available}
          />
          <Text style={styles.ratingstext}> {props.item.rating}</Text>
        </View>
      </View>
      <Text style={styles.text}>{props.item.name}</Text>
      <View style={styles.pricecontainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon2
            style={{paddingTop: 5}}
            name="message"
            size={22}
            color={bgcolor.available}
          />
          <Text style={styles.brand}> ({random} Reviews)</Text>
        </View>
        <Text
          style={[
            styles.brand,
            {fontSize: 15},
            props.item.countInStock <= 0
              ? styles.notavailable
              : styles.availabe,
          ]}>
          {props.item.countInStock <= 0 ? 'Out of Stock' : 'Available in Stock'}
        </Text>
      </View>
      <Text style={styles.desription}>{props.item.description}</Text>
      <ScrollView style={{elevation: 50}}>
        <View style={styles.cartcontainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <View
              onTouchStart={() => handleSelected()}
              style={styles.favoutite}>
              {!favoutite ? (
                <Image
                  style={styles.heartSelected}
                  source={require('../../assets/images/HeartSelected.png')}
                />
              ) : (
                <Image
                  style={styles.heartSelected}
                  source={require('../../assets/images/heartNotDelected.png')}
                />
              )}
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cart}>
              Add to Cart <Icon2 name="shopping-cart" size={25} />
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: bgcolor.text2,
    borderWidth: 1,
    elevation: 10,
    top: -60,
    backgroundColor: bgcolor.text2,
    justifyContent: 'space-between',
  },
  text: {
    color: bgcolor.text,
    fontWeight: '700',
    fontSize: 25,
    paddingVertical: 5,
    textShadowColor: bgcolor.Icon,
    textShadowRadius: 1,
    elevation: 15,
  },
  brand: {
    fontSize: 15,
    color: bgcolor.text,
    paddingVertical: 3,
    fontWeight: '400',
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingstext: {
    color: bgcolor.text,
    fontSize: 22,
    fontWeight: '700',
    paddingRight: 15,
    paddingTop: 2,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: bgcolor.price,
    fontWeight: '800',
    fontSize: 17,
    paddingVertical: 5,
    borderWidth: 1,
    backgroundColor: bgcolor.ratings,
    borderColor: 'transparent',
    padding: 15,
    borderRadius: 30,
  },
  availabe: {
    color: bgcolor.available,
  },
  notavailable: {
    color: bgcolor.like,
  },
  topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  desription: {
    fontSize: 15,
    color: bgcolor.text,
    fontWeight: '400',
    width: '100%',
    height: '15%',
    paddingTop: 20,
    elevation: 10,
  },
  productCart: {
    width: '100%',
    height: '100%',
    elevation: 50,
  },
  heartSelected: {
    width: '60%',
    height: '60%',
    alignSelf: 'center',
  },
  cartcontainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  favoutite: {
    width: 52,
    height: 52,
    borderColor: bgcolor.text2,
    borderWidth: 0.2,
    paddingTop: 3,
    borderRadius: 30,
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: bgcolor.text2,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  cart: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    color: bgcolor.text2,
    width: Dimensions.get('window').width - 150,
    height: 60,
    backgroundColor: bgcolor.text,
    borderRadius: 10,
  },
});
