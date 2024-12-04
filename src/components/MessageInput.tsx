import { ChangeEvent } from 'react';

interface MessageInputProps {
  message: string;
  onChange: (message: string) => void;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
}

export function MessageInput({
  message,
  onChange,
  label,
  placeholder = 'Enter your message...',
  readOnly = false
}: MessageInputProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        rows={3}
      />
    </div>
  );
}