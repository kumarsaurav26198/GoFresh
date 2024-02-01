import {ScrollView} from 'react-native';
import { useSelector} from 'react-redux';
import HomeCardContainer from '../../../container/HomeCardContainer';
import HomeFirebaseContainer from '../../../container/HomeFirebaseContainer';

const Home = ({navigation}) => {
  const theme = useSelector(state => state.themeReducers);
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme ? 'black' : 'white'}}>
      <HomeFirebaseContainer navigation={navigation} />
      <HomeCardContainer navigation={navigation} />
    </ScrollView>
  );
};
export default Home;