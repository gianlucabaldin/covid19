import React from 'react';
import { shallow } from 'enzyme';

describe('ItalyChart', () => {
  const wrapper = shallow(<ItalyChart />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
