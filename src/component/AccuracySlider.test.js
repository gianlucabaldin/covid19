import React from 'react';
import { shallow } from 'enzyme';
import AccuracySlider from './AccuracySlider';

describe('AccuracySlider', () => {
  const wrapper = shallow(<AccuracySlider />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
