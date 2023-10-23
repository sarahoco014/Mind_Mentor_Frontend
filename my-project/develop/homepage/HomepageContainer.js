import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Emojis from "./Emojis";
import { COLORS } from "../../src/constants/theme";
import { useMood } from '../moodcalendar/MoodContext';

const HomepageContainer = ({ navigation }) => {
    const { moods, setMoods } = useMood();

    const handleEmojiSelection = (emoji) => {
        let date = new Date().toISOString().slice(0, 10); 
        let newMoods = { ...moods };
        let color = '';
    
        switch (emoji) {
            case 'sad':
                color = 'red';
                break;
            case 'mid':
                color = 'orange';
                break;
            case 'happy':
                color = 'green';
                break;
        }
    
        newMoods[date] = {
            customStyles: {
                container: {
                    backgroundColor: color,
                    borderRadius: 20 
                },
                text: {
                    color: 'white' 
                }
            }
        };
    
        setMoods(newMoods);
    };
    
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ChatContainer')}>
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ResourcesContainer')}>
                <Text style={styles.buttonText}>Resources</Text>
            </TouchableOpacity>
            <View style={styles.emojisAndTextContainer}>
                <Text style={styles.emojiText}>How do you feel today?</Text>
                <View style={styles.emojisContainer}>
                    <Emojis onEmojiPress={handleEmojiSelection} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: COLORS.primaryLight,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: COLORS.primary,
        shadowColor: COLORS.jet,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white',
        fontFamily: 'Montserrat_600SemiBold',
    },
    emojisAndTextContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 20,
        padding: 15,
        backgroundColor: 'white',
        shadowColor: COLORS.jet,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    emojisContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    emojiText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        color: COLORS.primaryDark,
    },
});

export default HomepageContainer;
