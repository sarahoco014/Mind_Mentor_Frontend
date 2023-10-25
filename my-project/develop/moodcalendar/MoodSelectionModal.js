import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Emojis from '../homepage/Emojis'; 

const MoodSelectionModal = ({ date, onClose, onMoodSelected }) => {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.feelingText}>How are you feeling?</Text>
        <Text style={styles.dateText}>{date}</Text>
        <Emojis onEmojiPress={(emoji) => {
          onMoodSelected(date, emoji);
          onClose();
        }} />
        <Text style={styles.belowEmojiText}>aaaaaaaaaaaaaaaa</Text>
        <Button title="Close" onPress={onClose}
        style={styles.button} />
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
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
      paddingBottom: 10
    },
    feelingText: {
        paddingBottom: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    belowEmojiText: {
        color: 'white'
    }
  });
  
export default MoodSelectionModal;
  