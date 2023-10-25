import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../src/constants/theme';

const messageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.babypowder, // Background color of the chat container
  },
//   messageContainer: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
  bot: {
    backgroundColor: COLORS.mintgreen, // Bot message background color
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%', // Maximum message width
    color: COLORS.jet,
    marginTop: 7,
    marginLeft: 5
  },
  user: {
    backgroundColor: COLORS.orchidpink, // User message background color
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%', // Maximum message width
    color: COLORS.jet,
    marginTop: 7,
    marginLeft: 115
  },
  messageText: {
    color: COLORS.whitesmoke, // Text color for messages
    fontSize: 16,
  },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // Background color for the input container
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f4f4f4', // Input background color
    },
    sendButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: COLORS.orchidpink, // Send button background color
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        color: COLORS.jet,
    }
});

export default messageStyle;