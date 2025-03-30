const express = require('express');
const app = express();
const Path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));

app.get('/Notes/:filename', function(req,res){
    fs.readFile(`./Notes/${req.params.filename}`, function(err, Notesdata){
        res.render('Notes', {filename: req.params.filename, content: Notesdata});
    })
})

app.get('/', function(req, res){
    fs.readdir(`./Notes`, function(err, Notes){
        res.render('index',{Notes: Notes});
    })
})

app.get('/Edit/:filename', function(req, res){
    res.render('edit', {filename: req.params.filename});
})

app.post('/rename', function(req, res){
    fs.rename(`./Notes/${req.body.previous}`,`./Notes/${req.body.new}` , function(err){
res.redirect("/")
    })
})

    app.post('/create', function(req, res){
        fs.writeFile(`./Notes/${req.body.title.split(' ').join('')}.txt`, req.body.info, function(err){
res.redirect("/")
        })
    })
app.listen(3010);