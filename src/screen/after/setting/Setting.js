import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Data = [
    {
      title: 'Home',
    },
    {
      title: 'About',
    },
    {
      title: 'My book',
    },
    {
      title: 'Contact',
    },
    {
      title: 'Websites',
    },
    {
      title: 'Support',
    },

    {
      title: 'Websites ',
    },
    {
      title: 'Setting',
    },
    {
      title: 'Log out',
    },
  ];
  return (
    <View style={{flex: 1}}>
      
      <View style={styles.container}>
      <Text style={styles.buttonTextWapper}>Switch to change the mode </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity style={styles.buttonWapper}>
                <Text style={styles.buttonTextWapper}>{item.title}</Text>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:"space-around",
    height: 40,
  },
  buttonTextWapper: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal',
  },
  buttonWapper: {
    width: '100%',
    paddingHorizontal: 10,
    borderWidth: 0.25,
    backgroundColor: 'transparent',
    height: 40,
    justifyContent: 'center',
  },
});
