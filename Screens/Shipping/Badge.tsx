import {Container, Avatar} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import color from '../../color/color';

interface Props {}

const bgcolor = color.light;

const Badge = (props: Props) => {
  const selectedValue = useSelector((state: any) => state.Item.Item);

  return (
    <View>
      {selectedValue.length > 0 ? (
        <Text
          style={{
            backgroundColor: bgcolor.like,
            color: bgcolor.text2,
            borderRadius: 20,
            width: 15,
            height: 15,
            fontSize: 10,
            textAlign: 'center',
            textAlignVertical: 'center',
            marginRight: 10,
            top: -2.5,
            left: -6,
            elevation: 2,
          }}>
          {selectedValue.length}
        </Text>
      ) : null}
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
