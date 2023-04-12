import { StatusBar } from 'react-native';
import OneSignal from "react-native-onesignal";
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { tagUserEmailCreate } from './src/notifications/notificationsTags';

import { CartContextProvider } from './src/contexts/CartContext';

OneSignal.setAppId("1cddcad5-61bb-4bfc-9d74-d5f152624390");

OneSignal.setEmail("marlison@email.com")

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('bentesmourao@gmail.com')

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}