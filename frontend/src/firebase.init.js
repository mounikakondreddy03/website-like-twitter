import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmRP5VNYhvEcnKMdRnTw0g53wIbeRhQrc",
  authDomain: "twitter-clone-1d130.firebaseapp.com",
  projectId: "twitter-clone-1d130",
  storageBucket: "twitter-clone-1d130.appspot.com",
  messagingSenderId: "936593335391",
  appId: "1:936593335391:web:964b7f179a9048bff527ea",
  measurementId: "G-Q2C56JP4EY"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
