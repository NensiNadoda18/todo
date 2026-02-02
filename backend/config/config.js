require('dotenv').config({path:__dirname+'/../.env'})

const _config={
    port:process.env.PORT,
    mongo_uri:process.env.MONGO_CONNECTION_STRING,
    jwt_secret:process.env.JWT_SECRET,
}
const config=Object.freeze(_config)
module.exports=config