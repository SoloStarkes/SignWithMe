const { MongoClient } = require('mongodb');

// Define the lesson schema
const examCollection = {
   validator: {
       $jsonSchema: {
           bsonType: "object",
           required: ["examId", "examName", "userName"],
           properties: {
               examId: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               examName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               userName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               progress: {
                   bsonType: "double",
                   description: "must be a double",
                   default: 0.0
               }
           }
       }
   },
   indexes: [
       {
           fields: { examId: 1, userName: 1 },
           unique: true,
       }
   ]
};

module.exports = examCollection;
