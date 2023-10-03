const Person = require("./models/Person");


/***Create and Save a Record of a Model**/

Person.insertMany([{
    name:"mohamed ben aguil",
    age:22,
    favoriteFoods:["Pizza","CousCous","Strawberry"]

}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});

/*********************************************************************************************/

/***Create Many Records with model.create()***/

Person.create([
    {
        name:"jhon",
        age:3,
        favoriteFoods:["Pasta","Potato"]
    },
    {
        name:"carl",
        age:5,
        favoriteFoods:["Pizza","Strawberry"]
    },
    {
        name:"rick",
        age:6,
        favoriteFoods:["Pasta","Candies"]
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});

/*********************************************************************************************/

/***Use model.find() to Search Your Database***/

Person.find().then(remainingPerson => {console.log(remainingPerson)});

/*********************************************************************************************/

/***Use model.findOne() to Return a Single Matching Document from Your Database***/

Person.findOne().then(remainingPerson => {console.log(remainingPerson)});

/*********************************************************************************************/

/****Use model.findById() to Search Your Database By _id***/

let Id = "4412336sa9008ab82725"; //example
Person.findById(id, function (err, docs) {console.log(docs)});
/*********************************************************************************************/

/***Perform New Updates on a Document Using model.findOneAndUpdate()****/

Person.findOneAndUpdate({"name":"mohamed ben aguil"},{$set:{age:"22"}})
.then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});

/*********************************************************************************************/

/****Delete One Document Using model.findByIdAndRemove*****/

let id = "4412336sa9008ab82725"; //example
Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});

/*********************************************************************************************/

/***MongoDB and Mongoose - Delete Many Documents with model.remove()******/

Person.remove({name:"mohamed ben aguil"})
.then(removedPersons => {console.log("Removed Person :",removedPersons)});

/*********************************************************************************************/

