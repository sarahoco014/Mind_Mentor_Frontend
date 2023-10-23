import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useMood } from './MoodContext'; 
import { useState } from 'react';
import MoodSelectionModal from './MoodSelectionModal'; 


const MoodCalendarScreen = () => {
    const { moods, setMoods } = useMood();

    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleMoodSelectionForDate = (date, mood) => {
        let newMoods = { ...moods };
        let color = '';
      
        switch (mood) {
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
              borderRadius: 20,
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
            <Calendar
                markedDates={moods}
                markingType={'custom'}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setIsModalVisible(true);
                }}
            />
            {isModalVisible && (
                <MoodSelectionModal 
                    date={selectedDate}
                    onClose={() => setIsModalVisible(false)}
                    onMoodSelected={handleMoodSelectionForDate}
                />
            )}
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default MoodCalendarScreen;
