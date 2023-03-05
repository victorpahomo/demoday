import React from "react";

const Notification = (props) => {
  return (
    <div className="flex flex-col p-4 bg-gray-50 hover:bg-primary-azulCeleste2 cursor-pointer border-b-2">
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-sm">{props.message}</p>
      <div className="flex justify-between mt-1">
        <div className="flex gap-1">

        <p className="text-xs">por:</p>
        <p className="text-xs font-bold">{props.author}</p>
        </div>
        <p className="text-xs">{props.date}</p>
      </div>
    </div>
  );
};

export default Notification;
