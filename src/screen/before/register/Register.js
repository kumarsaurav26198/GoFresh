import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const Register = ({ navigation }) => {
  const theme = useSelector(state => state.themeReducers);
  const [ email, setEmail ] = useState('');
  const [ badEmail, setBadEmail ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ badPassword, setBadPassword ] = useState('');
  const { colors } = useTheme();
  const handleSignUp = () => {
    navigation.navigate('LogInScreen');
  };
  const handleFacebook = () => {
    console.warn('handleFacebook');
  };
  const handleGoogle = () => {
    console.warn('handleGoogle');
  };
  const handleApple = () => {
    console.warn('handleApple');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: theme ? 'black' : 'white', padding: 20, }}>
      <View style={{ paddingBottom: 40 }}>


        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput value={email} onChange={setEmail} placeholder="Enter your username..."
          icon={Images.email}
        />
        <CustomTextInput value={email} onChange={setEmail} placeholder="Enter your email..."
          icon={Images.email}
        />
        <CustomTextInput value={email} onChange={setEmail} placeholder="Enter your password..."
          icon={Images.password}
        />
        <CustomTextInput value={email} onChange={setEmail} placeholder="Confirm your password..."
          icon={Images.password}
        />
        <CustomButton title={"Register"} onPress={() => { handleSignUp(); }} color={theme ? "#1bb57d" : "white"} backgroundColor={theme ? "white" : "#1bb57d"} />
        <CustomButton
          title={'Sign with facebook'}
          onPress={() => {
            handleFacebook();
          }}
          color={theme ? '#4765a9' : '#4765a9'}
          backgroundColor={theme ? 'white' : '#e7eaf4'}
        />
        <CustomButton
          title={'Sign with Google'}
          onPress={() => {
            handleGoogle();
          }}
          color={theme ? '#dd4d44' : '#dd4d44'}
          backgroundColor={theme ? '#fae9ea' : '#fae9ea'}
        />
        <CustomButton
          title={'Sign with Apple'}
          onPress={() => {
            handleApple();
          }}
          color={theme ? '#000' : 'black'}
          backgroundColor={theme ? '#e3e3e3' : '#e3e3e3'}
        />
        <CustomButton
          title={
            <React.Fragment>
               Have  an account
              <Text
                style={{
                  color: theme ? '#4765a9' : '#3b71f3',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                ? Sign In
              </Text>
            </React.Fragment>
          }
          onPress={() => {
            navigation.navigate('LogInScreen');
          }}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
      </View>

    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ff5a66",
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderWidth: 0.3,
    width: 100,
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  accountText: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#878786",
    textDecorationLine: "underline"
  },
  warning: {
    marginTop: 10,
    marginLeft: 24,
    left: 10,
    color: "red",
  }
});