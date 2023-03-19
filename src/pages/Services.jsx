import React, { useState } from "react";
import {
  TechnicalSupportIcon,
  PsychosocialSupportIcon,
  AbsenceReportIcon,
} from "../assets";
import CardServices from "../components/CardServices";
import FormSendEmail from "../components/FormSendEmail";
import MainLayout from "../layout/MainLayout";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

const Services = () => {
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
    if (
      fromName !== "" &&
      userName !== "" &&
      userCc !== "" &&
      userGroup !== "" &&
      message !== "" &&
      userEmail !== "" &&
      userPhone !== ""
    ) {
      // código a ejecutar si todos los campos están llenos
      emailjs
        .sendForm(
          "service_mafodzc",
          "template_8mi8lnv",
          e.target,
          "3j6DqpgjuzdqsEr9Q"
        )
        .then(
          (result) => {
            // console.log(result.text);
            toast.success("Solicitud Enviada!", {
              duration: 4000,
              // position: "bottom-right",
            });
          },
          (error) => {
            console.log(error.text);
            console.log("error alert");
            toast.error("Oops, algo salió mal. ¡Inténtalo de nuevo!", {
              duration: 4000,
              // position: "bottom-right",
            });
          }
        );
      resetForm();
    } else {
      // código a ejecutar si al menos uno de los campos está vacío
      toast.error("Por favor, llene todos los campos.", {
        duration: 4000,
        // position: "bottom-right",
      });
    }
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
    <MainLayout props="Servicios">
      <div></div>
      <div className="flex flex-wrap gap-10 mt-5 justify-center items-center">
        <CardServices
          title="Apoyo Técnico"
          description="Preguntas que necesitas resolver en el marco del proceso formativo"
          icon={TechnicalSupportIcon}
          stylesIcon="h-24 fill-primary-AzulVerde4"
          link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
        />
        <CardServices
          title="Apoyo Psicosocial"
          description="Situaciones que estás viviendo y que pudiesen afectar tu rendimiento o participación."
          icon={PsychosocialSupportIcon}
          stylesIcon="h-24 fill-primary-AzulVerde4"
          link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
        />
        <CardServices
          title="Reporte de inasistencia"
          description="Si conoces con anterioridad que no podrás estar en alguna sesión, infórmanos acá."
          icon={AbsenceReportIcon}
          stylesIcon="h-24 fill-primary-AzulVerde4"
          link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
        />
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Name Selection</h3>
          <FormSendEmail />
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
