const apiKey="aaca581baf1a3f959943ac813a95ae41";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let searchIcon=document.getElementById("search-icon");
async function GetData() {
    searchIcon.addEventListener("click",async ()=>{
        try{
            let CityName=document.getElementById("cityName").value;
            const res = await fetch(`${apiUrl}q=${CityName}&appid=${apiKey}&units=metric`);
            const data= await res.json();
            console.log(data)
            document.getElementById("degree").innerHTML=Math.round(data.main.temp)+"°c"
            document.getElementById("city").innerHTML=data.name;
            document.getElementById("wind").innerHTML=Math.round(data.wind.speed)+"°%" 
            document.getElementById("humidity").innerHTML=Math.round(data.main.humidity)+"°%" 
            if(data.weather[0].main=="Clouds"){
                document.getElementById("weather-etat").src="images/clouds.png"
            }
            else if(data.weather[0].main=="Rain"){
                document.getElementById("weather-etat").src="images/rain.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                document.getElementById("weather-etat").src="images/drizzle.png"
            }
            else if(data.weather[0].main=="Mist"){
                document.getElementById("weather-etat").src="images/mist.png"
            }
        }
        catch(error){
            console.log("erreur",error)
        }
    })    
}
GetData();