import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({ route }) => {
    const item  = route?.params; 
    console.log(item);
    
    return (
        <View>
            <Text>Details</Text>
            <Text>Name: {item?.displayName}</Text>
            <Text>Email: {item?.email}</Text>
            <Text>Password: {item?.password}</Text>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({});
