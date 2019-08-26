const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://business-idea-c71fa.firebaseio.com"
});


const db = admin.database()

module.exports = {
    admin,
    db
}