import React from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Slider() {
  
  return (
    <View style={styles.container}>
      <Swiper height={300} horizontal={true} autoplay autoplayTimeout={6}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Shopping1.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Shopping3.jpg')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Shopping4.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  slide: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '120%',
    resizeMode: 'contain',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
