var React = require('react');
var Map = require('./map');
var Index = require('./index');

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <Map></Map>
        <Index></Index>
      </div>
    );
  }
});
