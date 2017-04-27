var firebase = require('firebase');
require('dotenv').config();

console.log(process.env.FIREBASE_API_KEY)

// Initialize Firebase
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
};

firebase.initializeApp(config);

module.exports = firebase;