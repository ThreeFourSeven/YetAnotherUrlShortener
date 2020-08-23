const express = require('express');
const mongoose = require('mongoose');
const configs = require('./configs/configs.json');
const bodyParser = require('body-parser');

(models=>{
    models.forEach(model => {
        require('./models/'+model)
    });
})([
    "UrlShorten"
]);


const app = express();

mongoose.connect(configs.dburistart+configs.atlasKey+configs.dburiend, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if(err)
        console.log(`MongoClient error: ${err}`);
    else
        console.log('MongoClient connected');
});

app.use(bodyParser.json());

(routes=>{
    routes.forEach(route=>{
        require('./routes/'+route+".js")(app)
    })
})([
    "urlshorten"
]);

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});