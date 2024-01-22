import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Loaders';
import HomeCardContainer from '../../../container/HomeCardContainer';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const language = useSelector(state => state.language);

  useEffect(() => {
  }, [ language ]);
  const [ loading, setLoading ] = useState(false);



  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}></View>
      <Loader modalVisible={loading} setModalVisible={setLoading} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
