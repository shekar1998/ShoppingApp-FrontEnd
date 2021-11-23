import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../color/color';
import data from '../../assets/category.json';
import {blueGrey900} from 'react-native-paper/lib/typescript/styles/colors';
import {SetSelectedCategory} from '../../hooks/api/ApiCalls';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
  selectedCalue: any;
  route: any;
}
const bgcolor = color.light;

const CategoryList = (props: Props) => {
  const [Active, setActive]: any = useState(0);
  const [SelectedCategory, setSelectedCategory] = useState();
  const dispatch = useDispatch();
  const handleSelect = (item: any) => {
    setActive(AllData.indexOf(item.item));
    setSelectedCategory(item.item); //State
    SetSelectedCategory(dispatch, item.item); // Api
  };
  const AllData: any = useSelector(
    (state: any) => state.AllCategory.AllCategory,
  );


  return (
    <View style={styles.CategoryContainer}>
      {AllData ? (
        <FlatList
          data={AllData}
          renderItem={(item: any) => {            
            return (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                activeOpacity={0.8}>
                <View
                  style={[
                    styles.CategorytextContainer,
                    {width: item.length, height: 47},
                    Active === AllData.indexOf(item.item)
                      ? styles.active
                      : styles.inactive,
                  ]}>
                  <Text
                    style={[
                      styles.Categorytext,
                      Active === AllData.indexOf(item.item)
                        ? styles.textActive
                        : styles.textinactive,
                    ]}>
                    {item.item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          horizontal={true}
        />
      ) : null}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  CategoryContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Categorytext: {
    fontSize: 15,
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CategorytextContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: bgcolor.boxColor,
    padding: 3,
  },
  active: {
    backgroundColor: bgcolor.text,
  },
  inactive: {
    backgroundColor: bgcolor.boxColor,
  },
  textActive: {
    color: bgcolor.text2,
  },
  textinactive: {
    color: bgcolor.text,
  },
});
