import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';

const MyCard = ({title, email, fullName, onPress,imageUri}) => {
  const getFirstCapital = fullName => {
    if (!fullName) return '';
    const firstName = fullName.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };
  return (
    <View style={{paddingTop: 30}}>
      <TouchableOpacity onPress={onPress}>
        <Card>
          <TouchableOpacity onPress={onPress}>
            <Card.Cover source={{uri: imageUri}} style={styles.cardCover} resizeMode="cover"  />
            <View style={styles.buttonContainer}></View>
          </TouchableOpacity>
          <Card.Title
            title={title}
            titleVariant="headlineMedium"
            titleStyle={{color: '#1bb57d', fontWeight: 'bold'}}
          />
          <Card.Content>
            <Text
              variant="bodyLarge"
              style={{color: 'black', fontWeight: '300'}}>
              Location1 : {getFirstCapital(fullName)}
            </Text>
            <Text
              variant="bodyLarge"
              style={{color: 'black', fontWeight: '300'}}>
              Location2 : {getFirstCapital(email)}
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  cardCover: {

    flex: 1,
    width: '100%',
    height: 200, 
  },
});
