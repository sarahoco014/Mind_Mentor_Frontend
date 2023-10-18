import { View, Text } from "react-native";

const UserMessage = ({message}) => {
    return (
        <View>
            <Text>
              {message}
            </Text>
        </View>
    )
}

export default UserMessage;