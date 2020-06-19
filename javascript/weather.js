class Weather{
    constructor(city){
        this.apikey = 'Put Google api key here!';
        this.city = city;
        
    }


    async getWeather(){
        const WeatherResponse = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apikey}&q=${this.city}`)

        const ResponseData = await WeatherResponse.json();

        return ResponseData
    }

    changeLocation(city){
        this.city = city;
    }

}

