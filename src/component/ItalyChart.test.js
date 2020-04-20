import React from 'react';
import { shallow } from 'enzyme';
import { XYPlot, LineMarkSeries } from 'react-vis/dist';
import ItalyChart from './ItalyChart';
import { fetchItalyHistoricalAll } from '../utils/fetch';

describe('ItalyChart', () => {
  it('renders properly with no data', () => {
    const wrapper = shallow(<ItalyChart />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('Ops! An error occured.');
  });

  it.only('renders with data with 3 series', async () => {
    const mockData = await fetchItalyHistoricalAll();
    const wrapper = shallow(<ItalyChart data={mockData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(<XYPlot />)).toBeDefined();
    expect(wrapper.find(<LineMarkSeries />)).toBeDefined();
    // .toHaveLength(3);
  });

  it('renders error message if empty data are passed', () => {
    const wrapper = shallow(<ItalyChart data={undefined} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('Ops! An error occured.');
  });
});
