const { MongoClient } = require('mongodb');

// Define the lesson schema
const lessonCollection = {
   validator: {
       $jsonSchema: {
           bsonType: "object",
           required: ["lessonId", "lessonName", "unitId", "userName"],
           properties: {
               lessonId: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               lessonName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               unitId: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               userName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               quiz_complete: {
                   bsonType: "bool",
                   description: "must be a boolean",
                   default: false
               }
           }
       }
   },
   indexes: [
       {
           fields: { lessonId: 1, userName: 1 },
           unique: true,
       }
   ]
};

module.exports = lessonCollection;
