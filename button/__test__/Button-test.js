var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect = require('chai').expect;

var Button = require('../Button.jsx');


describe("Button", function() {

  it('click', function() {
    var button = TestUtils.renderIntoDocument(<Button />);
    TestUtils.Simulate.click(button.getDOMNode());
    expect(button.state.liked).to.equal(true);   
  });
});

