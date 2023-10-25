import { View, Text } from "react-native";

const BotMessage = ({message, style}) => {
    return (
        <View>
            <Text style={style}>
                {message}
            </Text>
        </View>
    )
}

export default BotMessage;