import {Box, Container, Spinner, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getAllUSers} from '../../Api/BackEndCAlls';
import color from '../../color/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {}

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const AdminUsersDetails = (props: Props) => {
  const [Source, setSource]: any = useState();

  const LoggedInInfo = useSelector((state: any) => state.LoggedInInfo);

  useEffect(() => {
    getAllUSers()
      .then((res: any) => setSource(res.data))
      .catch((err: any) => console.log(err));
  }, []);

  async function handleSubmit() {}

  return (
    <ScrollView
      style={{
        height: Dimensions.get('window').height,
        backgroundColor: bgcolor.background,
      }}>
      {Source ? (
        Source.map((data: any) => {
          console.log('Data => ', data);

          return (
            <View
              key={data._id}
              style={{...styles.container, flexDirection: 'row'}}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: data.Image
                      ? data.Image
                      : 'https://www.looper.com/img/gallery/heres-who-fans-want-to-take-the-throne-in-black-panther-2/intro-1599765259.jpg',
                  }}
                />
              </View>
              <View style={styles.InfoContainer}>
                <Text style={styles.mainText}>{data.name}</Text>

                <Box
                  justifyContent={'space-between'}
                  width="100%"
                  alignSelf="center"
                  px="4"
                  py="1">
                  <Box
                    alignItems={'center'}
                    width="100%"
                    alignSelf="center"
                    flexDirection={'row'}>
                    <Icon name="call" size={16} color={bgcolor.Icon} />
                    <Text style={styles.Text}>+91 {data.phone}</Text>
                  </Box>
                  <Box alignItems={'center'} width="100%" flexDirection={'row'}>
                    <Icon name="email" size={16} color={bgcolor.Icon} />
                    <Text style={styles.Text}>{data.email}</Text>
                  </Box>
                  <Box alignItems={'center'} width="100%" flexDirection={'row'}>
                    <Icon name="home" size={16} color={bgcolor.Icon} />
                    <Text style={styles.Text}>{data.city}</Text>
                  </Box>
                </Box>
              </View>
            </View>
          );
        })
      ) : (
        <Spinner color="indigo.500" />
      )}
    </ScrollView>
  );
};

export default AdminUsersDetails;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    padding: 10,
  },
  ImageContainer: {
    width: 90,
    height: 90,
    backgroundColor: bgcolor.text2,
    overflow: 'hidden',
    borderRadius: 150,
    elevation: 5,
    marginTop: 15,
    padding: 3,
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 150,
    elevation: 5,
  },
  InfoContainer: {
    width: width / 1.15,
    height: 115,
    backgroundColor: bgcolor.boxColor,
    marginLeft: -60,
    borderRadius: 15,
    elevation: 4,
    paddingLeft: 55,
  },
  Text: {
    color: bgcolor.Icon,
    fontWeight: '600',
    fontSize: 13.5,
    paddingHorizontal: 5,
  },
  mainText: {
    color: bgcolor.text,
    fontWeight: '500',
    fontSize: 18,
    paddingHorizontal: 12,
    paddingTop: 4,
  },
});
