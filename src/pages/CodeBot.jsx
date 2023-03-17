import MainLayout from "../layout/MainLayout";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Avatar,
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const API_KEY = "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"; //No pudimos subir variables de entorno a Firebase

const systemMessage = {
  // Este mensaje explica cómo debe comportarse la AI
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 months of experience, your name is CODEBOT",
};
// "You are a professor of a software academy, you cannot send code for any software language, explains the theoretical concepts"
// "Explain things like you're talking to a software professional with 2 years of experience."
function CodeBot() {
  // Estado para los mensajes
  const [messages, setMessages] = useState([
    {
      message: "¡Hola, soy CodeBot de CodeLMS! ¿Cómo puedo ayudarte?",
      sentTime: "just now",
      sender: "CodeBot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false); // Estado para el indicador de que CodeBot está escribiendo
  // Función que se ejecuta cuando se envía un mensaje
  console.log(messages);
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage]; // Añade el nuevo mensaje a los mensajes anteriores

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToCodeBot(newMessages); // Procesa el mensaje para enviarlo a la API de OpenAI
  };

  /* ---------------------------------------------------------------------------------- */
  // Función que procesa el mensaje, lo envía a la API de OpenAI y recibe la respuesta
  async function processMessageToCodeBot(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "CodeBot") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // API request body, para más info ver https://platform.openai.com/docs/api-reference/completions/create
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // Define como debe comportarse la AI
        ...apiMessages, // Mensajes anteriores
      ],
      // "temperature": 0.2,
      /* "max_tokens": 100, */
    };

    await fetch(
      "https://api.openai.com/v1/chat/completions", // API endpoint
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content, // Mensaje de respuesta de la AI
            sender: "CodeBot",
          },
        ]);
        setIsTyping(false);
      });
  }
  /* ---------------------------------------------------------------------------------- */

  return (
    <>
      <MainLayout props="CodeBot">
        <div className="mt-5">
          <MainContainer className="rounded-xl">
            <ChatContainer
              className="h-screen"
              style={{ height: "calc(100vh - 10rem)" }}
            >
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="CodeBot está escribiendo" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return (
                    <Message key={i} model={message}>
                      <Avatar
                        src="https://static3.abc.es/media/summum/2021/10/01/maxi_iglesias-kXKH--620x349@abc.jpeg"
                        name="CodeBot"
                      />
                    </Message>
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder="Escribe un mensaje"
                onSend={handleSend}
                attachButton={false}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </MainLayout>
    </>
  );
}

export default CodeBot;
