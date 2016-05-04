var Dispatcher = require('../dispatcher/Dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ServerActions = {
  receiveAll: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};


module.exports = ServerActions;
