var React = require('react');
var BenchStore = require('../stores/benchStore');
var ClientActions = require('../actions/ClientActions');

module.exports = React.createClass({

  getInitialState: function(){
    return { benches: BenchStore.all()};
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function(){
    this.benchStoreListener = BenchStore.addListener(this._onChange);
    ClientActions.fetchBenches();
  },

  render: function(){
    var benches = [];

    if(this.state.benches){
      var storedBenches = this.state.benches;
      Object.keys(storedBenches).forEach(function(key){
        benches.push(storedBenches[parseInt(key)]);
      });
    }

    benches = benches.map(function(bench){
      return <li id={bench.id}>{bench.description}</li>;
    });

    return(
        <ul>
          {benches}
        </ul>
    );
  }
});
