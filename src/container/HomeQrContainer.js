import { FlatList, StyleSheet, View } from 'react-native';
import React,{useEffect,useState} from 'react';
import MyCard from '../components/MyCard';
import axios from 'axios';

const HomeQrContainer = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [scannedData, setScannedData] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.post('http://44.200.180.0:7777/api/v1/auth/reactnativetest');
      console.log("response====>>",response)
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScan = ({ data }) => {
    setScannedData(data);
    setShowScanner(false);
  };


    const capital = letter => {
        const capt = letter?.charAt(0).toUpperCase() + letter?.slice(1);
        return capt;
      };
    
    return (
        <View style={{ padding: 5 }}>
         <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const dataValue=item?.value
          console.log("Item:", item?.value);
          return (
            <MyCard
              id={item.id}
              title={item.value.id}
              imageUri={item.qrCode}
              name={capital(item?.name)}
              onPress={() => {
                navigation.navigate('Details',   item?.value ); 
              }}
            />
          );
        }}
      />


        </View>
    );
};

export default HomeQrContainer;

const styles = StyleSheet.create({});