//require the express and mongoose package
const express = require('express');
const mongoose = require('mongoose');
//declare the application
const app = express();
//declare the port connection
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// if MONGODB_URI exists, connect to that DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Social-Network-with-NoSQL", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

// log mongo queries being executed
mongoose.set("debug", true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));