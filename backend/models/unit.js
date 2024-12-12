const { MongoClient } = require('mongodb');

// Define the unit schema
const unitCollection = {
   validator: {
       $jsonSchema: {
           bsonType: "object",
           required: ["unitId", "userName", "unitName"],
           properties: {
               unitId: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               userName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               unitName: {
                   bsonType: "string",
                   description: "must be a string and is required"
               },
               exam_complete: {
                   bsonType: "bool",
                   description: "must be a boolean",
                   default: false
               }
           }
       }
   },
   indexes: [
       {
           fields: { unitId: 1, userName: 1 },
           unique: true,
       }
   ]
};

module.exports = unitCollection;