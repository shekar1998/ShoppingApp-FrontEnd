import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import data from '../../assets/data.json';
import ProductContainer from './ProductContainer';

interface Props {
  category?: any;
  navigation: any;
}

const ProductList = (props: Props) => {
  const [ProductList, setProductList]: any = useState(data);

  const AllProducts: any = useSelector(
    (state: any) => state.AllProducts.AllProducts,
  );
  const Category: any = useSelector((state: any) => state.Category.Category);

  useEffect(() => {
    async function func() {
      try {
        if (Category.name === 'All') {
          setProductList(AllProducts);
          return;
        } else {
          setProductList(
            await AllProducts.filter(
              (dataValue: any) => Category._id === dataValue.category,
            ),
          );
        }
      } catch (err: any) {
        console.log(err);
      }
    }
    func();
    return () => {
      setProductList([]);
    };
  }, [Category, AllProducts]);

  return (
    <View style={styles.container}>
      {AllProducts ? (
        <FlatList
          data={ProductList}
          renderItem={(item: any) => (
            <ProductContainer item={item} navigation={props.navigation} />
          )}
          numColumns={2}
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
        />
      ) : (
        <Text
          style={{
            color: '#0008',
            fontSize: 17,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Loading...
        </Text>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
});
