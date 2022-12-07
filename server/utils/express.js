const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = function (app) {
    
    //app.options('*', cors()) 
    //app.use(cors())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json({limit: '50mb'}))

}