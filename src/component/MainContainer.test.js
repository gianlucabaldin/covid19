import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ItalyContainer from './ItalyContainer';

describe('MainContainer', () => {
  const wrapper = shallow(<MainContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains components: ', () => {
    it('contains NavButtons component', () => {
      expect(wrapper).toContainReact(<NavButtons />);
    });

    it('contains Summary component', () => {
      expect(wrapper.find(<Summary />)).toBeDefined();
    });

    it('contains ItalyContainer component', () => {
      expect(wrapper.find(<ItalyContainer />)).toBeDefined();
    });
  });
});
