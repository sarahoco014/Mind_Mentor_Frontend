import React from "react";
import { View, Button } from "react-native";
import Emojis from "./Emojis";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';




const HomepageContainer = ({navigation}) => {

    const Stack = createStackNavigator();

        return (
   
         <View>
            <Button title = "chat button" />
            <Button title = "resources" 
            onPress={() => navigation.navigate('ResourcesContainer')}/>

            <Emojis/>
        </View>

        )
    

}

export default HomepageContainer;