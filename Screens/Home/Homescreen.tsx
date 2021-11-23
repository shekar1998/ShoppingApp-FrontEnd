import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import color from '../../color/color';
import ProductList from '../Product/ProductList';
import Slider from './Slider';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import SearchedProduct from '../Product/SearchedProduct';
import VirtualizedView from '../VirtuaFlatList/Virtual';
import data from '../../assets/data.json';
import CategoryList from './CategoryList';
import {SetAllProducts, SetCategory} from '../../hooks/api/ApiCalls';
import {useDispatch, useSelector} from 'react-redux';
import {getCategory, getProducts} from '../../Api/BackEndCAlls';
import {LogBox} from 'react-native';
import {Center} from 'native-base';
interface Props {
  navigation: any;
  route: any;
}
const bgcolor = color.light;

const Homescreen = (props: Props) => {
  const [TextField, SetTextField] = useState('');
  const [Focus, setFocus] = useState(false);
  const [searchResult, setsearchResult] = useState([]);
  const [Active, setActive]: any = useState(true);
  const [SelectedCategory, setSelectedCategory] = useState();
  const dispatch = useDispatch();
  const UpdateCheck = useSelector((state: any) => state.UpdateCheck);
  console.log('UpdateCheck', UpdateCheck.UpdatedCheck);

  useEffect(() => {
    LogBox.ignoreAllLogs();
    getProducts().then((res: any) => {
      SetAllProducts(dispatch, res);
    });
    getCategory().then((res: any) => {
      SetCategory(dispatch, res);
    });

    setTimeout(() => {
      setActive(false);
    }, 550);
  }, []);

  const handleCancle = () => {
    Keyboard.dismiss();
    setFocus(false);
    SetTextField('');
  };

  const handleSearch = (text: any) => {
    SetTextField(text);
    const searched: any = data.filter((value: any) =>
      value.name.toLowerCase().includes(text.toLowerCase()),
    );
    if (JSON.stringify(searchResult) === JSON.stringify(searched)) {
      return;
    } else {
      setsearchResult(searched);
    }
  };

  const handleSelected = (item: any) => {
    setSelectedCategory(item.item);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: bgcolor.background,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 40,
          padding: 10,
        }}>
        {!Focus ? (
          <Text style={styles.text}>Best Place for Shopping</Text>
        ) : null}
        <View style={styles.main}>
          <View style={styles.SearchContainer}>
            <Icon name="search" size={31} color={bgcolor.Icon} />
            <TextInput
              style={styles.input}
              onChange={text => handleSearch(text.nativeEvent.text)}
              onPressIn={() => setFocus(true)}
              placeholder={'Search'}
              placeholderTextColor={bgcolor.Icon}
              value={TextField}
            />
            <Icon
              name="close"
              onPress={() => handleCancle()}
              size={31}
              color={bgcolor.Icon}
            />
          </View>
          <Icons
            style={styles.icon}
            name="sliders"
            size={33}
            color={bgcolor.Icon}
          />
        </View>
        {!Active ? (
          <VirtualizedView>
            {!Focus ? (
              <View style={styles.slider}>
                <Slider />
              </View>
            ) : null}
            {!Focus ? (
              <CategoryList
                selectedCalue={handleSelected}
                route={props.route}
              />
            ) : null}
            {!Focus ? (
              <ProductList
                category={SelectedCategory}
                navigation={props.navigation}
                route={props.route}
              />
            ) : null}
            {Focus ? (
              <View style={styles.search}>
                <SearchedProduct result={searchResult} />
              </View>
            ) : null}
          </VirtualizedView>
        ) : (
          <Center style={{marginTop: 150}}>
            <ActivityIndicator size="large" color={bgcolor.price2} />
          </Center>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    width: '80%',
    color: bgcolor.text,
    padding: 10,
    marginLeft: 10,
    fontWeight: '700',
    fontFamily: 'Dongle-Light',
  },
  slider: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width / 2,
    backgroundColor: bgcolor.boxColor,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  main: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  SearchContainer: {
    width: Dimensions.get('window').width / 1 - 100,
    height: Dimensions.get('window').height / 4 - 155,
    margin: 12,
    borderRadius: 10,
    backgroundColor: bgcolor.boxColor,
    fontSize: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    color: bgcolor.text,
  },
  icon: {
    width: 63,
    height: 60,
    backgroundColor: bgcolor.boxColor,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  search: {
    width: '100%',
    height: '100%',
  },
  CategoryContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Categorytext: {
    fontSize: 15,
    color: bgcolor.text,
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Dongle-Light',
  },
  CategorytextContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: bgcolor.boxColor,
    padding: 3,
  },
});
