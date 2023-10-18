import { StyleSheet } from "react-native";

const messageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Background color of the chat container
  },
//   messageContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
  bot: {
    backgroundColor: '#0073e6', // Bot message background color
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%', // Maximum message width
    color: 'white',
    marginTop: 7,
    marginLeft: 5
  },
  user: {
    backgroundColor: '#f8b8d0', // User message background color
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%', // Maximum message width
    color: 'black',
    marginTop: 7,
    marginLeft: 115
  },
  messageText: {
    color: 'white', // Text color for messages
    fontSize: 16,
  },
});

export default messageStyle;