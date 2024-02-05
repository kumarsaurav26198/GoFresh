import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

const History = () => {
  const [data, setData] = useState()
  const [runTimeData, setRunTimeData] = useState()
  useEffect(() => {
    fetchDatafromfirebsestore();
  }, []);
  useEffect(() => {
    fetchRealTimeData();
  }, []);
  const fetchDatafromfirebsestore = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('gofreshdata')
        .doc('gofreshuserdata')
        .get();
  
      if (documentSnapshot.exists) {
        const userData = documentSnapshot.data();
        console.log('User Cloud  Firestore data:', userData);
        setData(userData)
        
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };
  const fetchRealTimeData = async () => {
    try {
      const ref =await database().ref('users/1');
      ref.on('value', snapshot => {
        const userData = snapshot.val();
        console.log('Realtime Data:', userData);
        setRunTimeData(userData);
      });
      return () => ref.off('value');
    } catch (error) {
      console.error('Error fetching realtime data:', error);
    }
  };
  
  return (
    <View>
      <Text style={{color:"black",fontSize:20}}>fetch Data from firebse store </Text>
      <Text>{data?.name}</Text>
      <Text>{data?.age}</Text>
      <Text style={{color:"black",fontSize:20}}>fetch RealTime Data from firebse store </Text>
      <Text>{runTimeData?.name}</Text>
      <Text>{runTimeData?.age}</Text>
    </View>
  );
  
};

export default History;

const styles = StyleSheet.create({});