import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
   console.log(theme)
  return (
    <View style={{ padding: 10, margin: 10 }}>
      <Text style={{ color: theme }}>I am styled by theme context!</Text>
    </View>
  );
}

const Stores = () => {
  return (
    <ThemeContext.Provider value='red'>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:"light"}}>Stores</Text>
        <ThemedButton />
      </View>
    </ThemeContext.Provider>
  );
};

export default Stores;

const styles = StyleSheet.create({});