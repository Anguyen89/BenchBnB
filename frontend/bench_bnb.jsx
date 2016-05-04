var React = require('react');
var ReactDOM = require('react-dom');
// BenchStore = require('./stores/benchStore.js');
// ClientActions = require('./actions/ClientActions');
// ApiUtil = require('./util/api_util');
var Search = require('./components/search');


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Search />, document.getElementById('root'));
});
