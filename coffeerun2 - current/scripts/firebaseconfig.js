(function (window) {
    'use strict';
     var App = window.App || {};
    
  var FirebaseConfig = {
    apiKey: "AIzaSyCCAGrD_GW9pXT3jYspKH6ZrJ6E7eMlvi4",
    authDomain: "coffee-run-3e957.firebaseapp.com",
    projectId: "coffee-run-3e957",
    storageBucket: "coffee-run-3e957.appspot.com",
    messagingSenderId: "970786822546",
    appId: "1:970786822546:web:6d0ef56e549c16cc70094b",
    measurementId: "G-REXPJ6QWDR"
  };
     App.FirebaseConfig = FirebaseConfig;
     firebase.initializeApp(App.FirebaseConfig);
     window.App = App;
  
  })(window);
