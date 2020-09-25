//Dependencies
import React, {useState} from "react";

//API Call
//reference api key from env file

let [responseObj, setResponseObj] = useState({});

const getForecast = () => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": process.env_OPENWEATHER_HOST,
        "x-rapidapi-key": process.env_OPENWEATHER_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
};
export default getForecast;