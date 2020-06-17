const axios = require('axios');
const getClima = async(city, option) => {
    const cityURL = encodeURI(city)
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=94162bb23f3c7370cf2eff66e4d17814&q=${cityURL}&units=metric`);
    switch (option) {
        case 'p':
            return ({ temperatura: resp.data.main.temp, presion: resp.data.main.pressure })
        case 'h':
            return ({ temperatura: resp.data.main.temp, humedad: resp.data.main.humidity })
        default:
            return ({ temperatura: resp.data.main.temp, presion: resp.data.main.pressure, humedad: resp.data.main.humidity })
    }
}

module.exports = {
    getClima
}