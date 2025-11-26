const Base_url="https://api.openweathermap.org/data/2.5/weather?units=metric";
const apikey ="4a788576a6d7ac1fe1cc8d39a0f313d3"

const city_name= document.querySelector(".city")
const temp= document.querySelector(".temp")
const humidity= document.querySelector(".humidity")
const wind= document.querySelector(".wind")
const btn= document.querySelector(".search button")
const input= document.querySelector(".search input")
const img= document.querySelector(".weather-icon")

async function checkWeather(city){
    const response= await fetch(Base_url+`&q=${city}`+`&appid=${apikey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    var data = await response.json();
    city_name.innerHTML=data.name;
    temp.innerHTML=`${Math.round(data.main.temp)}°C`;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${Math.round(data.wind.speed)} kmph`;
    weather = data.weather[0].main;
    if (weather === "clouds"){
        img.src="images/clouds.png"
    }
    else if (weather === "clear"){
        img.src="images/clear.png"
    }
    else if (weather === "rain"){
        img.src="images/rain.png"
    }
    else if (weather === "drizzle"){
        img.src="images/drizzle.png"
    }
    else if (weather === "mist"){
        img.src="images/mist.png"
    }
    else{
        img.src="images/snow.png"
    }

};
btn.addEventListener(("click"),()=>{
     
    user_city=input.value
    checkWeather(user_city)
})
checkWeather("Mumbai")
 