import React, { useState,useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigation from './src/navigation/AppNavigation';
import { PaperProvider } from 'react-native-paper';
import { handleBackgroundNotification, handleForegroundNotification, handleQuitStateNotification, initializeFirebaseMessaging, retrieveDeviceToken } from './src/components/PushNotificationHelper';
const darkTheme = {
  background: '#121212',
  foreground: '#fff',
};
const lightTheme = {
  background: '#fff',
  foreground: '#000',
};
const App = () => {
  useEffect(() => {
    
    initializeFirebaseMessaging();
    handleForegroundNotification();
    handleBackgroundNotification();
    handleQuitStateNotification();
   const FCMTOKEN= retrieveDeviceToken(); 

  }, [])
  
  const [ isDarkTheme, setIsDarkTheme ] = useState(false);
  
  LogBox.ignoreLogs([ 'Warning: ...' ]);
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <StatusBar
          barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkTheme ? 'black' : '#fff'}
        />
        <Provider store={store}>
          <PaperProvider>
            <AppNavigation />
          </PaperProvider>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
export default App;