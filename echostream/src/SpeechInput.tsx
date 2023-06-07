import React, { useState, useEffect } from "react";

interface SpeechInputProps {
  onSpeechResult: (text: string) => void;
}

const SpeechInput: React.FC<SpeechInputProps> = ({ onSpeechResult }) => {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;

    const startListening = () => {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript;
        onSpeechResult(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    };

    const stopListening = () => {
      if (recognition) {
        recognition.stop();
        recognition = null;
      }
    };

    if (isListening) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      stopListening();
    };
  }, [isListening, onSpeechResult]);

  const handleToggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      {isListening && <p>Listening...</p>}
    </div>
  );
};

export default SpeechInput;
