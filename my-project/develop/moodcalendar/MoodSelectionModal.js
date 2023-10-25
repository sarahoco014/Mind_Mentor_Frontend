import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Emojis from '../homepage/Emojis'; 
import { COLORS } from "../../src/constants/theme";

const MoodSelectionModal = ({ date, onClose, onMoodSelected }) => {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.feelingText}>How are you?</Text>
        <Text style={styles.dateText}>{date}</Text>
        <Emojis onEmojiPress={(emoji) => {
          onMoodSelected(date, emoji);
          onClose();
        }} />
        <Text style={styles.belowEmojiText}>aaaaaaaaaaaaaaaa</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', 
      padding: 20,
    },
    dateText: {
      fontSize: 14,
      marginBottom: 20,
      color: 'black',
      paddingBottom: 10
    },
    feelingText: {
        paddingBottom: 20,
        paddingTop: 5,
        fontSize: 18
    },
    belowEmojiText: {
        color: 'white'
    },
    button: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: COLORS.orchidpink, 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  
export default MoodSelectionModal;
  