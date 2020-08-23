var axios = require('axios');


var helpers = {
 getUserinfo: function () {
var data;
	axios.get('http://localhost:59847/api/values')
    .then(function(result){
    console.log(result);
    return result.data;
});

}
};

module.exports = helpers;