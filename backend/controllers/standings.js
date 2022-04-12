const { axiosConfig } = require("../api/config");

exports.getStandings = (req, res) => {
    axiosConfig
    .get("/standings", {params: req.query})
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