import React, { useState } from "react";
import Layout from "./Layout";
import SpeechInput from "./SpeechInput";
import TextInput from "./TextInput";
import ChatWindow from "./ChatWindow";
import Message from "./Message";
import AudioPlayer from "./AudioPlayer";
import LoadingIndicator from "./LoadingIndicator";
import ErrorHandling from "./ErrorHandling";

const MainComponent: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleInputChange = (e: string) => {
    setInputText(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement logic for sending user input to the backend API (speech-to-text conversion and ChatGPT)
    // Update chatMessages state with the response from the API
  };

  const handleSpeechResult = (text: string) => {
    setInputText(text);
  };

  const audioPlayerSrc = ""; // Set the source for the audio player

  return (
    <Layout>
      <h1>Welcome to Sovren.AI</h1>
      <ChatWindow messages={chatMessages}>
        {chatMessages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </ChatWindow>
      <TextInput
        value={inputText}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {isLoading && <LoadingIndicator />}
      {error && <ErrorHandling error={error} />}
      <SpeechInput onSpeechResult={handleSpeechResult} />
      <AudioPlayer src={audioPlayerSrc} />
    </Layout>
  );
};

export default MainComponent;
