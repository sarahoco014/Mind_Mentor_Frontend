import MessageList from "./MessageList";
import {useState, useEffect} from 'react'
import { View, Button } from "react-native";


const ChatContainer = () => {
    
    const [chats, setChats] = useState([]);

    const fetchAllChats = async () => {
        const response = await fetch("http://localhost:8080/chats/all")
        const data = await response.json();
        setChats(data);
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
        
        const response = await fetch("http://localhost:8080/messages?chatId=1", requestOptions)}
    
    useEffect(()=> {fetchAllChats()}, []);
    


    return (
        <View>
            <MessageList chat = {chats[0]}/>
        </View>
            

    )
}

export default ChatContainer;