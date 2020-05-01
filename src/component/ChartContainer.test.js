import React from 'react';
import { shallow } from 'enzyme';
import { XYPlot, LineMarkSeries } from 'react-vis/dist';
import ChartContainer from './ChartContainer';
import { fetchItalyHistoricalAll } from '../utils/fetch';
import Error from './Error';

xdescribe('ChartContainer', () => {
  it('renders with data with 3 series', async () => {
    const mockData = await fetchItalyHistoricalAll(true);
    const wrapper = shallow(<ChartContainer data={mockData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(XYPlot).length).toEqual(1);
    expect(wrapper.find(LineMarkSeries).length).toEqual(3);
  });
  it('renders en error message with no data', () => {
    const wrapper = shallow(<ChartContainer />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Error).length).toEqual(1);
  });

  it('renders error message if empty data are passed', () => {
    const wrapper = shallow(<ChartContainer data={undefined} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Error).length).toEqual(1);
  });
});
