import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Loaders';
import { translation } from '../../../utils/language';
import CustomModal from '../../../components/CustomModal';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Images from '../../../utils/Images';

const Home = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducers);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    console.warn("language=====>", language === translation[ 0 ]?.English);
    console.warn("translation[0]?.English=====>>>>", translation[ 0 ]?.English);
  }, [ language ]);

  const [ first, setFirst ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    setLoading(true);
    const configurationObject = {
      method: 'get',
      url: `https://shorturl.at/pyAH9`,
    };
    const response = await axios(configurationObject);
    setLoading(false); // Hide the modal once data is fetched

    console.log("fetchApi response=======>>> ", response.data);
    setFirst(response.data);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? "black" : "white" }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 0 }}>
        <Button
          onPress={() => setModalVisible(true)} // Open the modal when the button is pressed
          title="Open Modal"
        />

        <Text style={{ color: "black", marginBottom: 10 }}>{JSON.stringify(first)}</Text>
      </View>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} children={
        <>
          <CustomTextInput value={{}} onChange={() => { }} placeholder="Enter your name..."
            icon={Images.email}
          />
          <CustomTextInput value={{}} onChange={() => { }} placeholder="Enter your number..."
            icon={Images.agentPhone}
          />
          <CustomTextInput value={{}} onChange={() => { }} placeholder="Enter your address..."
            icon={Images.locationss}
          />
          <CustomButton
            title={"Send data"}
            onPress={() => {
              setModalVisible(false)
            }}
            color={"white"}
            backgroundColor={"#1bb57d"}
            style={{ height: 50 }}
          />

        </>
      } />
      <Loader modalVisible={loading} setModalVisible={setLoading} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
