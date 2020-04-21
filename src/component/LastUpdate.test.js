import React from 'react';
import { shallow } from 'enzyme';
import LastUpdate from './LastUpdate';

describe('Last Update component', () => {
  let wrapper = shallow(<LastUpdate />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render date and ref', () => {
    wrapper = shallow(<LastUpdate date="2020-04-20" href="www.google.com" />);
    expect(wrapper).toIncludeText(
      'Data provided by www.google.com, last update available: 20/04/2020',
    );
  });
});
