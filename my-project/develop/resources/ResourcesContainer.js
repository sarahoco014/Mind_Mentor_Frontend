import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import ArticlesModal from "./modals/ArticlesModal";
import VideosModal from "./modals/VideosModal";
import ContactsModal from "./modals/ContactsModal";
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {  Karla_400Regular, Karla_400Regular_Italic } from '@expo-google-fonts/karla';
import { COLORS } from "../../src/constants/theme";

const ResourcesContainer = () => {
  const [articlesModalOpen, setArticlesModalOpen] = useState(false);
  const [videosModalOpen, setVideosModalOpen] = useState(false);
  const [contactsModalOpen, setContactsModalOpen] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View style={styles.container}>
     
        <Pressable title="Articles" onPress={() => setArticlesModalOpen(true)} style={styles.button}>
          <Text style={styles.text}>Articles</Text>
        </Pressable>
        <Pressable title="Videos" onPress={() => setVideosModalOpen(true)} style={styles.button}>
          <Text style={styles.text}>Videos</Text>
        </Pressable>
        <Pressable title="Contacts" onPress={() => setContactsModalOpen(true)} style={styles.button}>
          <Text style={styles.text}>Contacts</Text>
        </Pressable>
     
      {/* Articles Modal */}
      <Modal visible={articlesModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <ArticlesModal />
          <Pressable title="Close Modal" onPress={() => setArticlesModalOpen(false)} style={styles.modal}>
            <Text>Close Modal</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Videos Modal */}
      <Modal visible={videosModalOpen} animationType="slide">
        <View style={styles.modalContent}>
        <VideosModal/>
          <Pressable title="Close Modal" onPress={() => setVideosModalOpen(false)} style={styles.modal}>
            <Text>Close Modal</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Contacts Modal */}
      <Modal visible={contactsModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <ContactsModal/>
          <Pressable title="Close Modal" onPress={() => setContactsModalOpen(false)} style={styles.modal} >
            <Text>Close Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: COLORS.babypowder,
  },

  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat_600SemiBold",
    padding: 20,
  },

  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 30,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: COLORS.primary,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    margin: 30,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLORS.jet,
    fontFamily: 'Montserrat_600SemiBold'
  },
});

export default ResourcesContainer;




