import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import MainContainer from './MainContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains', () => {
    it('contains an Header component', () => {
      expect(wrapper.find(Header).length).toEqual(1);
    });

    it('contains MainContainer component', () => {
      expect(wrapper.find(MainContainer).length).toEqual(1);
    });
  });
});
