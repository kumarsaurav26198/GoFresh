import messaging from '@react-native-firebase/messaging';

// Initialize Firebase Messaging
export const initializeFirebaseMessaging = async () => {
  await messaging().registerDeviceForRemoteMessages();
  handleForegroundNotification();
  // Additional initialization if needed
};

// Handle foreground notifications
export const handleForegroundNotification = () => {
  messaging().onMessage(async remoteMessage => {
    console.log('Received foreground notification', remoteMessage);
     alert(remoteMessage?.collapseKey)
    // Handle foreground notification display here
  });
};

// Handle background notifications
export const handleBackgroundNotification = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received background notification', remoteMessage);
    // Handle background notification processing here
  });
};

// Handle quit state notifications
export const handleQuitStateNotification = () => {
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log('Received quit state notification', remoteMessage);
      // Handle quit state notification processing here
    }1
  });
};

// Retrieve and store the device token
// Retrieve the device token
export const retrieveDeviceToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('Device token:', token);
      return token;
    } catch (error) {
      console.error('Error retrieving device token:', error);
      return null;
    }
  };
  
