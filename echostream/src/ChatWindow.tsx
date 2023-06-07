import React from "react";

type ChatWindowProps = {
  messages: string[];
  children: React.ReactNode;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className="chat-message">
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
