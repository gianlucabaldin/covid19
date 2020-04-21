import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Header from './Header';

describe('Header', () => {
  const wrapper = mount(<Header />);

  it('has a left-aligned `Covid 19` text', () => {
    expect(wrapper.find('.MuiTypography-h6').exists()).toEqual(true);
    expect(wrapper).toIncludeText('Covid 19');
  });

  describe('contains', () => {
    it('has a center-aligned project description - with Enzyme', () => {
      const { getByText } = render(<Header />);
      expect(wrapper).toIncludeText('Latest updates & historical data');
      expect(getByText('Latest updates & historical data')).toBeInTheDocument();
    });

    it('has a right-aligned Login button component', () => {
      expect(wrapper.contains('Login')).toEqual(true);
      expect(wrapper.find(Button).length).toEqual(1);
    });
    it('AppBar component', () => {
      expect(wrapper.contains(AppBar)).toEqual(true);
      expect(wrapper.find(AppBar).length).toEqual(1);
    });
    it('Toolbar component', () => {
      expect(wrapper.contains(Toolbar)).toEqual(true);
      expect(wrapper.find(Toolbar).length).toEqual(1);
    });
  });
});
