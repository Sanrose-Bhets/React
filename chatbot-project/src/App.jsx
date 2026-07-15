import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import { ChatMessages } from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/robot.png'
import './App.css'

function App() {
  //lifting the state up AKA making a global variable accross all componenets
  const [chatMessage, setChatMessage] = useState([
    { message: "Hello Chatbot", sender: "user", id: "id1" },
    {
      message: "Hello! How can I help you?",
      sender: "chatbot",
      id: "id2",
    },
    { message: "todays date", sender: "user", id: "id3" },
    { message: "Today is July 7", sender: "chatbot", id: "id4" },
  ]);
  //array destructuring, the order ALWAYS MATTERS
  //const [chatMessage, setChatMessage] = array;
  //const chatMessage = array[0];
  //const setChatMessage = array[1];
  return (
    <div className="appContainer">
      
      <ChatMessages 
        chatMessage={chatMessage}
        
      
      />
      <ChatInput 
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
      />
    </div>
  );
}

export default App
