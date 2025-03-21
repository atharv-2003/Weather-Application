const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff55133523msh216f10476ea77f0p144ad6jsn14637fcd8d22',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
     cityname.innerHTML=city;
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
     .then(response=>response.json())
     .then((response)=>{
        console.log(response)
       
        cloud_pct.innerHTML= response.cloud_pct
        feels_like.innerHTML= response.feels_like
        humidity.innerHTML= response.humidity
        humidity2.innerHTML= response.humidity
        max_temp.innerHTML= response.max_temp
        min_temp.innerHTML= response.min_temp
        sunrise.innerHTML= response.sunrise 
        sunset.innerHTML= response.sunset
        temp.innerHTML= response.temp
        temp2.innerHTML= response.temp
        wind_speed.innerHTML= response.wind_speed
        windspeed.innerHTML= response.wind_speed
    
    })
     .catch(err=>console.error(err));
}

const btn1=document.getElementById('london');
 
function clicked(){
    getweather('London');
}

btn1.addEventListener('click',clicked);
const btn2=document.getElementById('USA');
 
function clicked2(){
    getweather('United States');
}

btn2.addEventListener('click',clicked2);
const btn3=document.getElementById('Canada');
 
function clicked3(){
    getweather('Canada');
}

btn3.addEventListener('click',clicked3);

const cityInput = document.getElementById('city');
const submitButton = document.getElementById('btn');
 
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
	getweather(cityInput.value);
});
const getmathuraweather = ()=>{
     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mathura' ,options)
    .then(responsemathura=>responsemathura.json())
    .then((responsemathura)=>{
      
       cloud_pct_mathura.innerHTML= responsemathura.cloud_pct
       feels_like_mathura.innerHTML= responsemathura.feels_like
       humidity_mathura.innerHTML= responsemathura.humidity
       max_temp_mathura.innerHTML= responsemathura.max_temp
       min_temp_mathura.innerHTML= responsemathura.min_temp
       temp_mathura.innerHTML= responsemathura.temp
       wind_speed_mathura.innerHTML= responsemathura.wind_speed
   
   })
    .catch(err=>console.error(err));
}
getmathuraweather();
const getpuneweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune' ,options)
   .then(responsepune=>responsepune.json())
   .then((responsepune)=>{
     
      cloud_pct_pune.innerHTML= responsepune.cloud_pct
      feels_like_pune.innerHTML= responsepune.feels_like
      humidity_pune.innerHTML= responsepune.humidity
      max_temp_pune.innerHTML= responsepune.max_temp
      min_temp_pune.innerHTML= responsepune.min_temp
      temp_pune.innerHTML= responsepune.temp
      wind_speed_pune.innerHTML= responsepune.wind_speed
  
  })
   .catch(err=>console.error(err));
}
getpuneweather();
const getmumbaiweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai' ,options)
   .then(responsemumbai=>responsemumbai.json())
   .then((responsemumbai)=>{
     
      cloud_pct_mumbai.innerHTML= responsemumbai.cloud_pct
      feels_like_mumbai.innerHTML= responsemumbai.feels_like
      humidity_mumbai.innerHTML= responsemumbai.humidity
      max_temp_mumbai.innerHTML= responsemumbai.max_temp
      min_temp_mumbai.innerHTML= responsemumbai.min_temp
      temp_mumbai.innerHTML= responsemumbai.temp
      wind_speed_mumbai.innerHTML= responsemumbai.wind_speed
  
  })
   .catch(err=>console.error(err));
}
getmumbaiweather();
const getsuratweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=surat' ,options)
   .then(responsesurat=>responsesurat.json())
   .then((responsesurat)=>{
     
      cloud_pct_surat.innerHTML= responsesurat.cloud_pct
      feels_like_surat.innerHTML= responsesurat.feels_like
      humidity_surat.innerHTML= responsesurat.humidity
      max_temp_surat.innerHTML= responsesurat.max_temp
      min_temp_surat.innerHTML= responsesurat.min_temp
      temp_surat.innerHTML= responsesurat.temp
      wind_speed_surat.innerHTML= responsesurat.wind_speed
  
  })
   .catch(err=>console.error(err));
}
getsuratweather();
getweather('Delhi');


// getweather("Delhi")
// getweather("Mathura")
// getweather("Pune")
// getweather("Mumbai")