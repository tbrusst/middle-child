import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPSheuD4dusSFRcplmCmoWN9SSSmgu5cI",
  authDomain: "middle-child.firebaseapp.com",
  databaseURL: "https://middle-child.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
