// const express = require('express');
import express from "express";

const app = express();
//work of express is to serve one of the routes and listen.

// app.get('/', (req,res)=>{
//     res.send('Server is ready')
// })

//get a list of 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a Joke.'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another Joke.'
        },
        {
            id: 3,
            title: 'Another third joke',
            content: 'This is third Joke.'
        },
        {
            id: 4,
            title: 'Another forth joke',
            content: 'This is four Joke.'
        },
        {
            id: 5,
            title: 'Another fifth joke',
            content: 'This is fifth Joke.'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});