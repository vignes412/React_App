var React = require('react');
var shallow = require('enzyme').shallow;
var expect = require('chai').expect;
var Message =require('../components/Message.jsx');

describe('Message', () => {
    it('renders the message', () => {
        const component = shallow(<Message message="Hello, world!" />);
        expect(component.props().className).to.equal('message');
        expect(component.props().children).to.equal('Hello, world!');
    });
});
