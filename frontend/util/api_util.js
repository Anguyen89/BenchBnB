var ServerActions = require('../actions/serverActions.js');

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      method: 'GET',
      url: '/api/benches',
      success: function(benches){
        ServerActions.receiveAll(benches);
      }
    });
  },

};


module.exports = ApiUtil;
