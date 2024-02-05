import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://your-socket-server-url'; // Update with your server URL

const Support = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on('message', (data) => {
      console.log('Received message from server:', data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Support</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
