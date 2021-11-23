import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import {setCurrentUser} from '../hooks/redux/actions';
// 
const BaseUrl = 'https://ecommerce6803.herokuapp.com/api/v1/';
// const BaseUrl = 'http://192.168.0.108:4000/api/v1/';

const headers: any = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

export function getProducts() {
  return axios
    .get(`${BaseUrl}products/getProducts`, headers)
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));
}

export async function getAllUSers() {
  const Token: any = await AsyncStorage.getItem('jwt').then(
    (token: any) => token,
  );

  return axios
    .get(`${BaseUrl}users/getUsers`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((res: any) => res)
    .catch((err: any) => console.log(err));
}

export function getCategory() {
  return axios
    .get(`${BaseUrl}categories/getCategory`, headers)
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));
}

export function RegisterUser(RegisterUser: any) {
  return axios
    .post(`${BaseUrl}users/register`, RegisterUser)
    .then((res: any) => res)
    .catch((err: any) => console.log(err));
}

export function LoginUser(LoginUser: any) {
  return axios
    .post(`${BaseUrl}users/login`, LoginUser)
    .then((res: any) => res)
    .catch((err: any) => console.log(err));
}

export function SetCurrentLoggedInUser(dispatch: any, LoggedInUser: any) {
  if (LoggedInUser) {
    const token = LoggedInUser.token;
    AsyncStorage.setItem('jwt', token);
    const decoded = jwt_decode(token);
    const userObj = {
      decoded: decoded,
      user: LoggedInUser,
    };
    dispatch(setCurrentUser(userObj));
  } else {
    logoutUser(dispatch);
  }
}

export const logoutUser = (dispatch: any) => {
  AsyncStorage.removeItem('jwt');
  dispatch(setCurrentUser({}));
};

export async function UpdateUser(dispatch: any, UpdateUser: any, id: any) {
  const Token: any = await AsyncStorage.getItem('jwt').then(
    (token: any) => token,
  );
  const Headers: any = {
    Authorization: Token,
    'My-Custom-Header': 'foobar',
  };
  console.log(Headers);
  return axios
    .put(`${BaseUrl}users/updateUser/${id}`, UpdateUser, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((res: any) => res)
    .catch((err: any) => console.log(err));
}

export async function AddProducts(FormData: any) {
  console.log('FormData => ',FormData);
  
  const Token: any = await AsyncStorage.getItem('jwt').then(
    (token: any) => token,
  );
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${Token}`
    }
}

  console.log(Headers);
  return axios
    .post(`${BaseUrl}products/createProduct`, FormData, config)
    .then((res: any) => res)
    .catch((err: any) => console.log(err.response.data));
}

export async function DeleteProducts(DeleteItem: any) {
  const Token: any = await AsyncStorage.getItem('jwt').then(
    (token: any) => token,
  );
  console.log('Delete', DeleteItem);

  const Headers: any = {
    Authorization: Token,
    'My-Custom-Header': 'foobar',
  };


  console.log(Headers);
  return axios
    .delete(`${BaseUrl}products/deleteProducts/${DeleteItem._id}`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
    })
    .then((res: any) => res)
    .catch((err: any) => console.log(err));
}
