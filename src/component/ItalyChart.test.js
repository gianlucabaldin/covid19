import React from 'react';
import { shallow } from 'enzyme';
import ItalyChart from './ItalyChart';
import { fetch } from '../utils/fetch';

describe('ItalyChart', () => {
  it('renders properly with no data', () => {
    const wrapper = shallow(<ItalyChart />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with data', async () => {
    const mockData = await fetch(true);
    const wrapper = shallow(<ItalyChart data={mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
