import React from 'react';
import { shallow } from 'enzyme';
import ItalyChart from './ItalyChart';
import { fetch } from '../utils/fetch';

describe('ItalyChart', () => {
  it('renders properly with no data', () => {
    const wrapper = shallow(<ItalyChart />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('Ops! An error occured.');
  });

  it('renders with data', async () => {
    const mockData = await fetch(true);
    const wrapper = shallow(<ItalyChart data={mockData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders error message if empty data are passed', () => {
    const wrapper = shallow(<ItalyChart data={undefined} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('Ops! An error occured.');
  });
});
