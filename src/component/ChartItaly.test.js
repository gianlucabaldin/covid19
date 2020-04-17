/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ChartItaly from './ChartItaly';

describe('ChartItaly', () => {
  let wrapper = shallow(<ChartItaly />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with default props', () => {
    wrapper = mount(<ChartItaly />);
    expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
  });

  describe('fetches (mock) data', () => {
    it('renders with props', () => {
      const mockData = {
        data: [
          {
            Country: 'Italy',
            CountryCode: '',
            Province: '',
            City: '',
            CityCode: '',
            Lat: '0',
            Lon: '0',
            Confirmed: 2,
            Deaths: 0,
            Recovered: 0,
            Active: 0,
            Date: '2020-01-31T00:00:00Z',
          },
        ],
        error: false,
      };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
      expect(wrapper).toIncludeText(
        'date: 2020-01-31T00:00:00Z, confirmed: 2, recovered: 0, deaths: 0',
      );
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper).toIncludeText('Data not available');
    });
  });
});
