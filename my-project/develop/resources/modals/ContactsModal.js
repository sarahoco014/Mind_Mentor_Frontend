import React from "react";
import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';

const ContactsModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CONTACTS</Text>
      <View style={styles.contactRow}>
      <Text style={styles.contactText}>
      Samaritans: 116 123</Text><Pressable onPress={() => Linking.openURL('tel:116 123')}><FontAwesome name="phone" size={30} color="pink" style={styles.contactPhone} /></Pressable>
      </View>
      <View style={styles.contactRow}>
      <Text style={styles.contactText}>
      SANEline: 0300 304 7000 </Text><Pressable onPress={() => Linking.openURL('tel:0300 304 7000')}><FontAwesome name="phone" size={30} color="pink"  style={styles.contactPhone}/></Pressable>
      </View>
      <View style={styles.contactRow}>
      <Text style={styles.contactText}>
      Campaign Against Living Miserably (CALM): 0800 58 58 58 (5pm–midnight every day)</Text><Pressable onPress={() => Linking.openURL('tel:0800 58 58 58')}><FontAwesome name="phone" size={30} color="pink" style={styles.contactPhone}/></Pressable> 
      </View>
      <View style={styles.contactRow}>
      <Text style={styles.contactText}>
      National Suicide Prevention Helpline UK: 0800 689 5652 (6pm to midnight every day)</Text><Pressable onPress={() => Linking.openURL('tel:0800 689 5652')}><FontAwesome name="phone" size={30} color="pink" style={styles.contactPhone}/></Pressable>
      </View>
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
    justifyContent: "center",

    textAlign: "center"
    
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    textAlign: "left",
    marginRight: 35,
    flex: 3
  },
  contactPhone: {
    flex: 1,
    alignItems: "flex-end"
    
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 10
  }

});

export default ContactsModal;