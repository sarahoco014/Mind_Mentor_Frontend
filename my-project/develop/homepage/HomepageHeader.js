import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { COLORS, SIZES } from "../../src/constants/theme";
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {  Karla_400Regular, Karla_400Regular_Italic } from '@expo-google-fonts/karla';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";



const HomepageHeader = () => {

    const [user, setUser] = useState("");
    const [error, setError] = useState('');

    const fetchUserId = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8080/users/1");
            const data = await response.json();
            setUser(data);

        } catch (error) {
            console.error('error: ', error);
            setError('Error occurred');

        }
    }

    useEffect(() => {
        fetchUserId();
    }, []);

    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_300Light,
        Karla_400Regular,
        Karla_400Regular_Italic,
        
      });
      if (!fontsLoaded) {
        return null;
      }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar translucent={false} backgroundColor={COLORS.primary} />
            <View style = {styles.header}>
                {/* <Ionicons name='md-heart-outline'size={28} color={COLORS.jet}/>
                <Ionicons name='settings-outline' size={28} color={COLORS.jet}/> */}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: COLORS.primary, height: 100}}>
                    <Text style={styles.headerTitle}>Welcome Back,</Text>
                    <Text style={styles.headerTitle}>{user.firstName}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row-reverse',
        backgroundColor: COLORS.primary,
        justifyContent: 'flex-start', 
        
    },

    headerTitle: {
        color: COLORS.jet,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: SIZES.h1,
        paddingHorizontal: 20,
    }

})
export default HomepageHeader;