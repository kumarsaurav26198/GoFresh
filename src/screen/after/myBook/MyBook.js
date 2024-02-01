import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Images from '../../../utils/Images';
import database from '@react-native-firebase/database';


const MyBook = () => {
  const [ bookname, setBookname ] = useState('');
  const [ data, setData ] = useState([]);
  const [ isUpdate, setIsUpdate ] = useState(false);
  const [index, setIndex] = useState()
  const theme = useSelector(state => state.themeReducers);
  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try
    {
      const ref = await database().ref('booktodo');
      ref.on('value', snapshot => {
        const booktododata = snapshot.val();
        console.log('Realtime Data length:', booktododata.length);
        setData(booktododata);

      });
      return () => ref.off('value');
    } catch (error)
    {
      console.error('Error fetching realtime data:', error);
    }
  };

  const handleAddToList = async (bookname) => {
    try
    {
      const res = await database().ref(`booktodo/${ data?.length?data.length:1 }`).set({
        book: bookname
      });
      console.log(res);
      // setData(res);
      setBookname("");
      fetchTodo();
    } catch (error)
    {
      console.log(error);
    }
  };

  const handleUpdateData = async (bookname,index) => {
    try
    {
      console.log(index,bookname);
      const res = await database().ref(`booktodo/${index}`).set({
        book: bookname
      });
      console.log(res);
      setData(res);
      setBookname("")
      fetchTodo();
      setIsUpdate(false)
    } catch (error)
    {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text style={{ color: "black", fontSize: 20, textAlign: "center", paddingTop: 10, fontWeight: "bold" }}>Todo Book List</Text>
      <CustomTextInput
        value={bookname}
        onChangeText={(text) => { setBookname(text); }}
        placeholder="Enter your book name..."
        icon={Images.sideMyBook}
      />
      {
        isUpdate ? <CustomButton
          title={'Update'}
          onPress={() => {
            handleUpdateData(bookname,index);
          }}
          color={theme ? '#fff' : 'white'}
          backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
        /> :
          <CustomButton
            title={'Add to List'}
            onPress={() => {
              handleAddToList(bookname);
            }}
            color={theme ? '#fff' : 'white'}
            backgroundColor={theme ? '#3b71f3' : '#3b71f3'}
          />
      }



      <Text style={{ color: "black", fontSize: 20, textAlign: "center", paddingTop: 10, fontWeight: "bold" }}>Book List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item} 
        renderItem={({ item, index }) => {
          console.log(item);
          if (item !== null)
          {
            return (
              <TouchableOpacity onPress={() => {
                setBookname(item?.book)
                setIsUpdate(true)
                setIndex(index)
              }}>
                <Text style={{ color: "black", fontSize: 20, paddingTop: 10, fontWeight: "bold" }}>{index}. {item?.book}</Text>
              </TouchableOpacity>
            );
          } else
          {
            return null; // or any other default component you wish to render
          }

        }}
      />


    </SafeAreaView>
  );
};

export default MyBook;

const styles = StyleSheet.create({});