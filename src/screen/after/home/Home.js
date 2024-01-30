import {FlatList, StyleSheet, Text, TouchableOpacity, View,SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect, Children} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import CustomText from '../../../components/CustomText';
import MyCard from '../../../components/MyCard';

const Home = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('User is signed in', currentUser);

        setUser(currentUser);
      } else {
        console.log('User is signed out', user);
        setUser(null);
      }
    });
    return subscriber;
  }, []);

  useEffect(() => {
    fetchRealTimeData();
  }, []);
  const fetchRealTimeData = async () => {
    try {
      const ref = await database().ref('users');
      ref.on('value', snapshot => {
        const userList = snapshot.val();
        const userDataArray = Object.values(userList);
        setUserData(userDataArray);
      });
      return () => ref.off('value');
    } catch (error) {
      console.error('Error fetching realtime data:', error);
    }
  };

  const getFirstCapital = fullName => {
    if (!fullName) return '';
    const firstName = fullName.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        {user?.displayName ? (
          <CustomText
            text={`Hi , I am ${getFirstCapital(user?.displayName)}!`}
            color={'#000'}
            fontSize={24}
          />
        ) : (
          <CustomText
            text={`No user is signed in`}
            color={'#000'}
            fontSize={24}
          />
        )}
        <Text
          variant="bodyLarge"
          style={{color: 'black', fontWeight: 'bold', paddingLeft: 15}}>
          Here is my full Details
        </Text>
        <Text
          variant="bodyLarge"
          style={{color: 'black', fontWeight: '300', paddingLeft: 15}}>
          Name: {user?.displayName}
        </Text>
        <Text
          variant="bodyLarge"
          style={{color: 'black', fontWeight: '300', paddingLeft: 15}}>
          Email: {user?.email}
        </Text>
        <Text
          variant="bodyLarge"
          style={{color: 'black', fontWeight: '300', paddingLeft: 15}}>
          Uid: {user?.uid}
        </Text>

        <CustomText
          text={`Here is the all user details from Firebase upon successful login.`}
          color={'#000'}
          fontSize={24}
        />
        <FlatList
          data={userData}
          keyExtractor={item => item}
          renderItem={({item}) => {
            console.log(item);
            if (item !== null) {
              return (
                <MyCard
                  title={getFirstCapital(item?.displayName)}
                  email={item.email}
                  fullName={getFirstCapital(item?.displayName)}
                  onPress={()=>{
                    
                  }}
                />
              );
            } else {
              return null;
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;