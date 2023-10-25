import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, StatusBar } from "react-native";
import Emojis from "./Emojis";
import { COLORS } from "../../src/constants/theme";
import { useMood } from '../moodcalendar/MoodContext';
import HomepageHeader from "./HomepageHeader";
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {  Karla_400Regular, Karla_400Regular_Italic } from '@expo-google-fonts/karla';

const HomepageContainer = ({ navigation }) => {
    const { moods, setMoods } = useMood();

    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_300Light,
        Karla_400Regular,
        Karla_400Regular_Italic,
        
      });
      if (!fontsLoaded) {
        return null;
      }

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
            
            <HomepageHeader/>
            <View style={styles.emojisAndTextContainer}>
                <Text style={styles.emojiText}>How do you feel today?</Text>
                <View style={styles.emojisContainer}>
                    <Emojis onEmojiPress={handleEmojiSelection} />
                </View>
            </View>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.buttonText}>I want to chat...</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Resources')}>
                <Text style={styles.buttonText}>I need resources...</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        // paddingHorizontal: 10,
        // paddingVertical: 15,
        backgroundColor: 'white',
    
    },
    buttonContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 40,
        margin: 30,
        marginLeft: 50,
        marginRight: 50,
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
        letterSpacing: 0.5,
        color: COLORS.jet,
        fontFamily: 'Montserrat_600SemiBold',
    },
    emojisAndTextContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 20,
        // marginRight: 50,
        // marginLeft: 50,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: COLORS.jet,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: 20,
    },
    emojisContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    emojiText: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 18,
        marginBottom: 10,
        color: COLORS.primaryDark,
    },
});

export default HomepageContainer;
