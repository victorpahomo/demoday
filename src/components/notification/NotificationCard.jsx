
const NotificationCard = (props) => {
  // Convierte la fecha proporcionada en un objeto de fecha
  const date = new Date(props.date);
  return (
    <div className="flex flex-col p-4 bg-slate-50 text-primary-Azul5 cursor-pointer border-b-2 rounded-lg mt-1">
      {/* Título de la notificación */}
      <h2 className="font-medium">{props.title}</h2>
      {/* Mensaje de la notificación */}
      <p className="text-sm">{props.message}</p>
      {/* Sección de autor y fecha */}
      <div className="flex mt-2 gap-1 justify-between">
        {/* Autor de la notificación */}
        <p className="text-xs italic">{props.author}</p>
        {/* Fecha de la notificación formateada como cadena legible */}
        <p className="text-xs">{date.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
