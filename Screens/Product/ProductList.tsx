import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import data from '../../assets/data.json';
import ProductContainer from './ProductContainer';
import {DeleteProducts} from '../../Api/BackEndCAlls';

import {updateAfterUpdate} from '../../hooks/redux/actions';
import {Modal, Text, Button, HStack, VStack, Spinner} from 'native-base';
import color from '../../color/color';

interface Props {
  category?: any;
  navigation: any;
  route: any;
}
const bgcolor = color.light;

const ProductList = (props: Props) => {
  const [ProductList, setProductList]: any = useState(data);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [Loading, setLoading] = useState(false);

  const AllProducts: any = useSelector(
    (state: any) => state.AllProducts.AllProducts,
  );
  const Category: any = useSelector((state: any) => state.Category.Category);
  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);

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

  function handleLongPress() {
    console.log('cccccccc', props.route.name);
    if (props.route.name === 'ProductList') {
      setShowModal(true);
    } else console.log('Not Logged In');
  }

  async function handleEdit(item: any) {
    setLoading(true);
    console.log(item.item);
    await DeleteProducts(item.item)
      .then((res: any) => {
        setProductList(
          ProductList.filter(
            (dataValue: any) => item.item._id !== dataValue._id,
          ),
        );
      })
      .catch((err: any) => console.log(err));
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 600);
  }

  return (
    <View style={styles.container}>
      {AllProducts ? (
        <FlatList
          data={ProductList}
          renderItem={(item: any) => (
            <TouchableOpacity
              activeOpacity={0.96}
              onLongPress={() => handleLongPress()}
              onPress={() =>
                props.navigation.navigate('SingleProduct', {item: item})
              }>
              <ProductContainer
                item={item}
                navigation={props.navigation}
                route={props.route}
              />
              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header> </Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="center">
                        <Text
                          fontSize={30}
                          fontFamily={'Dongle'}
                          textAlign={'center'}
                          fontWeight="600">
                          What do you wanna do ?
                        </Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer justifyContent="space-evenly">
                    <Button
                      w={'40%'}
                      onPress={() => {
                        setShowModal2(true);
                      }}>
                      Delete
                    </Button>
                    <Button
                      w={'40%'}
                      bg={bgcolor.like}
                      _text={{color: bgcolor.text2}}
                      onPress={() => {
                        handleEdit(item);
                      }}>
                      {!Loading ? 'Edit' : <Spinner size="sm" />}
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </TouchableOpacity>
          )}
          numColumns={2}
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
        />
      ) : (
        <Text
          fontSize={30}
          fontFamily={'Dongle'}
          textAlign={'center'}
          fontWeight="600">
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
