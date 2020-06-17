const argv = require('yargs').options({
    city: {
        alias: 'c',
        description: "Name if the city",
        demand: true
    },
    option: {
        alias: 'o',
        description: "presion o humedad",
    }

}).argv;
const weather = require('./controlador/clima')
const get_information = async(city) => {
    try {
        const values = await weather.getClima(argv.city, argv.option);
        return values
    } catch (error) {
        return `la ciudad ${city} no se encutra`;
    }
}
get_information(argv.city).then(resp => {
    console.log(`DATOS DE LA CIUDAD: ${argv.city}`);;
    console.table(resp);
}).catch(console.log)