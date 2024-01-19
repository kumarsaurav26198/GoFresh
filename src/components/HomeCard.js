import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Images from '../utils/Images';

const HomeCard = ( {onPress, name, image, type, attack}) => {

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={{paddingTop: 24, paddingLeft: 10}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
            {name}
          </Text>
          <View style={styles.cardBody}>
            <View>
              {type ? (
                <View style={styles.typeWrapper}>
                  <Text style={{color: 'white'}}>{type}</Text>
                </View>
              ) : (
                ''
              )}
              {attack ? (
                <View style={styles.attackWrapper}>
                  <Text style={{color: 'white'}}>{attack}</Text>
                </View>
              ) : (
                ''
              )}
            </View>
          </View>
        </View>
        <View style={{}}>
        <Image source={Images.Broom} style={styles.image} />
          {/* <ImageBackground
            source={require('../assets/images/eclipse.png')}
            style={{height: '80%', width: '100%', top: 50}}>
            <Image source={image} style={styles.image} />
          </ImageBackground> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    width: '49%',
    height: 143,
    borderRadius: 20,
    marginBottom: 8,
    marginRight: 8,
    backgroundColor: '#70CDB1',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  typeWrapper: {
    width: 62,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  attackWrapper: {
    width: 69,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  cardBody: {
    flexDirection: 'row',
  },
  image: {
    width: 88,
    height: 80,
    marginTop: 10,
  },
});
