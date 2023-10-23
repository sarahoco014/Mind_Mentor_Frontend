import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Emojis from "./Emojis";
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
                <Text style={styles.emojiText}>How do you feel today?</Text>
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
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
        backgroundColor: COLORS.primaryLight, // Assuming COLORS has a 'primaryLight'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 50,
        margin: 20,
        borderRadius: 30,
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
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'black',
        fontFamily: 'Montserrat_600SemiBold',
    },
    emojisAndTextContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 30,
        padding: 20,
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
        marginTop: 20,
    },
    emojiText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
        color: COLORS.primaryDark, // Assuming COLORS has a 'primaryDark'
    },
});


export default HomepageContainer;
