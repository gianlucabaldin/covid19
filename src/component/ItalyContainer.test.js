/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ItalyContainer from './ItalyContainer';
import { fetch } from '../utils/fetch';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';

describe('ItalyContainer', () => {
  let wrapper = shallow(<ItalyContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with default props', () => {
    wrapper = mount(<ItalyContainer />);
    expect(wrapper.find('Styled(MuiBox)')).toBeDefined();
  });

  describe('contains', () => {
    it('ItalyChart component', () => {
      expect(wrapper.find(<ItalyChart />)).toBeDefined();
    });

    it('ItalyContainer component', () => {
      expect(wrapper.find(<ItalyRegions />)).toBeDefined();
    });
  });

  describe('fetches (mock) data', () => {
    it('renders with props', () => {
      const mockData = {
        data: fetch(true),
        error: false,
      };
      wrapper = mount(<ItalyContainer {...mockData} />);
      expect(wrapper.find('Styled(MuiBox)')).toBeDefined();
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = mount(<ItalyContainer {...mockData} />);
      expect(wrapper).toIncludeText('Data not available');
    });
  });
});
