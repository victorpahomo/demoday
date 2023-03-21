
const NotificationCard = (props) => {
  const date = new Date(props.date);
  return (
    <div className="flex flex-col p-4 bg-slate-50 text-primary-Azul5 cursor-pointer border-b-2 rounded-lg mt-1">
      <h2 className="font-medium">{props.title}</h2>
      <p className="text-sm">{props.message}</p>

      <div className="flex mt-2 gap-1 justify-between">
        <p className="text-xs italic">{props.author}</p>
        <p className="text-xs">{date.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
