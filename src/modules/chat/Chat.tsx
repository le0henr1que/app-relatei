import { ChatMessage } from './components/chat-message/ChatMessage';

export function Chat() {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex flex-col flex-1 p-3 gap-[12px]">
        <ChatMessage text="Olá! Bem-vindo ao chat futurista." isUser={false} />
        <ChatMessage text="Como posso ajudá-lo hoje?" isUser={true} />
        <ChatMessage
          text="Estou procurando informações sobre tecnologias emergentes."
          isUser={true}
        />
        <ChatMessage
          text="Claro, podemos discutir sobre IA, Blockchain, AR, VR e muito mais!"
          isUser
        />
        <ChatMessage
          isUser={false}
          text="Isso soa incrível! Estou especialmente interessado em IA e AR."
        />
        <ChatMessage
          text="Ótimo! Temos muitas informações sobre isso. Como posso te ajudar?"
          isUser
        />
      </div>
      <div className="bg-gray-200 p-4">
        {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          // value={input}
          // onChange={handleInputChange}
          placeholder="Digite sua mensagem..."
          className="w-full rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
        />
        <button type="submit">Enviar</button>
        {/* </form> */}
      </div>
    </div>
  );
}
