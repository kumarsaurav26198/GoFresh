import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

const Details = (props) => {
  const data = props?.route?.params;
  console.log("Details=====>>>", data);
  const parsedValue = JSON.parse(data);
  const generateQRCode = (jsonData) => {
    const jsonString = JSON.stringify(jsonData);
    return (
      <QRCode
        value={jsonString}
        size={300}
      />
    );
  };

  const theme = useSelector(state => state.themeReducers.theme);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        {generateQRCode(parsedValue)}
      </View>
    </ScrollView>
  );
};

export default Details;
