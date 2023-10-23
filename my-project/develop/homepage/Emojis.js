import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Emojis = ({ onEmojiPress }) => {
    const navigation = useNavigation();

    const handleEmojiPress = (emoji) => {
        onEmojiPress && onEmojiPress(emoji);
    
        if (emoji === 'happy') {
            navigation.navigate('ResourcesContainer');
        } else if (emoji === 'mid') {
            navigation.navigate('ChatContainer');
        } else if (emoji === 'sad') {
            navigation.navigate('ResourcesContainer');
        }
    };    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.emojiContainer} onPress={() => handleEmojiPress('happy')}>
                <Image
                    source={require('../../emoji_images/happy.jpeg')}
                    style={styles.emojiImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emojiContainer} onPress={() => handleEmojiPress('mid')}>
                <Image
                    source={require('../../emoji_images/mid.png')}
                    style={styles.emojiImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emojiContainer} onPress={() => handleEmojiPress('sad')}>
                <Image
                    source={require('../../emoji_images/sad.png')}
                    style={styles.emojiImage}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emojiContainer: {
        marginHorizontal: 10,
    },
    emojiImage: {
        width: 75,
        height: 75,
    },
});

export default Emojis;
