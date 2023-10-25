import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
// import { Button } from "react-native-web";
// import { COLORS } from "../../src/constants/theme";
import { Linking } from "react-native";

const VideosModal = () => {
  return (
    <View style={styles.videosContainer}>
      <View style={styles.video1}>
        <Text style={styles.titles}>5 Minute Meditation to Clear Your Mind</Text>
        <Text style={styles.summaryText}>This 5 minute guided meditation will help you clear your mind.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=BVZS8XqNyEY&ab_channel=GreatMeditation')}><Text>Learn More</Text></Pressable>
      </View>
      <View style={styles.video2}>
      <Text style={styles.titles}>Coping with Stress</Text>
        <Text style={styles.summaryText}>2 minute video suggesting strategies for coping with stress.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=TK5KOXLT15g&ab_channel=GCFLearnFree')}><Text>Learn More</Text></Pressable>
      </View>
      <View style={styles.video3}>
      <Text style={styles.titles}>Friends Helping Friends</Text>
        <Text style={styles.summaryText}>Sometimes asking for help and getting mental health support can feel scary or overwhelming. This video talks about getting mental health support, even if it feels hard, it can be helpful.</Text>
        <Pressable style={styles.buttons} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jlLIBuSwiMc&ab_channel=APAHelpCenter')}><Text>Learn More</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  video1: {
    fontFamily: 'Montserrat_600SemiBold',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  video2: {
    fontFamily: 'Montserrat_600SemiBold',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  video3: {
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

export default VideosModal;