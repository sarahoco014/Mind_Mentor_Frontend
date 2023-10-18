import MessageList from "./MessageList";
import { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
import messageStyle from "./MessageStyle";

const ChatContainer = () => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [inputMessage, setInputMessage] = useState('');

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
            body: inputMessage,
        };
        
        // POST request
        const response = await fetch("http://10.0.2.2:8080/messages?chatId=1", requestOptions);
        
        // Clear the input field after sending the message
        setInputMessage('');
    }

    useEffect(() => {
        fetchAllChats();
    }, [inputMessage]);

    return (
        <View style={messageStyle.container}>
            <ScrollView>
                {loading ? <Text>Loading...</Text> : <MessageList chat={chats[0]} />}
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
