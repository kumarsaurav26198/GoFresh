import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = (props) => {
  const base=props.route?.params?.baseURL
  console.log("propspropsprops==>",base)
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    console.log("alert");
    axios.get(base).then((response) => {
      console.log("fetchData====>>>", response?.data);
      // setData(response?.data);
    });
  };

  return (
    <SafeAreaView>
      <Text>About</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (<>
            <Text>{`${item.id}`} {item.title}</Text>
            <Text>{item.body}</Text>
          </>);
        }} />
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});