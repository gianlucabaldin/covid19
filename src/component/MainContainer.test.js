import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';

describe('MainContainer', () => {
  const wrapper = shallow(<MainContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains NavButtons component', () => {
    expect(wrapper).toContainReact(<NavButtons />);
  });

  it('contains Summary component', () => {
    expect(wrapper).toContainReact(<Summary />);
  });

  // it.only('contains ChartItaly component', () => {
  //   expect(wrapper).toContainReact(<ChartItaly data={{...}}/>);
  // });
});
