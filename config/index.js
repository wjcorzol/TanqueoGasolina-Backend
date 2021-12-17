const dotenv = require('dotenv');

dotenv.config();

const config = {
    http:{
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || process.env.HTTP_PORT || 3000
    },
    dbString: process.env.DB_CONNECTION_STRING ,
};

module.exports = config;