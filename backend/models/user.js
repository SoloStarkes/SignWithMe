const { MongoClient } = require('mongodb');

// Define the User schema
const userCollection = {
   validator: {
       $jsonSchema: {
           bsonType: "object",
           required: ["username", "email", "password"],
           properties: {
               username: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               email: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               password: {
                   bsonType: "string",
                   description: "must be a string and is required"
               }
           }
       }
   },
   indexes: [
       {
           fields: { username: 1 },
           unique: true,
       },
       {
           fields: { email: 1 },
           unique: true,
       }
   ]
};

module.exports = userCollection;
