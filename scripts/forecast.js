/**We will create weather API */
/**We will call API  */
/**or we can say that we are going to hit API to get weather Details */

const apikey="use your api key here e.g as shdddjahjvbxch68757 that you can get by creating your account"
const getCityData = async (city)=>{
const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search";
const query=`?apikey=${apikey}&q=${city}`;

const response = await fetch(baseURL+query);
const data=await response.json();
console.log("Checking location's data ",data[0]);
return data[0];

}

// getCityData("Lahore")
const getWeatherDetails= async (cityKey)=>{
const baseURL="http://dataservice.accuweather.com/currentconditions/v1/"
const query = `${cityKey}?apikey=${apikey}`;

const response = await fetch(baseURL+query);
const data=await response.json();
console.log("Checking location's weather ",data[0]);
return data[0];

}
// getWeatherDetails("city key will be passed here")