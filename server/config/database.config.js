const mongoose = require("mongoose")
const uri = "disco-dogs";

mongoose.connect(`mongodb://localhost/${uri}`, { //mongoose.connect returns a promise
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=> console.log("You're connected to the database:", uri))
    .catch(err=> console.log("Meltdown meltdown meltdown!!"))

