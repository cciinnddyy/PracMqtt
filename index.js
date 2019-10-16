var mqtt = require('mqtt')

var axios = require('axios')

var dotenv = require('dotenv')

dotenv.config()

console.log(`mqtt://${process.env.mqttBroker}:1883`)
console.log(`${process.env.mqttuser}`);
var client  = mqtt.connect(`mqtt://${process.env.mqttBroker}:1883`,{
    username:`${process.env.mqttuser}`,password:`${process.env.mqttPass}`})
//{options of mqtt}

var topics = ['pulse','gps']

client.on('connect', function () {
    
        client.subscribe(topics,{qos:1},function(err){
            
            if(!err){
                console.log("Subscribe Success");
            }


        })

        
    
})


var nearbysearch = {
    //location: android application => mqtt broker => here
    key:`${process.env.apikey}`
    //radius:
    //type:restaurant

}

nearbysearch =JSON.stringify(nearbysearch);

//message event 
client.on('message', function (topic, message) {

switch(topic){
    case "gps":
        console.log("gps");
    case "pulse":
        console.log("pulse");
    default:
        console.log("fails");
    
}



if(topic=='gps'){
    

    //time?
    //call google api and storage api
    //axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?${nearbysearch}`).then(function(response){
    //    console.log(response);
    //})

    console.log(message.toString());
}

})