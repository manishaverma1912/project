const API_key=`8b623be32492936634754fc266ca8672`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather= async (city) => {
weather.innerHTML=`<h1>Loading...</h1>`
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
const response = await fetch(url);
const data= await response.json()
return showWeather(data)

}
const showWeather = (data) => {
 if (data.cod == "404"){
     weather.innerHTML=`<h2>city not found </h2>`
     return;
 }
 weather.innerHTML=`
 <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
 <h2>${data.main.temp} ℃ </h2>
 <h4>${data.weather[0].main} </h4>
 </div>
 `
}
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault(); 
    }
)
