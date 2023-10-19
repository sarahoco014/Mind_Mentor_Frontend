import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import './emoji_images/happy.jpeg'

const Emojis = () => {
    const navigation = useNavigation();

    const handleEmojiPress = (emoji) => {
        if (emoji === 'happy') {
            navigation.navigate('ResourcesContainer');
        } else if (emoji === 'mid') {
            navigation.navigate('ChatContainer');
        } else if (emoji === 'sad') {
            navigation.navigate('ContactsModal');
        }
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => handleEmojiPress('happy')}>

                {/* ///Users/rohaibahmed/Documents/Hackathon/Frontend/Mind_Mentor_Frontend/my-project */}
                <Image
                    source={require('./emoji_images/happy.jpeg')}
                    style={{ width: 100, height: 100 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEmojiPress('mid')}>
                <Image
                    source={require('emojis/mid.png')}
                    style={{ width: 100, height: 100 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEmojiPress('sad')}>
                <Image
                    source={require('emojis/sad.png')}
                    style={{ width: 100, height: 100 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Emojis;