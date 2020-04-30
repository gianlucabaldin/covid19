/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import ItalyContainer from './ItalyContainer';
import { fetchItalyHistoricalAll } from '../utils/fetch';
import ChartContainer from './ChartContainer';
import ItalyRegions from './ItalyRegions';
import Summary from './Summary';

describe('ItalyContainer', () => {
  let wrapper = shallow(<ItalyContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains', () => {
    it('ChartContainer component', () => {
      expect(wrapper.find(ChartContainer).length).toEqual(1);
    });

    it('ItalyRegions component', () => {
      expect(wrapper.find(ItalyRegions).length).toEqual(1);
    });

    it('Summary component', () => {
      expect(wrapper.find(Summary).length).toEqual(1);
    });
  });

  describe('fetches (mock) data', () => {
    let chartData;
    beforeAll(async () => {
      chartData = await fetchItalyHistoricalAll();
    });

    it('renders with its children ChartContainer', () => {
      wrapper = shallow(
        <ItalyContainer>
          <ChartContainer data={chartData} />
        </ItalyContainer>,
      );
      expect(
        wrapper.find('[data-test-id="italy-container-chart-box"]').length,
      ).toEqual(1);
    });

    // TODO test ItalyRegion and SUmmary as well, too -> problems
  });
});
