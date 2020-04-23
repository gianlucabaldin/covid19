import React from 'react';
import { shallow } from 'enzyme';
import { XYPlot, LineMarkSeries } from 'react-vis/dist';
import ItalyChart from './ItalyChart';
import { fetchItalyHistoricalAll } from '../utils/fetch';
import Error from './Error';

describe('ItalyChart', () => {
  it('renders with data with 3 series', async () => {
    const mockData = await fetchItalyHistoricalAll(true);
    const wrapper = shallow(<ItalyChart data={mockData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(XYPlot).length).toEqual(1);
    expect(wrapper.find(LineMarkSeries).length).toEqual(3);
  });
  it('renders en error message with no data', () => {
    const wrapper = shallow(<ItalyChart />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Error).length).toEqual(1);
  });

  it('renders error message if empty data are passed', () => {
    const wrapper = shallow(<ItalyChart data={undefined} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Error).length).toEqual(1);
  });
});
