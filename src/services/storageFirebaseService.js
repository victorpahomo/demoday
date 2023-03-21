import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../api/firebase";

export const uploadFileToStorage = async (file, id) => {
  try {
    const storageRef = ref(storage, id);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log("File available at", url);
    return url;
  } catch (error) {
    console.error("Error on upload", error);
  }
};
