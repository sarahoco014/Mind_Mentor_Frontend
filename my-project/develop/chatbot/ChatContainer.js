import MessageList from "./MessageList";
import { useState, useEffect, useRef } from 'react';
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
import messageStyle from "./MessageStyle";

const ChatContainer = () => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const scrollViewRef = useRef();
    const [conversation, setConversation] = useState([]);


    const fetchAllChats = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8080/chats/all");
            const data = await response.json();
            setChats(data);
            setLoading(false);
        } catch (error) {
            console.error('error: ', error);
            setError('Error occurred');
            setLoading(false);
        }
    }

    const postMessage = async () => {

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({message: inputMessage}),
        };

        try {
            // POST request to the backend API
            const response = await fetch("http://10.0.2.2:8080/messages?chatId=1", requestOptions);

            if (response.status === 201) {
                const botResponse = await response.json();
                const botMessage = {
                    isBot: true, // Set the isBot boolean to indicate the message is from the bot
                    content: botResponse.text, 
                };

                setConversation([...conversation, botMessage]);

                
            } else {
                console.error('Error occurred:', response.statusText);
            }

        } catch (error) {
            console.error('Error ocurred: ', error);
        }

        
        // Clear the input field after sending the message
        setInputMessage('');
    }

    useEffect(() => {
        fetchAllChats();
    }, [inputMessage]);

    const scrollToBottom = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [chats]);

    return (
        <View style={messageStyle.container}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={scrollToBottom} // Scroll to bottom when content size changes
            >
                {loading ? <Text>Loading...</Text> : <MessageList chat={conversation} />}
            </ScrollView>
            <View style={messageStyle.inputContainer}>
                <TextInput
                    style={messageStyle.input}
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChangeText={(text) => setInputMessage(text)}
                />
                <TouchableOpacity
                    style={messageStyle.sendButton}
                    onPress={postMessage}
                >
                    <Text style={messageStyle.buttonText} >Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ChatContainer;