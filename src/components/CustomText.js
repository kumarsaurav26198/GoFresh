import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CustomText({ text,color,fontSize }) {
    return (
        <View>
            <Text style={{
                color: color,
                fontSize: fontSize?fontSize:20,
                fontFamily: "fantasy",
                fontWeight: "bold",
                paddingHorizontal: 15,
            }}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {

        // paddingVertical: 5
    }
});