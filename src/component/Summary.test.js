/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Summary from './Summary';
import { fetchLastDay } from '../utils/fetch';

describe('Summary', () => {
  let wrapper = shallow(<Summary />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Table', () => {
    wrapper = mount(<Summary />);
    expect(
      wrapper.find('WithStyles(ForwardRef(TableContainer))'),
    ).toBeDefined();
  });

  describe('fetches (mock) data', () => {
    wrapper = shallow(<Summary />);
    it('fetchs data correctly', async () => {
      const { Confirmed, Recovered, Deaths } = await fetchLastDay(true);
      const mockData = {
        confirmed: Confirmed,
        recovered: Recovered,
        deaths: Deaths,
      };
      wrapper = shallow(<Summary {...mockData} />);
      expect(wrapper.find('#summary-confirmed').text()).toEqual('172434');
      expect(wrapper.find('#summary-recovered').text()).toEqual('42727');
      expect(wrapper.find('#summary-deaths').text()).toEqual('22745');
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = shallow(<Summary {...mockData} />);
      expect(wrapper).toIncludeText('ConfirmedRecoveredDeaths');
    });
  });
});
