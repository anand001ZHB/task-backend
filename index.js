// const express = require('express');
import express from 'express';
const app = express();

app.get('/health', (req, resp) => {
    resp.send('Server Running - Hey Anand. You are practicing node js');;
});

app.listen(3000);
console.log('Node is running on port 3000');