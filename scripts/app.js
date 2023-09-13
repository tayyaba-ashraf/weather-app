/**DOM manipulation to fetch location details and then weather details */

const cityForm = document.querySelector("form");
const timePicture=document.querySelector("img.time");
const iconPicture=document.querySelector(".icon img")

// console.log("Form",cityForm);

/**Location will pased to this function then corresponding location and it's weather
 * details will be obtained
 */
const changeCityName =async (cityName)=>{
const cityDetails= await getCityData(cityName);
const weatherDetails= await getWeatherDetails(cityDetails.Key);

// console.log("city Details data",cityDetails);
// console.log("weather Details data",weatherDetails);
/**when key value identifiers names are same we can follow following approach for returning object */
return {
    cityDetails,
    weatherDetails,
}
}




/**As form submitted after entering cityname in input feild submit event will fire */
/**city and it's weather deatils will be obtained by calling changeCityName(cityName) */
cityForm.addEventListener('submit',(e)=>{
e.preventDefault();
const cityName=cityForm.city.value;
cityForm.reset();
changeCityName(cityName).then((data)=>{
console.log("checking data which has to update in UI now",data)
updateUI(data);

});
})

/**updating UI */
/**after getting data containing location and it's weather details from API we will
 * update that obtained response fron API  to UI has made in javascript no doubt
 */

const card=document.querySelector(".card");
const details=document.querySelector(".details");

const updateUI =(data)=>{
    /**instead of following we can simply destructure data array*/
    // const cityDetails=data.cityDetails;
    // const weatherDetails=data.weatherDetails;

    const {cityDetails,weatherDetails}=data;

    details.innerHTML=`<h1 class="my-3">${cityDetails.EnglishName}</h1>
    <div class="my-3">${weatherDetails.WeatherText}</div>

    <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    /**this will set image according to day or night time */
    let timeSource=null;
    if(weatherDetails.isDayTime){
        timeSource="images/day.svg";
    }else{
        timeSource="images/night.svg";
    }
    timePicture.setAttribute("src",timeSource)
    
    /**this will set icon corresponding to weather details */
    let weatherIconSource=`images/icons/${weatherDetails.WeatherIcon}.svg`;
    iconPicture.setAttribute("src",weatherIconSource);

    card.classList.remove("d-none");


}

