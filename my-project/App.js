import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomepageHeader from './develop/homepage/HomepageHeader';
import HomepageContainer from './develop/homepage/HomepageContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResourcesContainer from './develop/resources/ResourcesContainer';
import ChatContainer from './develop/chatbot/ChatContainer';
import Emojis from './develop/homepage/Emojis';
import ContactsModal from './develop/resources/modals/ContactsModal';


const Stack = createStackNavigator();


export default function App() {
  return (

          <NavigationContainer>
          <Stack.Navigator initialRouteName='HomepageContainer'> 
            <Stack.Screen name = "HomepageContainer" component={HomepageContainer}/>
            <Stack.Screen name = "ResourcesContainer" component={ResourcesContainer}/>
            <Stack.Screen name = "ChatContainer" component={ChatContainer}/>
            <Stack.Screen name = "ContactsModal" component={ContactsModal}/>

          </Stack.Navigator>
      </NavigationContainer>


    // <View style={styles.container}>
    // <HomepageHeader/>
    // <HomepageContainer/>
    //   {/* <Text>Mind Mentor to start working on your app!</Text> */}
    //   <StatusBar style="auto" />r
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
