class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.temp = document.getElementById('w-temp');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feelslike');
        this.windy = document.getElementById('w-wind');

        
    }


    paint(weather){

        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = weather.current.temp_c;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Humidity:${weather.current.humidity}`;
        this.feelslike.textContent = `FeelsLike:${weather.current.feelslike_c}`;
        this.windy.textContent = `Wind Speed:${weather.current.wind_kph} kmph`;
        this.temp.textContent = `Gust Speed:${weather.current.gust_kph} kmph`;


    }

}