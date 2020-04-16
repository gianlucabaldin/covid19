import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import ChartItaly from './ChartItaly';

describe('ChartItaly', () => {
  let wrapper = shallow(<ChartItaly />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Box', () => {
    wrapper = mount(<ChartItaly />);
    // console.log(wrapper.debug());
    // expect(wrapper.find('Box').length).toEqual(1);
    const { getByText } = mount(<ChartItaly />);
    expect(getByText('0')).toBeInTheDocument();
  });
});
