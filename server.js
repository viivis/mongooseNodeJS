const express= require('express');
const mongoose = require('mongoose');
const app = express();
const fruitSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Error: no name specified"]},
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

/*const fruit = new Fruit({
   
    rating: 11,
    review: "Sweet and crunchy"
});*/

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else{
        fruits.forEach(fruit =>{
        console.log(fruit.name);
    });

}
});
/*Fruit.update({_id:"5e7e1d590224cd36746fb5af"}, {review:"Juicy fruit"},
function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Record successfully updated");
    }
});*/


/*const banana = new Fruit({
    name: "banana",
    rating: 5,
    review: "Soft texture"
});
const lemon = new Fruit({
    name: "lemon", 
    rating: 5, 
    review: "Sour as hell"
});
Fruit.insertMany([banana, lemon], (error=> {
    if(error) {
        console.log(err);
    }else {
        console.log("Fruits successfully added to database!");
    }
    
}
));*/

const orange = new Fruit({
    name: "orange",
    rating: 8,
    review: "Tasty and juicy"
});
//orange.save();

Fruit.deleteMany({name:"banana" && "orange"}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Item successfully deleted");
    }
})


const personSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    firstName: "John",
    lastName: "Doe",
    age: 29

});
const person1 = new Person({
    firstName: "Jüri",
    lastName: "Karu",
    age: 45

});
const person2 = new Person({
    firstName: "Liis",
    lastName: "Kask",
    age: 16

});
/*Person.insertMany([person1, person2], (error=> {
    if(error) {
        console.log(err);
    }else {
        console.log("People successfully added to database!");
    }
    
}
));*/

Person.update({_id:"5e7e398bb3f572579840bfe4"}, {age: 30},
function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Record successfully updated");
    }
});

/*person.save();
Person.find(function(error, people){
    if(error){
        console.log(error);
    } else{
        people.forEach(person =>{
        console.log(person.firstName)
        console.log(person.lastName)
        console.log (person.age) ;
    });

}
});*/

//fruit.save();

mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
