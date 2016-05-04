var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');
var _benches = {};
var BenchConstants = require('../constants/bench_constants');
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function(){
  return Object.assign({}, _benches);
};

var resetBenches = function(benches){
  _benches = {};
  benches.forEach(function(bench){
    _benches[bench.id] = bench;
  });
};

BenchStore.__onDispatch = function(payload){
switch(payload.actionType){
  case(BenchConstants.BENCHES_RECEIVED):
  resetBenches(payload.benches);
  BenchStore.__emitChange();
  break;
}

};



module.exports = BenchStore;
