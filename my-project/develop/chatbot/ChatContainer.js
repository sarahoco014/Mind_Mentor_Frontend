import MessageList from "./MessageList";
import {useState, useEffect} from 'react'
import { View, Text, Button } from "react-native";


const ChatContainer = () => {
    
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchAllChats = async () => {
        try {
            const response = await fetch("http://10.0.2.2:8080/chats/all");
            const data = await response.json();
            setChats(data);
            setLoading(false);
        } catch(error) {
            console.error('error: ', error);
            setError('Error occurred');
            setLoading(false);
        }
    }



    const postMessage = async () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: "message"

          })
        };
        // POST request
        
        const response = await fetch("http://10.0.2.2:8080/messages?chatId=1", requestOptions)}
    
    useEffect(()=> {fetchAllChats()}, []);
    


    return (
        <View>
            {loading ? <Text>Loading...</Text> : <MessageList chat={chats[0]} />}
        </View>
    );
            

    
}

export default ChatContainer;