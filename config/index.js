var configValues = require('./config.json');

module.exports={
    getDBConnectionString:function(){
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds217921.mlab.com:17921/abhishekr';
    }
}