import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import Images from '../../../utils/Images';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../redux/action/themeActions';
import {translation} from '../../../utils/language';


const LogInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducers);
  const [ isDark, setisDark ] = useState(false);
  console.warn("themeReducers===>>", theme);
  const [ email, setEmail ] = useState('');
  const [ badEmail, setBadEmail ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ badPassword, setBadPassword ] = useState('');
  const [ dark, setDark ] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignIn = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    //  setModalVisible(true)
    navigation.navigate('DrawerNavigation');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[ styles.container, { backgroundColor: theme ? 'black' : 'white' } ]}>
        <View style={styles.imageContainer}>
          <Image source={Images.user} style={styles.imageContainer} />
        </View>
        <CustomTextInput value={email} onChange={setEmail} placeholder="Enter your email..."
          icon={Images.email}
        />
        <CustomTextInput value={email} onChange={setEmail} placeholder="Enter your password..."
          icon={Images.password}
        />
        <CustomButton title={"Log In"}
          onPress={() => {
            handleLogin();
          }} color={theme ? "#1bb57d" : "white"} backgroundColor={theme ? "white" : "#1bb57d"} />
        <CustomButton title={"Sign in"}
          onPress={() => {
            handleSignIn();
          }} color={theme ? "#1bb57d" : "white"} backgroundColor={theme ? "white" : "#1bb57d"} />
        <CustomButton title={"Apply Theme"}
          onPress={() => {
            setDark(!dark);
            dispatch(changeTheme(dark));
          }} color={theme ? "#1bb57d" : "white"} backgroundColor={theme ? "white" : "#1bb57d"} />

      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
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
    alignSelf: "center"
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