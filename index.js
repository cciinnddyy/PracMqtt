var mqtt = require('mqtt')

var axios = require('axios')

require("dotenv").config()

var client  = mqtt.connect(`mqtt://${mqttBroker}:1883`,{username:`${mqttuser}`,password:`${mqttPassword}`})
//{options of mqtt}
client.on('connect', function () {

        client.subscribe('pulse',function(err){
            if(!err){
                console.log("Success");
            }
        })
    
})

//message event 
client.on('message', function (topic, message) {


context = message.toString();
console.log(context)
})