import React from "react";

const Notification = (props) => {
  let backgroundColorClass = "bg-slate-50";

  if (props.rol === "admin") {
    backgroundColorClass = "w-full h-1  rounded-lg bg-red-500";
  } else if (props.rol === "professor") {
    backgroundColorClass = "w-full h-1  rounded-lg bg-yellow-400";
  } else if (props.rol === "student") {
    backgroundColorClass = "w-full h-1 bg-blue-200 rounded-lg";
  }

  return (
    <div className="flex flex-col p-4 bg-slate-50 cursor-pointer border-b-2 rounded-lg mt-1">
      <span className={`${backgroundColorClass}`}></span>
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-sm">{props.message}</p>
      <div className="flex flex-col sm:flex-row justify-between mt-1">
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

// import React from "react";

// const Notification = (props) => {
//   return (
//     <div className="flex flex-col p-4 bg-gray-50 hover:bg-primary-azulCeleste2 cursor-pointer border-b-2">
//       <h2 className="font-bold">{props.title}</h2>
//       <p className="text-sm">{props.message}</p>
//       <div className="flex flex-col sm:flex-row justify-between mt-1">
//         <div className="flex gap-1">

//         <p className="text-xs">por:</p>
//         <p className="text-xs font-bold">{props.author}</p>
//         </div>
//         <p className="text-xs">{props.date}</p>
//       </div>
//     </div>
//   );
// };

// export default Notification;
