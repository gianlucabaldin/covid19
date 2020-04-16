import React from 'react';
import { shallow, mount } from 'enzyme';
import Summary from './Summary';

describe('Summary', () => {
  let wrapper = shallow(<Summary />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Table', () => {
    wrapper = mount(<Summary />);
    // console.log(wrapper.debug());
    expect(
      wrapper.find('WithStyles(ForwardRef(TableContainer))').length,
    ).toEqual(1);
  });
});
