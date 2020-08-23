const UrlShorten = require('./../models/UrlShorten');
const {genShortURL} = require('../core/shorten');
const {uri_validate} = require('../core/uri-validator');

module.exports = app => {
    app.get('/api/short/:code', async (req, res) => {
        var {code} = req.params;
        var shortURL = await UrlShorten.findOne({ code });
        if(shortURL) {
            return res.status(200).send({error: false, shortURLObj: shortURL});
        } else {
            return res.status(404).send({error: true, msg: "No Shortened URL exists with code given!"})
        }
    });
    app.post('/api/short', async (req, res) => {
        var {originalURL, shortBaseURL} = req.body;
        var shortURL = await UrlShorten.findOne({"originalURL": originalURL});
        if(!shortURL) {
            var newCode = genShortURL();
            var newURL = shortBaseURL + '/' + newCode;
            var newShortURL = new UrlShorten({originalURL, shortURL: newURL, code: newCode});
            if(uri_validate(newURL)) {
                newShortURL.save();   
                return res.status(200).send({
                    error: false,
                    shortURL: newShortURL.shortURL,
                    code: newShortURL.code,
                    msg: ""
            })
            } else {
                return res.status(200).send({error: false, msg: 'URL generated is invalid!'});
            }
        } else {
            return res.status(200).send({
                error: false,
                shortURL: shortURL.shortURL,
                code: shortURL.code,
                msg: "URL already shortened!"
            });
        }
    });
    app.delete('/api/short/:code', async (req, res) => {
        var {code} = req.params;
        var shortURL = await UrlShorten.findOne({ code });
        if(shortURL) {
            shortURL.delete();
            return res.status(200).send({error: false});
        } else {
            return res.status(200).send({error: true, msg: "No Shortened URL exists with code given!"})
        }
    });
};