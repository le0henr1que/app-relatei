interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

export function ChatMessage({ text, isUser }: ChatMessageProps) {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} gap-[12px]`}
    >
      <div
        className={`rounded-lg p-4 max-w-xs ${
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
