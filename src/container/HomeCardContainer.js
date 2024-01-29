import {FlatList, StyleSheet, View} from 'react-native';
import HomeCard from '../components/HomeCard';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Button} from 'react-native-paper';
import {memo} from 'react'

const HomeCardContainer = ({navigation}) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const fetchPokemon = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

    const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async item => {
        const result = await axios.get(item.url);
        return result.data;
      }),
    );
    // setPokeData(prevState => [...prevState, ...pokemonData]);
    setPokeData(pokemonData);
  };
  useEffect(() => {
    fetchPokemon();
  }, [url]);

  const capital = letter => {
    // Capitalize the first letter and concatenate it with the rest of the string
    const capt = letter?.charAt(0).toUpperCase() + letter?.slice(1);
    return capt;
  };

  return (
    <View style={{padding: 5}}>
      <FlatList
        data={pokeData}
        
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => {
          // console.log("Item:", item?.sprites?.other?.home?.front_default);
          // Log the item object to the console

          return (
            <HomeCard
              id={item.id}
              name={capital(item?.name)}
              type={item?.types[0]?.type?.name}
              image={`${item?.sprites?.other?.home?.front_default}`}
              attack={'attack'}
              onPress={() => {
                navigation.navigate('About', {
                  baseURL: item,
                });
              }}
            />
          );
        }}
        ListFooterComponent={() => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              mode="contained"
              disabled={
                url === 'https://pokeapi.co/api/v2/pokemon/' ? true : false
              } onPress={() => {setUrl(prevUrl)}}
              style={{alignSelf: 'flex-start'}}>
              {`<<`} Previous
            </Button>
            <Button
              mode="contained"
              onPress={() => {
                setUrl(nextUrl);
              }}
              style={{alignSelf: 'flex-end'}}>
              Next {`>>`}
            </Button>
          </View>
        )}
      />
    </View>
  );
};
export default memo(HomeCardContainer);
const style = StyleSheet.create({});