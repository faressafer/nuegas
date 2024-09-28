import React, { useState } from "react";
import NavbarSmall from "../components/NavbarSmall";
import SendMessage from "../components/SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue(""); 
    }
  };

  return (
    <div className="bg-[#FAFAFA] h-[80vh] flex flex-col justify-between">
      <NavbarSmall />
      <div className="flex-grow flex flex-col justify-end gap-4 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="self-end bg-[#546FFF] text-white p-2 rounded-md max-w-xs">
            {msg}
          </div>
        ))}
      </div>
      <SendMessage 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        handleSendMessage={handleSendMessage} 
      />
    </div>
  );
};

export default Chat;
