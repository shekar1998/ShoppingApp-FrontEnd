import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
interface Props {
    
}

const EmptyCartSvg = (props: Props) => {
    return (
        <View style={{width:'100%', height:'100%'}}>
       <Image style={styles.image} source={require('../../assets/images/Empty.png')}/>
      </View>
    )
}

export default EmptyCartSvg

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
})
