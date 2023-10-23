import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useMood } from './MoodContext'; 

const MoodCalendarScreen = () => {
    const { moods } = useMood();

    return (
        <View style={styles.container}>
            <Calendar
                markedDates={moods}
                markingType={'custom'}
            />
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
