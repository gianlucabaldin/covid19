import React from 'react';
import { shallow, mount, render } from 'enzyme';
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

  it('renders with props', () => {
    const mockData = {
      data: {
        confirmed: 10,
        recovered: 20,
        deaths: 30,
      },
    };
    wrapper = mount(<ChartItaly data={mockData} />);
    expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
  });
});
