import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Emojis from '../homepage/Emojis'; 

const MoodSelectionModal = ({ date, onClose, onMoodSelected }) => {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.dateText}>{date}</Text>
        <Emojis onEmojiPress={(emoji) => {
          onMoodSelected(date, emoji);
          onClose();
        }} />
        <Button title="Close" onPress={onClose} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      padding: 20,
    },
    dateText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
    },
  });
  
export default MoodSelectionModal;
  