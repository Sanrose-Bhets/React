import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({ chatMessage, setChatMessage }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessage = [
      ...chatMessage,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessage(newChatMessage);

    const response = Chatbot.getResponse(inputText);

    setChatMessage([
      ...newChatMessage,
      {
        message: response,
        sender: "chatbot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chatInputContainer">
      <input
        type="text"
        placeholder="Send a message to the ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chatInput"
      />
      <button onClick={sendMessage} className="sendButton">
        Send
      </button>
    </div>
  );
}

