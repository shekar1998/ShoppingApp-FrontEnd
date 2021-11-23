import {
  Icon,
  Input,
  Text,
  Avatar,
  useToast,
  Actionsheet,
  Box,
  useDisclose,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import color from '../../color/color';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddProducts} from '../../Api/BackEndCAlls';
import mime from 'mime';

interface Props {}

const bgcolor = color.light;
const {width, height} = Dimensions.get('window');

const AdminAddProducts = (props: Props) => {
  const [Name, setName] = useState('SBBBB');
  const [Description, setDescription] = useState('DDF');
  const [Price, setPrice] = useState('54');
  const [Brand, setBrand] = useState('54');
  const [CountInStock, setCountInStock] = useState('34');
  const [Image, setImage]: any = useState('');
  const [ImageArray, setImageArray]: any = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState('Home');
  const [CategoryId, setCategoryId] = useState('617f88804767637770e8b6f9');
  const [camera, setcamera] = useState('');
  const {isOpen, onOpen, onClose} = useDisclose();

  const toast = useToast();

  const AllData: any = useSelector(
    (state: any) => state.AllCategory.AllCategory,
  );
  console.log('WWW', AllData);

  function handleSubmit() {
    let formData = new FormData();

    formData.append('image', {
      uri: Image,
      type: mime.getType(Image),
      name: Image.split('/').pop(),
    });
    formData.append('name', Name);
    formData.append('brand', Brand);
    formData.append('price', Price);
    formData.append('description', Description);
    formData.append('category', CategoryId);
    formData.append('countInStock', CountInStock);
    formData.append('images', ImageArray);

    if (
      Name === '' ||
      Description === '' ||
      Price === '0' ||
      Brand === '' ||
      CategoryId === ''
    ) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Box bg={bgcolor.like} px="2" py="1" rounded="sm" mb={5}>
              <Text color={bgcolor.text2} fontWeight={'700'}>
                Please fill all the fields
              </Text>
            </Box>
          );
        },
      });
    } else {
      AddProducts(formData).then((res: any) =>
        console.log('Add Product Result => ', res),
      ).catch((err:any) => console.log(err))
    }
  }

  const findNewImage = async () => {
    console.log('result Entering');
    setImage('');
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(async (image: any) => {
        console.log('Before =>', image);
        await setImage(image.path);
        console.log('After =>', Image);
      })
      .catch((err: any) => {
        console.log('Image => ', err);
      });
  };

  const findNewImageArray = async () => {
    console.log('result Entering');
    setImageArray([]);
    await ImagePicker.openPicker({
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(async (image: any) => {
        await setImageArray(image);
        console.log('After =>', image);
      })
      .catch((err: any) => {
        console.log('Image => ', err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Container2}>
        <View>
          <View style={styles.ImageContainer}>
            {Image.length > 0 && (
              <Avatar
                bg="purple.600"
                alignSelf="center"
                justifyContent={'flex-end'}
                size="2xl"
                source={{
                  uri: Image,
                }}>
                RB
              </Avatar>
            )}
            {Image.length === 0 && (
              <Avatar
                bg="purple.100"
                alignSelf="center"
                justifyContent={'flex-end'}
                size="2xl"
                source={{
                  uri: camera,
                }}></Avatar>
            )}
          </View>
          <View style={styles.IconContainer}>
            <TouchableOpacity  activeOpacity={0.7} onPress={findNewImage}>
              <FontAwesome name="camera" size={17} color={bgcolor.text2} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Name
        </Text>
        <Input
          p={3}
          my={2}
          value={Name}
          fontSize={14}
          borderColor={bgcolor.Icon}
          borderWidth={0.7}
          onChangeText={(text: any) => setName(text)}
          placeholder=" Product Name"
        />
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Description
        </Text>
        <Input
          p={3}
          my={2}
          value={Description}
          fontSize={14}
          borderColor={bgcolor.Icon}
          borderWidth={0.7}
          onChangeText={(text: any) => setDescription(text)}
          placeholder="Product Description"
        />
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Images
        </Text>
        <View style={styles.ImageArray}>
          {ImageArray.length > 0 ? (
            <>
              <Avatar.Group size="md" max={3}>
                {ImageArray.map((data: any) => {
                  return (
                    <Avatar
                      bg="green.500"
                      size="md"
                      source={{
                        uri: data.path,
                      }}>
                      SS
                    </Avatar>
                  );
                })}
              </Avatar.Group>
              <TouchableOpacity
                style={styles.ArrayImage}
                activeOpacity={0.7}
                onPress={findNewImageArray}>
                <View style={styles.ArrayImage3}>
                  <FontAwesome
                    style={{justifyContent: 'flex-end'}}
                    name="camera"
                    size={25}
                    color={bgcolor.Icon}
                  />
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.ArrayImage}
              activeOpacity={0.7}
              onPress={findNewImageArray}>
              <View style={styles.ArrayImage2}>
                <Text px={1} color={bgcolor.Icon} fontWeight={'600'}>
                  Choose Multiple Images{'   '}
                </Text>
                <FontAwesome name="camera" size={25} color={bgcolor.Icon} />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Brand
        </Text>
        <Input
          p={3}
          my={2}
          value={Brand}
          fontSize={14}
          borderColor={bgcolor.Icon}
          borderWidth={0.7}
          onChangeText={(text: any) => setBrand(text)}
          placeholder="Product Brand"
        />
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Category
        </Text>
        <View style={styles.ImageArray}>
          <View style={styles.ArrayImage2}>
            {SelectedCategory ? (
              <>
                <Text
                  fontSize={16}
                  px={1}
                  color={bgcolor.Icon}
                  fontStyle={'italic'}
                  fontWeight={'600'}>
                  {SelectedCategory}{' '}
                </Text>
                <TouchableOpacity onPress={onOpen} activeOpacity={0.7}>
                  <MaterialIcons
                    style={{paddingHorizontal: 5}}
                    name="keyboard-arrow-down"
                    size={27}
                    color={bgcolor.Icon}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={onOpen} activeOpacity={0.7}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width - 50,
                  }}>
                  <Text
                    fontSize={16}
                    px={1}
                    color={bgcolor.Icon}
                    fontStyle={'italic'}
                    fontWeight={'600'}>
                    Choose Catogery{'   '}
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={27}
                    color={bgcolor.Icon}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Price
        </Text>
        <Input
          p={3}
          my={2}
          type="number"
          value={Price}
          InputLeftElement={
            <Icon
              as={<FontAwesome name="rupee" />}
              size={5}
              ml="3"
              color="muted.400"
            />
          }
          keyboardType={'number-pad'}
          fontSize={14}
          borderColor={bgcolor.Icon}
          borderWidth={0.7}
          onChangeText={(text: any) => setPrice(text)}
          placeholder="Product Price"
        />
        <Text
          px={1}
          py={1}
          color={bgcolor.Icon}
          fontWeight={'600'}
          alignSelf={'flex-start'}>
          Number of products available
        </Text>
        <Input
          p={3}
          my={2}
          value={CountInStock}
          fontSize={14}
          borderColor={bgcolor.Icon}
          borderWidth={0.7}
          onChangeText={(text: any) => setCountInStock(text)}
          placeholder="Stock count"
        />
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {AllData.map((data: any) => {
            return (
              <Actionsheet.Item
                onPress={() => {
                  setSelectedCategory(data.name);
                  onClose();
                  setCategoryId(data._id);
                }}>
                {data.name}
              </Actionsheet.Item>
            );
          })}
        </Actionsheet.Content>
      </Actionsheet>
      <Button
        onPress={() => handleSubmit()}
        style={{marginBottom: 15}}
        bg={bgcolor.text}
        rightIcon={
          <Ionicons
            name="md-checkmark-done-circle"
            size={27}
            color={bgcolor.available}
          />
        }>
        Submit
      </Button>
    </ScrollView>
  );
};

export default AdminAddProducts;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: bgcolor.background,
    paddingHorizontal: 20,
  },
  Container2: {
    marginVertical: 10,
  },
  ImageContainer: {
    width: width / 3,
    height: height / 4.2 - 70,
    borderColor: '#000',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 180,
    marginBottom: 20,
    backgroundColor: bgcolor.background,
  },
  IconContainer: {
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: bgcolor.Icon,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    elevation: 10,
    top: -53,
    left: -120,
    possition: 'absolute',
  },
  ImageArray: {
    width: width - 40,
    height: 54,
    borderWidth: 0.7,
    borderColor: bgcolor.Icon,
    borderRadius: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ArrayImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 2,
  },
  ArrayImage2: {
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 11,
  },
  ArrayImage3: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
