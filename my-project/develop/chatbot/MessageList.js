import { View, Text, StyleSheet } from "react-native";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

const MessageList = ({ chat }) => {
  if (!chat || !chat.messages) {
    return <Text>No messages available</Text>;
  }


  const style = StyleSheet.create({
    bot: {
        color: 'red'
    },
    user: {
        color: 'blue'
    }
})

  const mappedChats = chat.messages.map((message, index) => {
    if (message.bot === true) {
      return (
        <View 
        style={style.bot}
        key={index}>
          <BotMessage
        message={message.message} />
        </View>
      );
    } else {
      return (
        <View 
        style={style.user}
        key={index}>
          <UserMessage
          message={message.message} />
        </View>
      );
    }
  });

  return (
    <View>
      {mappedChats}
    </View>
  );
};

export default MessageList;
