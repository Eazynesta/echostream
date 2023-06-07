// TextInput.tsx
import React from "react";

type TextInputProps = {
  value: string;
  onChange: (text: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
};

export default TextInput;
