class Weather{
    constructor(city){
        this.apikey = '275dadbe0ec14ce385e124630191905';
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

