import { Image, Text, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../redux/action/themeActions';

const LogInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  // console.warn('themeReducers===>>', theme);
  const [ email, setEmail ] = useState('');
  const [ badEmail, setBadEmail ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ badPassword, setBadPassword ] = useState('');
  const [ dark, setDark ] = useState(true);
  const [ modalVisible, setModalVisible ] = useState(false);

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    navigation.navigate('DrawerNavigation');
  };

  const handleForget = () => {
    navigation.navigate('ForgetPassword');
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: theme ? 'black' : 'white',
        paddingHorizontal: 15,
      }}>
      <View style={{ paddingBottom: 40 }}>
        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput
          value={email}
          onChange={setEmail}
          placeholder="Enter your email..."
          icon={Images.email}
        />
        <CustomTextInput
          value={email}
          onChange={setEmail}
          placeholder="Enter your password..."
          icon={Images.password}
        />
        <CustomButton
          title={'Log In'}
          onPress={() => {
            handleLogin();
          }}
          color={theme ? '#fff' : 'white'}
          backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
        />
        <CustomButton
          title={
            <React.Fragment>
              Forget password
              <Text
                style={{ color: '#3b71f3', fontWeight: 'bold', fontSize: 22 }}>
                {' '}
                ?
              </Text>
            </React.Fragment>
          }
          onPress={() => {
            handleForget();
          }}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
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
              Don't have  an account
              <Text
                style={{
                  color: theme ? '#4765a9' : '#3b71f3',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                ? Create New
              </Text>
            </React.Fragment>
          }
          onPress={() => {
            handleRegister();
          }}
          color={theme ? 'white' : '#000'}
          backgroundColor={theme ? 'black' : 'white'}
        />
        <CustomButton
          title={'Apply Theme'}
          onPress={() => {
            setDark(!dark);
            dispatch(changeTheme(dark));
          }}
          color={theme ? '#1bb57d' : 'white'}
          backgroundColor={theme ? 'white' : '#1bb57d'}
        />
      </View>
    </ScrollView>
  );
};

export default LogInScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff5a66',
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderWidth: 0.3,
    width: 100,
    borderRadius: 100,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  accountText: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#878786',
    textDecorationLine: 'underline',
  },
  warning: {
    marginTop: 10,
    marginLeft: 24,
    left: 10,
    color: 'red',
  },
});
