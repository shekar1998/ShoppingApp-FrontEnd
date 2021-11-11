import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import color from '../../color/color';
import {Select} from 'native-base';
import countries from '../../assets/countries.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useToast} from 'native-base';
import {useDispatch} from 'react-redux';
import {SelectedAddress, SetInputFields} from '../../hooks/api/ApiCalls';
import { useNavigation } from '@react-navigation/core';

interface Props {}
const bgcolor = color.light;

const Address = (props: Props) => {
  const [Name, setName] = useState('Manjunath S');
  const [Phone, setPhone] = useState('8217236803');
  const [Address1, setAddress1] = useState('#183/1, 3rd Cross, Madhuranagar');
  const [Address2, setAddress2] = useState('Nagarbhavi Main Road Bangalore');
  const [PinCode, setPinCode] = useState('560072');
  const [Country, setCountry] = useState('India');
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation:any = useNavigation();

  function handleSubmit() {
    if (
      Name === '' ||
      Phone === '' ||
      Address1 === '' ||
      Address2 === ' ' ||
      PinCode === '' ||
      Country === ''
    ) {
      toast.show({
        description: 'Please fill all the fields',
        backgroundColor: bgcolor.available,
        color: bgcolor.text,
        fontWeight: '700',
      });
    }
    const inputvalues = {
      Name: Name,
      Phone: Phone,
      Address1: Address1,
      Address2: Address2,
      PinCode: PinCode,
      Country: Country,
    };
    SetInputFields(dispatch, inputvalues);
    SelectedAddress(dispatch, inputvalues);

    navigation.navigate('MainShipping')
  }

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      enableOnAndroid={true}
      extraScrollHeight={18}
      contentContainerStyle={{
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 0,
      }}
      style={{position: 'relative'}}>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Drone.png')}
        />
      </View>
        <TextInput
          style={styles.input}
          placeholder={'Name'}
          placeholderTextColor={bgcolor.Icon}
          value={Name}
          onChangeText={(text: any) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={'Phone Number'}
          keyboardType="numeric"
          value={Phone}
          onChangeText={(text: any) => setPhone(text)}
          placeholderTextColor={bgcolor.Icon}
        />

        <TextInput
          style={styles.input}
          placeholder={'Line 1'}
          placeholderTextColor={bgcolor.Icon}
          value={Address1}
          onChangeText={(text: any) => setAddress1(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={'Line 2'}
          placeholderTextColor={bgcolor.Icon}
          value={Address2}
          onChangeText={(text: any) => setAddress2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={'Pin Code'}
          placeholderTextColor={bgcolor.Icon}
          keyboardType="numeric"
          value={PinCode}
          onChangeText={(text: any) => setPinCode(text)}
        />

        <Select
          backgroundColor={'transparent'}
          borderWidth={0.6}
          borderRadius={15}
          padding={15}
          fontSize={14}
          marginBottom={10}
          marginTop={2}
          placeholder="Country"
          width={'100%'}
          borderColor={bgcolor.Icon}
          selectedValue={Country}
          onValueChange={(itemValue: any) => setCountry(itemValue)}>
          {countries.map((data: any) => {
            return (
              <Select.Item
                key={data.code}
                label={data.name}
                value={data.name}
              />
            );
          })}
        </Select>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.submit}>
            <Text style={styles.Submittext}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  container1: {
    flex: 1,
  },
  text: {
    color: bgcolor.tabIconDefault,
    fontWeight: '700',
    fontSize: 16.5,
    marginHorizontal: 6,
    marginVertical: 10,
  },
  input: {
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderColor: bgcolor.Icon,
    borderWidth: 0.6,
    borderRadius: 15,
    paddingHorizontal: 20,
    color: bgcolor.text,
    marginVertical: 10,
  },
  submit: {
    width: Dimensions.get('window').width - 40,
    height: 60,
    alignSelf: 'center',
    backgroundColor: bgcolor.text,
    borderRadius: 18,
    justifyContent: 'center',
  },
  Submittext: {
    color: bgcolor.text2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  imageContainer: {
    width: Dimensions.get('window').width - 60,
    height: Dimensions.get('window').height / 5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
