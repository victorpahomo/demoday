import React from "react";

const Notification = (props) => {
  let backgroundColorClass = "bg-gray-50";
  if (props.rol === "admin") {
    backgroundColorClass = "w-full h-1 bg-red-500 rounded-lg";
  } else if (props.rol === "professor") {
    backgroundColorClass = "w-full h-1 bg-yellow-400 rounded-lg";
  } else if (props.rol === "student") {
    backgroundColorClass = "w-full h-1 bg-blue-200 rounded-lg";
  }

  return (
    <div className="flex flex-col p-4 hover:bg-slate-100 cursor-pointer border-b-2 rounded-lg">
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
