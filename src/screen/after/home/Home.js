import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import HomeCardContainer from '../../../container/HomeCardContainer';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const language = useSelector(state => state.language);

  useEffect(() => { }, [ language ]);

  const countNumber = () => {
    const numbers = [];
    for (let index = 0; index < 6; index++)
    {
      numbers.push(index);
    }
    return numbers.join(', ');
  };

  const rectangle = () => {
    let n = 4;
    let star = '';
    for (let index = 0; index < n; index++)
    {
      for (let j = 0; j < n; j++)
      {
        star += '*';
      }
      star += '\n';
    }
    return star;
  };

  const triangle = () => {
    let n = 5;
    let star = '';
    for (i = 1; i <= n; i++)
    {
      for (j = 0; j < i; j++)
      {
        star += '*';
      }
      star += '\n';
    }
    return star;
  };

  const downTriangle = () => {
    let n = 5;
    let star = '';
    for (i = 4; i >= 0; i--)
    {
      for (j = 0; j <= i; j++)
      {
        star += '*';
      }
      star += '\n';
    }
    return star;
  };

  const rightHandTriangle = () => {
    let n = 5;
    let star = '';
    for (let i = 1; i <= n; i++)
    {
      // printing spaces
      for (let j = 0; j < n - i; j++)
      {
        star += ' ';
      }
      // printing star
      for (let k = 0; k < i; k++)
      {
        star += '*';
      }
      star += '\n';
    }
    return star;
  };

  //  console.log(cba)
  const numberPattern = () => {
    let n = 5;
    let star = '';
    for (i = 1; i <= 5; i++)
    {
      for (j = 0; j < i; j++)
      {
        star += '*';
      }
      star += '\n';
    }
    return star;
  };

  const addArryElement = () => {
    let a = [ 1, 2, 3, 4, 5, 7, 7 ];
    let arryLenght = a.length;
    let sum = 0;
    for (let index = 0; index < arryLenght; index++)
    {
      sum += a[ index ];
    }
    return sum;
  };
  const factorial = (num) => {
    for (let index = num - 1; index >= 1; index--)
    {
      num = num * index;
    }
    return num;
  };
  function vowelsAndConsonants(str) {
    let convertToLower=str.toLowerCase()
    for (let index = 0; index < convertToLower.length; index++) {
    }
    return convertToLower
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme ? 'black' : 'white' }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}></View>
      <HomeCardContainer navigation={navigation}/>
      <Text style={{ color: '#000', fontSize: 25 }}>vowels And Consonants</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{vowelsAndConsonants("Saurav Kumar")}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>Area an perimeter of Circle</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{vowelsAndConsonants("Saurav Kumar")}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>factorial</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{factorial(3)}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>factorial</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{factorial(3)}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>addArryElement</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{addArryElement()}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>CountNumber</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{countNumber()}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{'Rectangle'}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{rectangle()}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>triangle</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{triangle()}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>downTriangle</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{downTriangle()}</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>rightHandTriangle</Text>
      <Text style={{ color: '#000', fontSize: 25 }}>{rightHandTriangle()}</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
