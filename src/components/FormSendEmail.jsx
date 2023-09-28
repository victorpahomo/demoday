import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

const FormSendEmail = (props) => {
  const name = useSelector((state) => state.user.user.name);
  const cc = useSelector((state) => state.user.user.cc);
  const email = useSelector((state) => state.user.user.email);
  const groupStudent = useSelector((state) => state.user.user.groupStudent);

  console.log(useSelector((state) => state.user.user.cc));

  const [fromName, setFromName] = useState("");
  const [userName, setUserName] = useState("");
  const [userCc, setUserCc] = useState("");
  const [userGroup, setUserGroup] = useState("");
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
          toast.success("¡Tu solicitud ha sido enviada con éxito!", {
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          });
        },
        (error) => {
          toast.error("Oops, algo salió mal. ¡Inténtalo de nuevo!", {
            duration: 8000,
          });
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
    setUserGroup("");
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto shadow-md px-4 py-2 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="">
          <label htmlFor="user_group" className="text-gray-800">
            Grupo
          </label>
          <input
            type="text"
            name="user_group"
            id="user_group"
            value={groupStudent}
            onChange={(e) => setUserGroup(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="from_name" className="text-gray-800">
            Tipo de solicitud
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full mt-1">
          <label htmlFor="user_name" className="text-gray-800">
            Documento de identidad
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={cc}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full mt-1">
          <label htmlFor="user_name" className="text-gray-800">
            Nombres y apellidos
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mt-2">
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
          className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-2">
        <div className="">
          <label htmlFor="user_email" className="text-gray-800">
            Correo electrónico
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="user_phone" className="text-gray-800">
            Numero de teléfono
          </label>
          <input
            type="text"
            name="user_phone"
            id="user_phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 w-full h-20">
        <button
          onClick={() => {
            document.getElementById("my-modal-6").checked = false;
          }}
          type="submit"
          id="button"
          className="btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-1/3 h-10"
        >
          Enviar
        </button>
        <label htmlFor="my-modal-6" className="btn w-52">
          Salir
        </label>
      </div>
    </form>
  );
};

export default FormSendEmail;
