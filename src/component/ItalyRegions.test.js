import React from 'react';
import { shallow } from 'enzyme';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion } from '../utils/fetch';
import Loading from './Loading';
import { mockItalyRegionsResponse } from '../utils/mock/mockItalyRegionsResponse';

describe('ItalyRegions', () => {
  let wrapper = shallow(<ItalyRegions />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the spinner on load', () => {
    wrapper = shallow(<ItalyRegions data={mockItalyRegionsResponse} />);
    expect(wrapper.find(Loading).length).toEqual(1);
  });

  it('renders an error if empty data are passed and shows error', async () => {
    wrapper = shallow(<ItalyRegions data={[]} />);
    expect(wrapper.find('Error').length).toEqual(1);
  });

  describe('fetches', () => {
    it('fetches data and show them within the table', async () => {
      const tableData = await fetchItalyRegion(true);
      wrapper = shallow(<ItalyRegions data={tableData} loading={false} />);
      expect(wrapper).toIncludeText('Piemonte');
    });
  });
});
