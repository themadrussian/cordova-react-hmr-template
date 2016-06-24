import React from 'react';
import '../css/bootstrap.min.css';
//import '../css/custom.css';

var Board = React.createClass({
  getInitialState: function(){
    return {
    };
  },

  render: function() {
    return (
        <div className="container">
          <span>Board</span>
        </div>
    );
  }
});

module.exports = Board;
