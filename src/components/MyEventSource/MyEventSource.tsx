import React, {useEffect, useState} from 'react';
import MessageForm from "../MessageForm";
import Messages from "../Messages/Messages";

const MyEventSource = () => {
    const [messages, setMessages] = useState<{ message:string, id: string | number}[]>([])


    const subscribe = async () => {
        const eventSource = new EventSource('https://my-chat-messenger.herokuapp.com/connect')
        eventSource.onmessage = function (event) {
            const newMessage = JSON.parse(event.data)
            setMessages(prevState => [newMessage,...prevState])
        }
    }

    useEffect(() => {
        subscribe().catch(e =>console.log(e.messages))
    },[])
    return (
        <>
           <MessageForm/>
            <Messages messages={messages}/>
        </>
    );
};

export default MyEventSource;
