import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Loaders';
import { translation } from '../../../utils/language';
import { pokemonData } from '../../../redux/action/pokemonDataAction';
import HomeCardContainer from '../../../container/HomeCardContainer';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const language = useSelector(state => state.language);

  useEffect(() => {
    console.warn('language=====>', language === translation[ 0 ]?.English);
    console.warn('translation[0]?.English=====>>>>', translation[ 0 ]?.English);
  }, [ language ]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchPokemonData();
  }, []);
  const fetchPokemonData = () => {
    dispatch(pokemonData());
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}></View>
      <HomeCardContainer navigation={navigation} />
      <Loader modalVisible={loading} setModalVisible={setLoading} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
