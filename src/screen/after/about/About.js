import {  SafeAreaView, StyleSheet, Text, } from 'react-native';

const About = (props) => {
  const base=props.route?.params
  console.log("propspropsprops==>",base)

  return (
    <SafeAreaView>
      <Text>About</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (<>
            <Text>{`${item.id}`} {item.title}</Text>
            <Text>{item.body}</Text>
          </>);
        }} /> */}
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});