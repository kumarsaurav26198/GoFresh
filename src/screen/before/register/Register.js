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
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

const Register = ({ navigation }) => {
  const theme = useSelector(state => state.themeReducers);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [confirmPass, setConfirmPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  const handleSignUp = async () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');

    if (!email || !password || !confirmPass ||!name) {
      setConfirmPassError('Please fill in all fields');
      return;
    }

    if (password !== confirmPass) {
      setConfirmPassError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!', userCredential);
      await userCredential.user.updateProfile({
        displayName: name
      });
  
      console.log('User account created & signed in!');
      console.log('User profile updated:', userCredential.user);
  
      await database().ref('users/' + userCredential.user.uid).set({
        email: email,
        displayName: name,
        password:password
      });
  
      console.log('User details stored in the database!');
      navigation.navigate("LogInScreen");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setEmailError('That email address is invalid!');
      } else {
        console.error(error);
        setEmailError('The supplied auth credential is not supported!');
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: theme ? 'black' : 'white', padding: 20, }}>
      <View style={{ paddingBottom: 40 }}>
        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name..."
          icon={Images.user}
        />
        <CustomTextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email..."
          icon={Images.email}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <CustomTextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter your password..."
          icon={Images.password}
        />
        <CustomTextInput
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          placeholder="Confirm your password..."
          icon={Images.password}
          type={true}
        />
        {confirmPassError ? <Text style={styles.errorText}>{confirmPassError}</Text> : null}
        <CustomButton
          title={"Register"}
          onPress={handleSignUp}
          color={theme ? "#1bb57d" : "white"}
          backgroundColor={theme ? "white" : "#1bb57d"}
        />
        <CustomButton
          title={
            <React.Fragment>
              Have an account
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