import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios, {all} from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../components/Loaders';
import {translation} from '../../../utils/language';
import CustomModal from '../../../components/CustomModal';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Images from '../../../utils/Images';
import {productList} from '../../../redux/action/productActions';
import {usertList} from '../../../redux/action/userAction';
import CustomText from '../../../components/CustomText';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const productData = useSelector(state => state.productReducers);
  const userData = useSelector(state => state.userReducers);
  console.log('productData===>>>>>', productData);

  console.log('userData===>>>>>', userData);

  const language = useSelector(state => state.language);

  useEffect(() => {
    console.warn('language=====>', language === translation[0]?.English);
    console.warn('translation[0]?.English=====>>>>', translation[0]?.English);
  }, [language]);

  const [first, setFirst] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    // setLoading(true);
    const configurationObject = {
      method: 'get',
      url: `https://shorturl.at/pyAH9`,
    };
    const response = await axios(configurationObject);
    setLoading(false); // Hide the modal once data is fetched

    setFirst(response.data);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme ? 'black' : 'white'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <CustomButton
          title={'Product List'}
          backgroundColor={'red'}
          color={'white'}
          onPress={() => {
            dispatch(productList());
          }}
        />
        <CustomButton
          title={'User List'}
          backgroundColor={'red'}
          color={'white'}
          onPress={() => {
            dispatch(usertList());
          }}
        />
        <CustomText text={`Product ${productData}`} fontSize={28} color={'black'} />
        <CustomText text={`User ${userData}`} fontSize={28} color={'black'} />

      </View>

      <Loader modalVisible={loading} setModalVisible={setLoading} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
