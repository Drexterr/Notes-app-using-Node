const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("View Engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(espress.json());
app.use(express.urlencoded({extended: true}))



app.listen(3000)
