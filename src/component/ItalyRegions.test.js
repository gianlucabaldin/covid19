import React from 'react';
import { shallow } from 'enzyme';
import { TableContainer } from '@material-ui/core';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion } from '../utils/fetch';
import Error from './Error';

describe('ItalyRegions', () => {
  let wrapper = shallow(<ItalyRegions />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an error if no data aare passed', () => {
    expect(wrapper.find(Error).length).toEqual(1);
  });

  it('renders an error if empty data are passed and shows error', async () => {
    wrapper = shallow(<ItalyRegions tableData={[]} />);
    expect(wrapper.find('Error').length).toEqual(1);
  });

  describe('fetches', () => {
    it('fetches data and show them within the table', async () => {
      const tableData = await fetchItalyRegion();
      wrapper = shallow(<ItalyRegions tableData={tableData} />);
      expect(wrapper).toIncludeText('Piemonte');
    });
  });
});
