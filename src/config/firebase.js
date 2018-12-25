import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAczRWIZdF5vKYPORWdVC41OyYX2AEK_nI",
    authDomain: "crime-reporting-app-1fb97.firebaseapp.com",
    databaseURL: "https://crime-reporting-app-1fb97.firebaseio.com",
    projectId: "crime-reporting-app-1fb97",
    storageBucket: "crime-reporting-app-1fb97.appspot.com",
    messagingSenderId: "653359124231"
  };

 export const firebaseApp = firebase.initializeApp(config);
 export const firebaseAuth = firebase.auth()
 export const firebaseRef = firebase.database()