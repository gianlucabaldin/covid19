import React from 'react';
import { shallow } from 'enzyme';
import DataProvided from './DataProvided';

describe('DataProvided component', () => {
  let wrapper = shallow(<DataProvided />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render date and ref', () => {
    wrapper = shallow(<DataProvided href="www.google.com" />);
    expect(wrapper).toIncludeText('Data provided by www.google.com');
  });
});
