import { View, Text } from "react-native";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

const MessageList = ({chat}) => {

    if (!chat || !chat.messages) {
        return <Text>No messages available</Text>;
    }

    const mappedChats = chat.messages.map((message, index) => {
        
        if (message.bot === true) {
            return (
                <BotMessage
                // style={botMessageStyle}
                message = {message.message}
                key = {index}/>
            )
        } else {
            return (
                <UserMessage
                // style={userMessageStyle}
                message = {message.message}
                key = {index}/>
            )
        }   
    })

    return(<View>

        {mappedChats}

    </View>

    )
}
export default MessageList;