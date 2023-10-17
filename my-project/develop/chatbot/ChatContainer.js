



const ChatContainer = () => {
    
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const response = await fetch("http://localhost:8080/chats/1")
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
    
    useEffect(()=> {fetchChats()}, []);
    


    return (
        <View>
            

        </View>
            

    )
}



export default ChatContainer;