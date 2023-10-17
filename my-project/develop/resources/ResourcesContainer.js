import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import ArticlesModal from "./modals/ArticlesModal";
import VideosModal from "./modals/VideosModal";
import ContactsModal from "./modals/ContactsModal";

const ResourcesContainer = () => {
  const [articlesModalOpen, setArticlesModalOpen] = useState(false);
  const [videosModalOpen, setVideosModalOpen] = useState(false);
  const [contactsModalOpen, setContactsModalOpen] = useState(false);

  return (
    <View>
      <Button title="Articles" onPress={() => setArticlesModalOpen(true)} />
      <Button title="Videos" onPress={() => setVideosModalOpen(true)} />
      <Button title="Contacts" onPress={() => setContactsModalOpen(true)} />

      {/* Articles Modal */}
      <Modal visible={articlesModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <ArticlesModal />
          <Button title="Close Modal" onPress={() => setArticlesModalOpen(false)} />
        </View>
      </Modal>

      {/* Videos Modal */}
      <Modal visible={videosModalOpen} animationType="slide">
        <View style={styles.modalContent}>
        <VideosModal/>
          <Button title="Close Modal" onPress={() => setVideosModalOpen(false)} />
        </View>
      </Modal>

      {/* Contacts Modal */}
      <Modal visible={contactsModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <ContactsModal/>
          <Button title="Close Modal" onPress={() => setContactsModalOpen(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResourcesContainer;




