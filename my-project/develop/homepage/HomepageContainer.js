import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Emojis from "./Emojis";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from "../../src/constants/theme";

const HomepageContainer = ({navigation}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ChatContainer')}>
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ResourcesContainer')}>
                <Text style={styles.buttonText}>Resources</Text>
            </TouchableOpacity>
            <View style={styles.emojisAndTextContainer}>
                    <Text>How do you feel today?</Text>
                <View style={styles.emojisContainer}>
                    <Emojis/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
        },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        margin: 30,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: COLORS.primary,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: COLORS.jet,
        fontFamily: 'Montserrat_600SemiBold'
    }
});

export default HomepageContainer;
