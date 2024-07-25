import { initializeApp } from "firebase/app";
import config from "./config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmGcqEVnp8W8A7m9_fqkRJpN_TJ-8v5H4",
  authDomain: "swift-sewa.firebaseapp.com",
  projectId: "swift-sewa",
  storageBucket: "swift-sewa.appspot.com",
  messagingSenderId: "79377400506",
  appId: "1:79377400506:web:a49686cacf76264c53f883",
  measurementId: "G-49MQ73FZWT",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, ref, uploadBytesResumable, getDownloadURL };
