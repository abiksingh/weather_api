

const storage = new Storage()

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>{

    const city = document.getElementById('city').value;
  //  weather.changeLocation('Kolkata');
     weather.changeLocation(city);

     storage.setLocationData(city)

    getWeather()

    //close modal using jquery
    $('#LocModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results =>{
       // console.log(results);
       ui.paint(results);
    })

    .catch(err => console.log(err))


}