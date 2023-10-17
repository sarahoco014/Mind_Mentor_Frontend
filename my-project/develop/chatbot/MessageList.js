const MessageList = ({chat}) => {

    if (!chat || !chat.messages) {
        return <Text>No messages available</Text>;
    }

    const mappedChats = chat.messages.map((message, index) => {
        return (
        


        <Text key = {index}> 
            {message.message}
        </Text>

        )
    })

    return(<View>

        {mappedChats}

    </View>

    )
}
export default MessageList;