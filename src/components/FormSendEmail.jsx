import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const FormSendEmail = (props) => {
  const [fromName, setFromName] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mafodzc",
        "template_8mi8lnv",
        e.target,
        "3j6DqpgjuzdqsEr9Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setFromName("");
    setUserName("");
    setMessage("");
    setUserEmail("");
    setUserPhone("");
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-8 shadow-md px-8 py-6 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="from_name" className="text-gray-800">
            Sección
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="field">
          <label htmlFor="user_name" className="text-gray-800">
            Nombre
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="field mt-6">
        <label htmlFor="message" className="text-gray-800">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="4"
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
        <div className="field">
          <label htmlFor="user_email" className="text-gray-800">
            Email
          </label>
          <input
            type="text"
            name="user_email"
            id="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="field">
          <label htmlFor="user_phone" className="text-gray-800">
            Telefono
          </label>
          <input
            type="text"
            name="user_phone"
            id="user_phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-start mt-6">
        <button
          type="submit"
          id="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormSendEmail;
