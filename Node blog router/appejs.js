const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');


app.get('/', (req, res) =>{
    const blogs = [
        {title: 'Aprilfool', snippet: "lorem Ipsum", },
        {title: 'May', snippet: "lorem Ipsum", },
        {title: 'June', snippet: "lorem Ipsum", }
    ];
    // res.send('<p> home page </p>');
   res.render('index', { title: 'Home', blogs });
});

app.get('/contact', (req, res) =>{
    // res.send('<p> about page </p>');
    res.render('profile');
});

app.get('/blogs/create', (req, res) =>{
    res.render('create');
})

//404 page
app.use((req, res) => {
   res.status(404).sendFile(__dirname + '/404.html');
})


app.listen(3000);