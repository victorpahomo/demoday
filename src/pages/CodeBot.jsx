import { useState } from 'react';

const CodeBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: inputValue, isUser: true }]);
    setInputValue('');
    // Aquí iría la lógica para procesar la respuesta de la IA y añadirla a los mensajes
  };

  return (
    <div className="fixed bottom-0 right-0 mb-6 mr-6 z-50">
      <div className="bg-white rounded-lg shadow-md p-4 w-80 h-80 overflow-y-auto">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'
              } mb-2`}
          >
            <div
              className={`bg-gray-200 rounded-lg px-4 py-2 ${msg.isUser ? 'text-right' : 'text-left'
                }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex">
          <input value={inputValue}
            onChange={handleInput}
            placeholder="Escribe aquí tu mensaje..."
            className="mr-2 flex-grow" />

          <button type="submit" className="flex-shrink-0">
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
};

export default CodeBot;
