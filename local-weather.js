var coordAPI = "https://freegeoip.net/json/?callback";
var lat;
var lon;
var locationEl = document.getElementById("location");
var temperatureEl = document.getElementById("temperature");
var weatherEl = document.getElementById("weather");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var pressureEl = document.getElementById("pressure");


everything();

function isDay(currHours){
  if(currHours >= 6 && currHours < 18) return true;
  if(currHours < 6 || currHours >= 18) return false;
}


function capitalize(match){
  return match.toUpperCase();
}



  function everything(){
    
    $.getJSON(coordAPI, function (response){
  
    lat = response.latitude;
    lon = response.longitude;
    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=60301310a3918cc42c8ff0f441ddff54";
   
      $.getJSON(weatherAPI, function(data){
       console.log(data);
        
        var cel = Number(data.main.temp) - 273.15;
        var fahr = Math.round((Number(data.main.temp) * 9/5) - 459.67);
        var weather = data.weather[0].id;
        var bodySt = document.body.style
        var myTime = new Date();
        var currHours = myTime.getHours();
        
        locationEl.textContent = "Location: " + data.name + ", " + data.sys.country;
        temperatureEl.textContent = "Temperature: " + cel;
        temperatureEl.insertAdjacentHTML("beforeend", '<a href="#" id="degreesign" role="button"> &#x2103;</a>')
        weatherEl.textContent = data.weather[0].description.replace(/^[a-z]|\s[a-z]/g, capitalize);
        windEl.textContent = "Wind Speed: " + data.wind.speed + " m/s";
        humidityEl.textContent = "Humidity: " + data.main.humidity + " %";
        pressureEl.textContent = "Pressure: " + data.main.pressure + " hPa";
        
        
        var butt = document.getElementById("degreesign");

        
        butt.addEventListener("click", function(){
               if(this.innerHTML === " ℃"){ 
                 temperatureEl.childNodes[0].textContent = "Temperature: " + fahr;
                 this.innerHTML = " &#x2109;";
                                          }
               
               else if(this.innerHTML === " ℉"){
                 temperatureEl.childNodes[0].textContent = "Temperature: " + cel;
                 this.innerHTML = " &#x2103;";
               }
        }, false)
        
        
        
        if(isDay(currHours)){
          
          switch(true){
               /*thunderstorm*/
               case weather >= 200 && weather <= 232: bodySt.background = 'url("http://pre13.deviantart.net/f98e/th/pre/i/2010/230/5/5/thunderstorm_at_domaso_beach_2_by_dercasemodder.jpg") #E3F2F6 no-repeat center center fixed';
               break;
            
               /*clear*/
               case weather === 800: bodySt.background = 'url("http://www.outdoor-photos.com/_photo/4742180.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*drizzle*/
               case weather >= 300 && weather <= 321: bodySt.background = 'url("https://c2.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*rain*/
               case weather >= 500 && weather <= 531: bodySt.background = 'url("http://content.time.com/time/potw/20080829/potw_05.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*snow*/
               case weather >= 600 && weather <= 622: bodySt.background = 'url("http://static.boredpanda.com/blog/wp-content/uuuploads/winter-landscapes/winter-landscapes-18.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*mist*/
               case weather >= 701 && weather <= 781: bodySt.background = 'url("http://blog.logomyway.com/wp-content/uploads/2011/08/07.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*clouds*/
               case weather >= 801 && weather <= 804: bodySt.background = 'url("http://img05.deviantart.net/6586/i/2011/234/4/3/cloudy_sunset_by_tony_ob-d3gwuv2.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*extreme*/ 
               case weather >= 900 && weather <= 906: bodySt.background = 'url("http://i.huffpost.com/gen/2176456/images/o-TORNADO-facebook.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
               /*Wind*/
               case weather >= 951 && weather <= 962: bodySt.background = 'url("https://www.ephotozine.com/articles/xxx-photos-of-windy-weather-captured-in-creative-ways--28777/images/112076_1353315704.jpg") #E3F2F6 no-repeat center center fixed';
               break;
              
           }
          }
        
        if(!(isDay(currHours))){
          
          switch(true){
               /*thunderstorm*/
               case weather >= 200 && weather <= 232: bodySt.background = 'url("https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg") black no-repeat center center fixed';
               break;
            
               /*clear*/
               case weather === 800: bodySt.background = 'url("https://i.redditmedia.com/4OUR05Z6aQK4u8NHVF8-G2V3qXqIQ06aIhXQheiheq0.jpg?w=1024&s=4cfabbdf8c30ffc9237cec5c6fca35af") black no-repeat center center fixed';
               break;
              
               /*drizzle*/
               case weather >= 300 && weather <= 321: bodySt.background = 'url("http://7-themes.com/data_images/out/60/6976752-night-rain-wallpaper.jpg") black no-repeat center center fixed';
               break;
              
               /*rain*/
               case weather >= 500 && weather <= 531: bodySt.background = 'url("https://i.ytimg.com/vi/oIT_yVnpUGc/maxresdefault.jpg") black no-repeat center center fixed';
               break;
              
               /*snow*/
               case weather >= 600 && weather <= 622: bodySt.background = 'url("http://i.huffpost.com/gen/2492436/thumbs/o-SNOWFALL-AT-NIGHT-570.jpg?5") black no-repeat center center fixed';
               break;
              
               /*mist*/
               case weather >= 701 && weather <= 781: bodySt.background = 'url("http://miriadna.com/desctopwalls/images/max/Mystic-foggy-evening.jpg") black no-repeat center center fixed';
               break;
              
               /*clouds*/
               case weather >= 801 && weather <= 804: bodySt.background = 'url("https://s-media-cache-ak0.pinimg.com/736x/36/0f/f0/360ff076c9dff58b067937278dc87e3f.jpg") black no-repeat center center fixed';
               break;
              
               /*extreme*/ 
               case weather >= 900 && weather <= 906: bodySt.background = 'url("https://c1.staticflickr.com/1/90/235739138_c130da9f4d_z.jpg?zz=1") black no-repeat center center fixed';
               break;
              
               /*Wind*/
               case weather >= 951 && weather <= 962: bodySt.background = 'url("http://www.scaryforkids.com/pics/night-wind.jpg") black no-repeat center center fixed';
               break;
              
           }
          }
        
        });
    });
  }