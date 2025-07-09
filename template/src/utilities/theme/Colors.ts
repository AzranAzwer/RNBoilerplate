import {createTheme} from '@rneui/themed';
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    custom: {
      tabBackground: string;
      forgotPassword: string;
      primary?: string;
      textSecondary?: string;
      textPrimary?: string;
      borderColor?: string;
      cardBackground?: string;
    };
  }
}

const theme = createTheme({
  darkColors: {
    background: '#121212',
    primary: '#0000FF',
    secondary: '#EFF4F9',
    custom: {
      tabBackground: '#212429',
      primary: '#FFD603',
    },
  },
  lightColors: {
    background: '#008CFF1A',
    primary: '#FFFFFF',
    secondary: '#EFF4F9',
    custom: {
      tabBackground: '#EDEDED',
      forgotPassword: '#FCA72B',
      primary: '#0000FF',
      textSecondary: '#989EB4',
      borderColor: '#EFF4F9',
      textPrimary: '#09176B',
      cardBackground: '#F2F9FF',
    },
  },
  mode: 'light',
});

export default theme;
