import React from "react";
import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';

const ContactsModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CONTACTS</Text>
      <Text style={styles.contactText}>
        <Pressable onPress={() => Linking.openURL('tel:116 123')}><FontAwesome name="phone" size={20} color="green" /></Pressable> Samaritans: 116 123
      </Text>
      <Text style={styles.contactText}>
      <Pressable onPress={() => Linking.openURL('tel:0300 304 7000')}><FontAwesome name="phone" size={20} color="green" /></Pressable>SANEline: 0300 304 7000
      </Text>
      <Text style={styles.contactText}>
      <Pressable onPress={() => Linking.openURL('tel:0800 58 58 58')}><FontAwesome name="phone" size={20} color="green" /></Pressable> Campaign Against Living Miserably (CALM): 0800 58 58 58 (5pm–midnight every day)
      </Text>
      <Text style={styles.contactText}>
      <Pressable onPress={() => Linking.openURL('tel:0800 689 5652')}><FontAwesome name="phone" size={20} color="green" /></Pressable>National Suicide Prevention Helpline UK: 0800 689 5652 (6pm to midnight every day)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ContactsModal;