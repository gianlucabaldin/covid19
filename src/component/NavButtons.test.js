import React from 'react';
import { shallow, mount } from 'enzyme';
import NavButtons from './NavButtons';

describe('NavButtons', () => {
  let wrapper = shallow(<NavButtons />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have 4 buttons', () => {
    wrapper = mount(<NavButtons />);
    expect(wrapper.find('WithStyles(ForwardRef(Button))').length).toEqual(4);
  });
});
