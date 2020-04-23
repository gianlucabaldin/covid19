/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ItalyContainer from './ItalyContainer';
import { fetchItalyHistoricalAll } from '../utils/fetch';
import ItalyChart from './ItalyChart';
import ItalyRegions from './ItalyRegions';
import Summary from './Summary';

describe('ItalyContainer', () => {
  let wrapper = shallow(<ItalyContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('not contains', () => {
    it('ItalyChart component if no data are fetched/passed', () => {
      expect(wrapper.find(ItalyChart).length).toEqual(0);
    });
  });

  describe('contains', () => {
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
      chartData = await fetchItalyHistoricalAll(true);
    });

    it('renders with its children ItalyChart', () => {
      wrapper = shallow(
        <ItalyContainer>
          <ItalyChart data={chartData} />
        </ItalyContainer>,
      );
      expect(wrapper.find('[data-id="italy-container-box"]').length).toEqual(1);
    });

    // TODO test ItalyRegion and SUmmary as well, too -> problems
  });
});
