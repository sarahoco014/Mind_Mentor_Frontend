import { View, Text } from "react-native";

const BotMessage = ({message}) => {
    return (
        <View>
            <Text>
                {message}
            </Text>
        </View>
    )
}

export default BotMessage;