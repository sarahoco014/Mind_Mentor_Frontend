import React from "react";
import { View, Button } from "react-native";
import Emojis from "./Emojis";

const HomepageContainer = () => {

        return (
            <View>
                <Button title = "chat button" />
                <Button title = "resources" />
                <Emojis/>
            </View>
        )
    

}

export default HomepageContainer;