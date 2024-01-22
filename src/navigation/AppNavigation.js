import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';

import LogInScreen from '../screen/before/logInScreen/LogInScreen';
import Register from '../screen/before/register/Register';
import DrawerNavigation from './DrawerNavigation';
import About from '../screen/after/about/About';
import MyBook from '../screen/after/myBook/MyBook';
import Contact from '../screen/after/contact/Contact';
import Websites from '../screen/after/websites/Websites';
import Support from '../screen/after/support/Support';
import Notifications from '../screen/after/notification/Notifications';
import Images from '../utils/Images';
import ForgetPassword from '../screen/before/forgetPassword/ForgetPassword';
import CreateNewPassword from '../screen/before/createNewPassword/CreateNewPassword';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const Loading = useSelector((state) => state.loading);
    const theme = useSelector((state) => state.themeReducers);

    const screenOptions = {
        headerShown: false,
        headerTitleAlign: 'center',
        headerBackImageSource: Images.newArrow,
    };

    const commonOptions = {
        headerTitleStyle: { color: '#fff' },
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: theme ? '#000' : '#1bb57d',
        },
    };

    const loadingView = (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <ActivityIndicator size="large"/>
        </View>
    );

    return (
        <NavigationContainer>
            {Loading ? loadingView : (
                <Stack.Navigator initialRouteName="LogInScreen" screenOptions={{ ...screenOptions }}>
                    <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ ...screenOptions }} />
                    <Stack.Screen name="Register" component={Register} options={{ ...commonOptions }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ ...commonOptions }} />
                    <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{ ...commonOptions }} />
                    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
                    <Stack.Screen name="About" component={About} options={{ ...commonOptions, title: 'About' }} />
                    <Stack.Screen name="MyBook" component={MyBook} options={{ ...commonOptions, title: 'My Book'}} />
                    <Stack.Screen name="Contact" component={Contact} options={{ ...commonOptions, title: 'Contact' }} />
                    <Stack.Screen name="Websites" component={Websites} options={{...commonOptions, title: 'Websites'}} />
                    <Stack.Screen name="Support" component={Support} options={{ ...commonOptions, title: 'Support'}} />
                    <Stack.Screen name="Notifications" component={Notifications} options={{ ...commonOptions,title: 'Notification' }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default AppNavigation;
