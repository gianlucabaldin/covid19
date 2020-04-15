import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const wrapper = mount(<Header />);

  it('has a left-aligned `Covid 19` text', () => {
    expect(wrapper.find('.MuiTypography-h6').exists()).toEqual(true);
    expect(wrapper).toIncludeText('Covid 19');
  });

  it('has a center-aligned project description - with Enzyme', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Latest updates & historical data')).toBeInTheDocument();
  });

  // https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md
  it('has a center-aligned project description - with jest-enzyme', () => {
    expect(wrapper).toIncludeText('Latest updates & historical data');
  });

  it('has a right-aligned project description - with jest-enzyme', () => {
    expect(wrapper.contains('Login')).toEqual(true);
  });
});
