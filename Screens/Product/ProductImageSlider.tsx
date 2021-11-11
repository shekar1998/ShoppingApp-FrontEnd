import React from 'react';
import { View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

interface Props {
    image:any
}


export default function ProductimageSlider(props: Props) {
  return (
    <View style={styles.container}>
      <Swiper height={300} horizontal={true}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{uri:props.image}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{uri:props.image}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{uri:props.image}}
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
    height: Dimensions.get('window').height -90,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom:30
  },
  slide: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom:50
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
