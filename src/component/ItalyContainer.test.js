/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ItalyContainer from './ItalyContainer';
import { fetchItalyHistoricalAll } from '../utils/fetch';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import Summary from './Summary';

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

    it('ItalyRegions component', () => {
      expect(wrapper.find(<ItalyRegions />)).toBeDefined();
    });

    it('Summary component', () => {
      expect(wrapper.find(<Summary />)).toBeDefined();
    });
  });

  describe('fetches (mock) data', () => {
    it('renders with props', () => {
      const tableData = {
        data: fetchItalyHistoricalAll(),
        error: false,
      };
      wrapper = mount(<ItalyContainer {...tableData} />);
      expect(wrapper.find('Styled(MuiBox)')).toBeDefined();
    });

    // it('fetchs data wrongly', () => {
    //   const mockData = { error: true };
    //   wrapper = mount(<ItalyContainer {...mockData} />);
    //   expect(wrapper).toIncludeText('Ops! An error occured.');
    // });
  });
});
