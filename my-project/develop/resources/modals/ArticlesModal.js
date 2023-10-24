import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
// import { Button } from "react-native-web";
// import { COLORS } from "../../src/constants/theme";
import { Linking } from "react-native";

const ArticlesModal = () => {
  return (
    <View style={styles.articlesContainer}>
      <View style={styles.article1}>
        <Text style={styles.titles}>Stress</Text>
        <Text style={styles.summaryText}>The causes of stress, the signs of stress, the affects of stress, and help that is available.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/work-life-balance')}><Text>Learn More</Text></Pressable>
      </View>
      <View style={styles.article2}>
      <Text style={styles.titles}>Work-Life Balance</Text>
        <Text style={styles.summaryText}>What a good work-life balance means, how you can help yourself and how your workplace can help.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/work-life-balance')}><Text>Learn More</Text></Pressable>
      </View>
      <View style={styles.article3}>
      <Text style={styles.titles}>Friendship and Mental Health</Text>
        <Text style={styles.summaryText}>Talking to friends about your mental health, and supporting a friend who has a mental health problem.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/friendship-and-mental-health')}><Text>Learn More</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  article1: {
    fontFamily: 'Montserrat_600SemiBold',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  article2: {
    fontFamily: 'Montserrat_600SemiBold',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  article3: {
    ffontFamily: 'Montserrat_600SemiBold',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttons: {
    fontFamily: 'Montserrat_600SemiBold',
    padding: 10,
    backgroundColor: 'lightpink',
    borderRadius: 15,
    // paddingTop: 5
  },
  titles: {
    fontWeight: 'bold',
    padding: 10
  },
  summaryText: {
    paddingBottom: 10
  }
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 15,
  //   paddingHorizontal: 20,
  //   marginVertical: 10,
  //   borderRadius: 15,
  //   elevation: 3,
  //   backgroundColor: COLORS.primary,
  //   shadowColor: COLORS.jet,
  //   shadowOffset: {
  //       width: 0,
  //       height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // }
});

export default ArticlesModal;