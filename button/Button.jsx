var React = require('react');
var Button = React.createClass({

  getInitialState: function() {
    return { liked: false };
  },

  handleClick: function() {
    this.setState({liked: !this.state.liked });
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>button</button>
    );
  }
});

module.exports = Button;
