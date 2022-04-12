const { axiosConfig } = require("../api/config");
require('dotenv').config();


exports.getFixtures = (req,res) => {
    
    axiosConfig
    .get("/fixtures", {params: req.query})
    .then(response => {
        if(response.data.errors.length > 0){
            res.status(400).json({
                success: false,
                data: response.data.errors
            })    
        } else {
            res.status(200).json({
                success: true,
                data: response.data
            })
        }
    }).catch(err=> {
        console.log('there was an error');
        res.status(500).json({errors: [{error: err}]});
    });
    
    
    
}

exports.getFixtureEvents = (req,res) => {

    axiosConfig
    .get('/fixtures/events', {params: req.query})
    .then(response => {
        if(response.data.errors.length > 0){
            res.status(400).json({
                success: false,
                data: response.data.errors
            })    
        } else {
            res.status(200).json({
                success: true,
                data: response.data
            })
        }
        
    }).catch(err=> {
        console.log('there was an error');
        res.status(500).json({errors: [{error: err}]});
    });
}

exports.getFixtureStatistics = (req,res) => {

    axiosConfig
    .get('/fixtures/statistics', {params: req.query})
    .then(response => {
        if(response.data.errors.length > 0){
            res.status(400).json({
                success: false,
                data: response.data.errors
            })    
        } else {
            res.status(200).json({
                success: true,
                data: response.data
            })
        }
        
    }).catch(err=> {
        console.log('there was an error');
        res.status(500).json({errors: [{error: err}]});
    });
}