import React from "react";

const NotificationCard = (props) => {

  return (
    <div className="flex flex-col p-4 bg-slate-50 cursor-pointer border-b-2 rounded-lg mt-1">
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-sm">{props.message}</p>

      <div className="flex mt-2 gap-1 justify-between">
        <p className="text-xs font-bold">{props.author}</p>
        <p className="text-xs">{props.date}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
