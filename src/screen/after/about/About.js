import { SafeAreaView, StyleSheet, Text, } from 'react-native';

const About = (props) => {
  const base = props.route?.params;
  console.log("propspropsprops==>", base);

  return (
    <SafeAreaView>
      <Text>About</Text>
      <Text>Base experience: {base?.baseURL?.base_experience}</Text>
      <Text>Email: {base?.email}</Text>
      <Text>Password: {base?.password}</Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({});