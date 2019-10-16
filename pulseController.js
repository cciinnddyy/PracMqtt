const axios = require('axios');

module.exports = {
    
    postPulse:function(){
        try{
            return axios.post("http://localhost:3000/pulse");
        }
        catch(err){
            console.log(err);
        };
        
    }



}


