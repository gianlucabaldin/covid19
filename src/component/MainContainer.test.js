/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MainContainer from './MainContainer';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';

describe('MainContainer', () => {
  let wrapper = shallow(<MainContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains components: ', () => {
    it('contains NavButtons component', () => {
      expect(wrapper).toContainReact(<NavButtons />);
    });

    it('contains Summary component', () => {
      expect(wrapper).toContainReact(<Summary />);
    });

    it('contains ChartItaly component', () => {
      const mockData = {
        confirmed: 10,
        recovered: 20,
        deaths: 30,
      };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper.find('Styled(MuiBox)').exists()).toEqual(true);
    });
  });

  describe('fetches (mock)data', () => {
    it('fetchs Italy data', () => {
      const mockData = {
        confirmed: 10,
        recovered: 20,
        deaths: 30,
      };
      wrapper = mount(<ChartItaly {...mockData} />);
      expect(wrapper).toIncludeText('Confirmed: 10');
      expect(wrapper).toIncludeText('Recovered: 20');
      expect(wrapper).toIncludeText('Deaths: 30');
    });
  });
});
