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

  const renderDataPairs = (jsonData) => {
    return Object.keys(jsonData).map(key => (
      <View key={key} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{key}</Text>
        <Text>{jsonData[key]}</Text>
      </View>
    ));
  };

  const theme = useSelector(state => state.themeReducers.theme);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        {generateQRCode(parsedValue)}
      </View>
      <View style={{ marginTop: 20 }}>
        {renderDataPairs(parsedValue)}
      </View>
    </ScrollView>
  );
};

export default Details;
