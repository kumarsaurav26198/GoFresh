import axios from 'axios';
import {useEffect, useState} from 'react';
import {Text} from 'react-native';

const Contact = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      console.log('response=-==>', response);
      // setData(response?.)
    });
  };
  return (
    <>
      <Text>Contacts</Text>
    </>
  );
};
export default Contact;