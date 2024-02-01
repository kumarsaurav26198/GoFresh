import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';

const MyCard = ({ title, email, fullName,onPress }) => {
  return (
    <View style={{ paddingTop: 30 }}>

      <TouchableOpacity onPress={onPress}>
        <Card>
          <TouchableOpacity>
            {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
            {/* <View style={styles.buttonContainer}>
            <Card.Actions>
              <Button onPress={() => {}}>❤️</Button>
            </Card.Actions>
          </View> */}
          </TouchableOpacity>
          <Card.Title
            title={title}
            titleVariant="headlineMedium"
            titleStyle={{ color: '#1bb57d', fontWeight: 'bold' }}
          />
          <Card.Content>
            <Text variant="bodyLarge" style={{ color: 'black', fontWeight: '300' }}>Full Name : {fullName}</Text>
            <Text variant="bodyLarge" style={{ color: 'black', fontWeight: '300' }}>Email : {email}</Text>

          </Card.Content>
          {/* <Card.Actions>
          <Button onPress={() => {}}>Add To Cart</Button>
        </Card.Actions> */}
        </Card>
      </TouchableOpacity>

    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
