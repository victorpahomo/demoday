import React from "react";
import {
  TechnicalSupportIcon,
  PsychosocialSupportIcon,
  AbsenceReportIcon,
} from "../assets";
import CardServices from "../components/CardServices";
import MainLayout from "../layout/MainLayout";

const Services = () => {
  // title, icon, description, link
  return (
    <MainLayout props="Apoyo Técnico">
      <div className="flex flex-wrap gap-5 mt-5">
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
    </MainLayout>
  );
};

export default Services;
