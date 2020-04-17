/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ChartItaly from './ChartItaly';

describe('ChartItaly', () => {
  let wrapper = shallow(<ChartItaly />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with default props', () => {
    wrapper = mount(<ChartItaly />);
    expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
  });

  describe('fetches (mock) data', () => {
    it('renders with props', () => {
      const mockData = {
        confirmed: 10,
        recovered: 20,
        deaths: 30,
        error: false,
      };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
      expect(wrapper).toIncludeText('Confirmed: 10Recovered: 20Deaths: 30');
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper).toIncludeText('Confirmed: Recovered: Deaths: ');
    });
  });
});
