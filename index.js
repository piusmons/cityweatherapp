


document.getElementById("submitBtn").addEventListener("click", userInputSubmitApi);

function userInputSubmitApi() {
    var userInput = document.getElementById('userCityInput').value
    console.log(userInput)
    var apiKey = "d82b925561527cb176f06d0f15e5805a"


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}` ,{mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log(response)
          var weatherData = response.weather[0].description
          var wew = document.getElementById('weatherText');
          document.getElementById('weatherText').innerHTML = ""
          const node = document.createTextNode(weatherData)

          wew.appendChild(node)
          getGif();



        });

}


function getGif() {
  var gifApiKey = "EwrugKUTOUTCyAUVXVmp9A5ASagZFsfH"
  var weather = document.getElementById('weatherText');
  var weatherText = weather.textContent
  var weatherGif = document.getElementById('gifWeather');
  //document.getElementById('weatherGif').setAttribute('src', '')

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${gifApiKey}&s=${weatherText}`, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        weatherGif.src = response.data.images.original.url;
      })




}
