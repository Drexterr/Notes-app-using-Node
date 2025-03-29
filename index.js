const express = require('express');
const app = express();
const Path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));

app.get('/', function(req, res){
    fs.readdir(`./Notes`, function(err, Notes){
        res.render('index',{Notes: Notes});
    })
})
    app.post('/create', function(req, res){
        fs.writeFile(`./Notes/${req.body.title.split(' ').join('')}.txt`, req.body.info, function(err){
res.redirect("/")
        })
    })
app.listen(3010);