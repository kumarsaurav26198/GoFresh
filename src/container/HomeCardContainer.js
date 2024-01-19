import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import HomeCard from '../components/HomeCard';

const HomeCardContainer = ({navigation}) => {
  const homeData = useSelector(state => state.pokemonReducers);
  const dataToDisplay = homeData.map(item => item.results).flat();
  console.log('homeDatahomeData===>', homeData);
  console.log('homeDatahomeData===>', dataToDisplay);
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <View style={{padding:5}}>
      <FlatList
        data={dataToDisplay}
        keyExtractor={item => item.name}
        numColumns={2}
        renderItem={({item}) => (
          <>
            <HomeCard
              name={capitalize(item?.name)}
              onPress={() => {
                navigation.navigate('About', {
                  baseURL: item.url,
                });
              }}
            />
          </>
        )}
      />
    </View>
  );
};
export default HomeCardContainer;
const style = StyleSheet.create({});
