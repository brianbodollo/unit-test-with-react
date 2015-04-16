var React = require('react');
var Button = React.createClass({

  getInitialState: function() {
    return { liked: false };
  },

  handleClick: function() {
    console.log("i was fucking clicked");
    this.setState({liked: !this.state.liked });
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>I&#39;am motherfucking button</button>
    );
  }
});

module.exports = Button;