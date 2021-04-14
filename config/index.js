require('dotenv').config();  //obtenemos la variables de entrono usando dotenv

const config = //definimos el objeto config
{
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000
}

module.exports = { config };