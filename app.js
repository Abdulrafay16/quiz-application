const firebaseConfig = {
  apiKey: "AIzaSyC2dXcpwh0Liz2ylPbD_9MnhQSuLjjZj4k",
  authDomain: "quiz-application-e3331.firebaseapp.com",
  databaseURL: "https://quiz-application-e3331-default-rtdb.firebaseio.com",
  projectId: "quiz-application-e3331",
  storageBucket: "quiz-application-e3331.appspot.com",
  messagingSenderId: "224193126029",
  appId: "1:224193126029:web:d84434aa27ebe146ef0cc4",
  measurementId: "G-BZXRT0BWY3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// console.log(firebase.database)

function check() {
  var qno1 = document.Quiz.Question1.value;
  var qno2 = document.Quiz.Question2.value;
  var qno3 = document.Quiz.Question3.value;
  var correct = 0;

  if (qno1 === `javascript`) {
    correct++;
  }

  if (qno2 === `Clientside`) {
    correct++;
  }

  if (qno3 === `javascript`) {
    correct++;
  }

  document.getElementById(`text`).innerHTML = correct;
//   firebase.database().ref("").push();
}
firebase.database.push( { question : [qno1 , qno2, qno3, ]})