    const express = require("express");
    const app = express();
    const mongoose = require('mongoose');
    var cors = require('cors');
    const morgan = require("morgan");
    const bodyParser = require("body-parser");
    const expressValidator = require('express-validator')
    const dotenv = require("dotenv");
    const userRoutes = require('./routes/user');
    dotenv.config();
    

    //db
    mongoose
        .connect(
            process.env.MONGO_URI,
            { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
         )
         .then(() => console.log("DB Connected"));

    mongoose.connection.on("error", err => {
        console.log(`DB connection error: ${err.message}`);
    });

    //bring in routes

    const postRoutes = require("./routes/post");

    //middleware
    app.use(cors());
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use( "/", postRoutes);
    app.use('/user', userRoutes);
    


    const port = process.env.PORT || 8080;    //require a port from env while or take 8080
    app.listen(port, () => {
        console.log(`A NODE JS API IS Listening on port ${port}` )
    });