import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import ItalyContainer from './ItalyContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains', () => {
    it('contains an Header component', () => {
      expect(wrapper.find(Header).length).toEqual(1);
    });

    it('contains ItalyContainer component', () => {
      expect(wrapper.find(ItalyContainer).length).toEqual(1);
      expect(wrapper.contains(<ItalyContainer />)).toEqual(true);
    });
  });
});
