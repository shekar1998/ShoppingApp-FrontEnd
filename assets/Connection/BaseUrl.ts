import {Platform} from 'react-native';

let BaseUrl: any = '';
{
  Platform.OS === 'android'
    ? (BaseUrl = 'http://192.168.0.108:4000/api/v1')
    : (BaseUrl = 'https://localhost:4000/api/v1');
}

export default BaseUrl;
