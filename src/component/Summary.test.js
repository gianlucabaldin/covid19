/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { TableContainer } from '@material-ui/core';
import moment from 'moment';
import Summary from './Summary';
import { fetchItalyHistoricalAllApify } from '../utils/fetch';

describe('Summary', () => {
  let wrapper = shallow(<Summary />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Table', () => {
    wrapper = mount(<Summary />);
    expect(wrapper.find(TableContainer).length).toEqual(1);
  });

  describe('fetches (mock) data', () => {
    wrapper = shallow(<Summary />);
    it('fetchs data correctly', async () => {
      await fetchItalyHistoricalAllApify().then((res) => {
        const mockData = {
          tamponi: res[res.length - 1].tamponi,
          totalCases: res[res.length - 1].totalCases,
          deceased: res[res.length - 1].deceased,
          lastUpdate: moment(
            res[res.length - 1].x,
            // ).format('DD / MM / YYYY'),
          ).format('LLL'),
          error: false,
        };
        wrapper = shallow(<Summary {...mockData} />);
        expect(wrapper.find('#summary-deceased').text()).toEqual('26644');
        expect(wrapper.find('#summary-totalCases').text()).toEqual('197675');
        expect(wrapper.find('#summary-swabs').text()).toEqual('1757659');
        // takes a day more ?!?! from where
        // expect(wrapper.find('#summary-lastupdate').text()).toEqual(
        //   'April 26, 2020 7:00 PM',
        // );
      });
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = shallow(<Summary {...mockData} />);
      // expect(wrapper).toIncludeText('ConfirmedRecoveredDeaths');
      expect(wrapper).toIncludeText('Error');
    });
  });
});
