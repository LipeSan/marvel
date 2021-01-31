import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

//PAGES
import Home from '../pages/Home';
import HeroDetails from '../pages/HeroDetails';
import { Button } from 'react-native';

const Stack = createStackNavigator();



const MainStack = () => {

    const options:StackNavigationOptions = {
            headerTitle: "TEST",
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),

    }
    return (

        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='HeroDetails' component={HeroDetails} options={options}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainStack;