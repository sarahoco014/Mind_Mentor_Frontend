import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useMood } from './MoodContext'; 
import { useState } from 'react';
import MoodSelectionModal from './MoodSelectionModal'; 
import { COLORS, SIZES } from "../../src/constants/theme";
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {  Karla_400Regular, Karla_400Regular_Italic } from '@expo-google-fonts/karla';


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
          
            <Text style={styles.logMoodText}>Log your mood today and track how you're feeling!</Text>
            <View style={{backgroundColor: COLORS.orchidpink, marginHorizontal: -10, paddingTop: 50, borderRadius: 10}}>
            <Calendar
                markedDates={moods}
                markingType={'custom'}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setIsModalVisible(true);
                }}
                theme={{
                    monthTextColor: 'black', // change this to your desired color
                    todayTextColor: COLORS.orchidpink, // sets the color of today's date
                    arrowColor: COLORS.orchidpink, 
                }}
            />
            </View >
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
        backgroundColor: 'white', 
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
    },
    logMoodText: {
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: SIZES.h2,
        backgroundColor: COLORS.orchidpink,
        textAlign: 'center',
    },
});

export default MoodCalendarScreen;
