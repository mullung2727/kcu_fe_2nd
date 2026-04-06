import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

export async function uploadAvater(userId, file){
  const storageRef = ref(storage, `avatars/${userId}/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref)
  return url;
}