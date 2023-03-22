import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserIcon } from "../assets";
import MainLayout from "../layout/MainLayout";
import CameraIcon from "../assets/CameraIcon";
import { uploadFileToStorage } from "../services/storageFirebaseService";
import { setProfilePicture } from "../services/dataFirebaseService";

const Profile = () => {
  const email = useSelector((state) => state.user.user?.email);
  const name = useSelector((state) => state.user.user?.name);
  const picture = useSelector((state) => state.user.user?.picture);
  const userUid = useSelector((state) => state.auth.user?.uid);
  const [photo, setPhoto] = useState(null);
  const [successPhoto, setSuccessPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const photoURL = await uploadFileToStorage(photo, userUid + photo.name);
      console.log("photoURL", photoURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout props="Perfil">
      <div className="flex flex-col relative justify-center items-center">
        <div className="w-full h-44 bg-primary-azulCeleste5 opacity-10 shadow-md rounded-xl"></div>
        <div className="flex flex-col justify-center items-center absolute top-28 gap-2">
          <div className=" relative w-32 h-32 rounded-full bg-slate-200 shadow-lg">
            {picture ? (
              <img className="w-full h-full rounded-full" src={picture} />
            ) : (
              <div className="flex w-full h-full justify-center items-center">
                <UserIcon className="fill-gray-400 w-20 h-20" />
              </div>
            )}
            <label htmlFor="my-modal-4">
              <CameraIcon
                className="inline-block transform hover:scale-110 transition duration-300 ease-in-out  fill-gray-400 w-8 h-8 absolute bottom-0 right-0
              hover:fill-gray-500 cursor-pointer"
              />
            </label>
          </div>

          <h2 className="text-xl font-semibold text-slate-600">{name?name:"Nombre"}</h2>
          <p className="text-base font-semibold text-slate-400">{email?email:"email@email.com"}</p>
        </div>
      </div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label
          className="flex flex-col justify-center items-center gap-5 modal-box relative bg-white"
          htmlFor=""
        >
          <div className="flex flex-col justify-center items-center">
            <div className=" w-32 h-32 rounded-full bg-slate-200">
              {picture ? (
                <div className="relative">
                  <img src={picture} />
                </div>
              ) : (
                <div className="relative flex w-full h-full justify-center items-center">
                  <UserIcon className="fill-gray-400 w-20 h-20" />
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold text-slate-600">{name}</h2>
            <p className="text-base font-semibold text-slate-400">{email}</p>
          </div>
          <form onSubmit={handleSubmit} action="">
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              id="SearchPhotoProfile"
              type="file"
              className="bg-slate-100 file-input file-input-bordered file-input-info w-full max-w-xs"
            />
            <div className="flex justify-between mt-5 gap-5 ">
              <button
                onClick={() => {
                  document.getElementById("my-modal-4").checked = false;
                }}
                className="btn bg-primary-azulCeleste4 border-none text-white hover:bg-green-500"
                type="submit"
              >
                Guardar
              </button>
              <label
                htmlFor="my-modal-4"
                className="btn bg-primary-azulCeleste4 hover:bg-red-500 border-none text-white"
              >
                Salir
              </label>
            </div>
          </form>
        </label>
      </label>
    </MainLayout>
  );
};

export default Profile;
