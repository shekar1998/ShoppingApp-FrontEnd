import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import LinearGradient from 'react-native-linear-gradient';
import ProductCard from './ProductCard';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {VStack, HStack, Radio, Text, Modal, Button, Spinner} from 'native-base';

interface Props {
  item?: any;
  navigation?: any;
  route?: any;
}
const bgcolor = color.light;
const {width, height} = Dimensions.get('window');
const ProductContainer = (props: Props) => {
  const {image}: any = props.item.item;
  const [favoutite, setfavoutite]: any = useState(false);
  function handleSelected() {
    setfavoutite(!favoutite);
  }



  return (

      <LinearGradient
        colors={['#fff', '#fff']}
        start={{x: 0.7, y: 0}}
        style={styles.container}>
        <LinearGradient
          colors={['rgba(255,255,255,0.99)', 'rgba(255,255,255,0.98)']}
          start={{x: 0.7, y: 0}}
          style={styles.ImageContainer}>
          {image ? (
            <Image style={styles.produtImage} source={{uri: image}} />
          ) : (
            <Image
              style={{...styles.produtImage, width: 130, height: 130}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png%22',
              }}
            />
          )}
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
        </LinearGradient>
        <View style={styles.InformationContainer}>
          <ProductCard item={props.item.item} />
        </View>
      </LinearGradient>

  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 18,
    height: Dimensions.get('window').height / 3.7,
    position: 'relative',
    overflow: 'hidden',
    margin: 6,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: bgcolor.boxColor,
    borderWidth: 0.4,
    backgroundColor: bgcolor.boxColor,
    shadowColor: bgcolor.shadow,
    shadowOpacity: 14.3,
    shadowOffset: {
      width: -12,
      height: -12,
    },
    shadowRadius: 10,
    elevation: 2,
  },
  ImageContainer: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: bgcolor.text,
  },
  produtImage: {
    width: Dimensions.get('window').height / 4.9 - 50,
    height: Dimensions.get('window').height / 4.4 - 65,
    resizeMode: 'contain',
  },
  InformationContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    borderLeftColorColor: bgcolor.text,
    borderBottomColor: bgcolor.text,
    borderRightColor: bgcolor.text,
    overflow: 'hidden',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  favoutite: {
    width: 22,
    height: 22,
    borderColor: bgcolor.text2,
    borderWidth: 0.2,
    padding: 3,
    borderRadius: 30,
    justifyContent: 'center',
    top: -130,
    left: 72,
    elevation: 3,
    backgroundColor: bgcolor.text2,
  },
  heartSelected: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
  },
  Modal: {
    justifyContent: 'center',
  },
});
