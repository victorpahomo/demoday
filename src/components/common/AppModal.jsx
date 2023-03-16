import React, {useId} from "react";
import iconClose from '../../assets/icons/close.svg';


export default function AppModal ({ children, activator, isOpen }) {
  const modalId = useId()
  return (
    <>
    <label htmlFor={modalId}>
      { activator }
    </label>
    <input type="checkbox" id={modalId} className="modal-toggle" />
    <div className={`modal z-50 bg-black/60${isOpen ? ' modal-open' : ''}`}>
      <div className="modal-box relative w-11/12 max-w-[86rem] max-h-[96%] p-0 rounded-lg">
        <label htmlFor={modalId} className="z-50 absolute right-2 top-2 rounded-full w-10 h-10 grid place-items-center bg-navy-blue text-white cursor-pointer">
          <img src={iconClose} alt="" className="w-5" />
          </label>
        { children }
      </div>
    </div>
    </>
  )
}