var React = require('react');

var Screener = function(p) {
  return React.createElement('div', null, p.children);
};

Screener.propTypes = {
  children: React.PropTypes.any,
  steps: React.PropTypes.array
};

module.exports = Screener;