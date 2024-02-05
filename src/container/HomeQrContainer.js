import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import MyCard from '../components/MyCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQRProducts } from '../redux/action/qrAction';
import Loader from '../components/Loaders';

const HomeQrContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.qrReducers.data);
  const loading = useSelector(state => state.qrReducers.loading);

  useEffect(() => {
    dispatch(fetchQRProducts());
  }, [dispatch]);

  return (
    <View style={{ flex: 1, padding: 5 }}>
      {loading ? (
        <Loader/>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const jsonData = JSON.parse(item?.value || '{}');
            const Location2 = jsonData.Location2 || '';
            const Location1 = jsonData.Location1 || '';
            return (
              <MyCard
                id={item.id}
                title={jsonData.id}
                imageUri={item.qrCode}
                fullName={Location2}
                email={Location1}
                onPress={() => {
                  navigation.navigate('Details', item.value);
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default HomeQrContainer;

const styles = StyleSheet.create({});