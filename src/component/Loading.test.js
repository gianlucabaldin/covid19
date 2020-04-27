import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading component', () => {
  const wrapper = shallow(<Loading />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
