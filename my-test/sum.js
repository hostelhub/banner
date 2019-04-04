import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


function sum(a, b) {
  return a + b;
}
module.exports = sum;

// const enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');

// enzyme.configure({ adapter: new Adapter() });