import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC6vn4EfK3J_Cad5dnysic1OZv3vP7hQ0Q",
  authDomain: "hangman-239ba.firebaseapp.com",
  databaseURL: "https://hangman-239ba.firebaseio.com",
  projectId: "hangman-239ba",
  storageBucket: "hangman-239ba.appspot.com",
  messagingSenderId: "101819977682",
  appId: "1:101819977682:web:0362f0cb597b13dc"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  // REFERENCES
}

export default Firebase;
