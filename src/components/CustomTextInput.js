import { StyleSheet,  View, Image, TextInput } from 'react-native';
import React from 'react';

const  CustomTextInput = (props) => {
    const { value, placeholder, icon, type, onChange, keyboardType } = props;
    return (
            <View style={styles.container}>
                <Image source={icon} style={styles.imageContainer} />
                <TextInput style={styles.textContainer}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                     placeholderTextColor={"#d1cfcf"}
                    secureTextEntry={type ? true : false}
                    keyboardType={keyboardType}
                />
            </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderWidth: 0.6,
        borderColor:"#000",
        borderRadius: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:"white",
        marginTop: 8,
        marginBottom:8,
    },
    imageContainer: {
        width: 24,
        height: 24
    },
    textContainer: {
        marginLeft: 10,
         width:"100%",
          color:"black",
          letterSpacing:2.3,
    }
});