import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import HomeQrContainer from '../../../container/HomeQrContainer';
import HomeCardContainer from '../../../container/HomeCardContainer';
import HomeFirebaseContainer from '../../../container/HomeFirebaseContainer';

const Home = ({ navigation }) => {
  const theme = useSelector(state => state.themeReducers);
  const [showScanner, setShowScanner] = useState(false); // State to control the visibility of the QR scanner

  const handleScanButtonPress = () => {
    setShowScanner(!showScanner);
  };

  const handleScannerRead = (event) => {
    console.log('Scanned data:', event.data);
  };

  const handleRevertButtonPress = () => {
    setShowScanner(false); // Revert back to the initial state (hide the QR scanner)
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View style={{ flex: 1 }}>
        <HomeFirebaseContainer/>
        <HomeQrContainer navigation={navigation} />

        {showScanner ? (
          <QRCodeScanner
            showMarker={true}
            onRead={handleScannerRead}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
              </Text>
            }
            // bottomContent={
            //   <TouchableOpacity onPress={handleRevertButtonPress} style={styles.revertButton}>
            //     <Text style={styles.revertButtonText}>Want to see list</Text>
            //   </TouchableOpacity>
            // }
          />
        ) : null}
        <HomeCardContainer/>

      </View>

      <TouchableOpacity onPress={handleScanButtonPress} style={styles.scanButton}>

        <Text style={styles.scanButtonText}>{!showScanner?"Scan QR Code":"Hide scanner"}</Text>

      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  scanButton: {
    backgroundColor: 'blue',
    padding: 15,
    margin: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  revertButton: {
    backgroundColor: 'red',
    padding: 15,
    margin: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  revertButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
