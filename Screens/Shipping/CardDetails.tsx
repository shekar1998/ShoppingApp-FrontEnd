import { useNavigation, useNavigationBuilder } from '@react-navigation/core';
import {
  Box,
  Input,
  Icon,
  Text,
  Flex,
  Button,
  Checkbox,
  Toast,
  useToast,
} from 'native-base';
import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import color from '../../color/color';
import { SlecetedCreditCardInput } from '../../hooks/api/ApiCalls';

interface Props {}
const bgcolor = color.light;
const CardDetails = (props: Props) => {
  const [Month, setMonth]: any = useState('12');
  const [Year, setYear] = useState('24');
  const [CardNum, setCardNum] = useState('4591560086004306');
  const [Name, setName] = useState('MAnjunath S');
  const [CVV, setCVV] = useState('450');
  const toast = useToast();
  const navigation:any = useNavigation();
  const dispatch = useDispatch();

  async function handleSave() {
    if (
      Month === '' ||
      Year === '' ||
      CardNum === '' ||
      Name === '' ||
      CVV === ''
    ) {
      toast.show({
        title: 'Enter all the fields !',
        placement: 'top',
        marginTop: 5,
      });
    }
    const EnteredVAlue: any = {
      Month: Month,
      Year: Year,
      pymentCashback: CardNum,
      paymentName: Name,
      CVV: CVV,
      IconName:'money-check'
  };
   await SlecetedCreditCardInput(dispatch, EnteredVAlue);
   navigation.navigate('card');
  }

  return (
    <Box
      backgroundColor={bgcolor.text2}
      flex={1}
      paddingX={5}
      paddingY={2}
      w={{
        base: '100%',
        md: '25%',
      }}>
      <Box
        paddingY={5}
        w={{
          base: '100%',
          md: '25%',
        }}>
        <Text fontSize="sm">Card No.</Text>
        <Input
        value={CardNum}
          InputRightElement={
            <Icon
              as={<FontAwesome name="credit-card-alt" />}
              size={5}
              ml="3"
              color="muted.400"
            />
          }
          variant="underlined"
          placeholder="Enter Card Number"
          keyboardType="numeric"
          maxLength={16}
          fontSize={14}
          onChangeText={(text: any) => setCardNum(text)}
        />
      </Box>
      <Text fontSize="sm">Name on the Card</Text>

      <Input
         value={Name}
        variant="underlined"
        fontSize={14}
        onChangeText={(text: any) => setName(text)}
        placeholder="Enter Name"
      />
      <Flex paddingY={5} direction="row" justify="space-between">
        <Box
          paddingRight={5}
          w={{
            base: '50%',
            md: '25%',
          }}
          flexDirection={'column'}>
          <Text fontSize="sm">Expiry Date</Text>
          <Flex direction="row" justify="flex-start">
            <Input
            value={Month}
              paddingX={5}
              w={{
                base: '30%',
              }}
              variant="underlined"
              placeholder="MM"
              keyboardType="numeric"
              maxLength={2}
              returnKeyType={'next'}
              fontSize={14}
              onChangeText={(text: any) => setMonth(text)}
            />

            <Text paddingX={2} alignSelf={'flex-end'} fontSize="xl">
              /
            </Text>

            <Input
            value={Year}
              paddingX={5}
              w={{
                base: '30%',
              }}
              variant="underlined"
              placeholder="YY"
              keyboardType="numeric"
              maxLength={2}
              fontSize={14}
              onChangeText={(text: any) => setYear(text)}
            />
          </Flex>
        </Box>
        <Box
          w={{
            base: '50%',
          }}
          flexDirection={'column'}>
          <Text fontSize="sm">CVV/Security Code.</Text>
          <Input
          value={CVV}
            w={{
              base: '100%',
            }}
            variant="underlined"
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            fontSize={14}
            onChangeText={(text: any) => setCVV(text)}
          />
        </Box>
      </Flex>
      <Checkbox.Group
        paddingY={3}
        flexDirection={'row'}
        colorScheme="blue"
        accessibilityLabel="pick an item">
        <Checkbox
          marginTop={0.5}
          value="test"
          accessibilityLabel="This is a dummy checkbox"
          defaultIsChecked
        />
        <Text
          paddingX={3}
          fontWeight={'300'}
          paddingBottom={1}
          color={bgcolor.text}>
          Click to Save this card for future purposes.
        </Text>
      </Checkbox.Group>
      <Button
        onPress={() => handleSave()}
        marginY={3}
        size="md"
        colorScheme="blue">
        <Text color={bgcolor.text2}>Click to Save</Text>
      </Button>
    </Box>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: bgcolor.Icon,
    borderBottomWidth: 1,
  },
});
