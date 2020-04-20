import React from 'react';
import { shallow } from 'enzyme';
import ItalyRegions from './ItalyRegions';
import { fetchItalyRegion } from '../utils/fetch';

describe('ItalyRegions', () => {
  let wrapper = shallow(<ItalyRegions />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a table', () => {
    expect(
      wrapper.find('WithStyles(ForwardRef(TableContainer))'),
    ).toBeDefined();
  });

  describe('fetches', () => {
    it('fetches data and show them within the table', async () => {
      const tableData = await fetchItalyRegion();
      wrapper = shallow(<ItalyRegions tableData={tableData} />);
      expect(wrapper).toIncludeText('Piemonte');
    });

    it('fetches no data and show error', async () => {
      wrapper = shallow(<ItalyRegions tableData={[]} />);
      expect(wrapper).toIncludeText('Ops! An error occured.');
    });
  });
});
