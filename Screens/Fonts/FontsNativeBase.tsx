import {NativeBaseProvider, extendTheme} from 'native-base';

const themeNative = extendTheme({
  fontConfig: {
    Comfortaa: {
      100: {
        normal: 'Comfortaa-Light',
        italic: 'Comfortaa-Light',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Comfortaa-Medium',
        italic: 'Comfortaa-Medium',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Comfortaa-SemiBold',
      },
      600: {
        normal: 'Comfortaa-Bold',
        italic: 'Comfortaa-Bold',
      },
    },
    Dongle: {
      200: {
        normal: 'Dongle-Light',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Dongle-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Dongle-Bold',
        italic: 'CevicheOne-Regular',
      },
    },
    MochiyPopOne: {
      200: {
        normal: 'Dongle-Light',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'MochiyPopOne-Regular',
        italic: 'MochiyPopOne-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Dongle-Bold',
        italic: 'CevicheOne-Regular',
      },
    },

  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    Comfortaa: 'Comfortaa',
    Dongle: 'Dongle',
    MochiyPopOne: 'MochiyPopOne',
  },
});

export default themeNative;
