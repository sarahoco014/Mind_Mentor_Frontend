const MessageList = ({chat}) => {

    const mappedChats = chat.messages.map((message, index) => {
        return (
        


        <Text key = {index}> 
            {message.text}
        </Text>

        )
    })

    return(<View>

        {mappedChats}

    </View>

    )
}
export default MessageList;