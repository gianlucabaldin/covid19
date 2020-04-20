import React from 'react';
import { shallow } from 'enzyme';
import ItalyRegions from './ItalyRegions';

describe('ItalyRegions', () => {
  const wrapper = shallow(<ItalyRegions />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a table', () => {
    expect(
      wrapper.find('WithStyles(ForwardRef(TableContainer))'),
    ).toBeDefined();
  });

  it('fetches data and show them within the table', () => {
    expect(wrapper).tocContainText('Piemonte');
  });
});
