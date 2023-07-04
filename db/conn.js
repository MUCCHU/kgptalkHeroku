const mongoose = require('mongoose')
const db = process.env.DATABASE;
console.log("database str ",db);
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log(err);
})