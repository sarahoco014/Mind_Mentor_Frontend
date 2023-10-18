import { View, Text } from "react-native";

const UserMessage = ({message, style}) => {
    return (
        <View>
            <Text style={style}>
              {message}
            </Text>
        </View>
    )
}

export default UserMessage;