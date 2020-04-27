import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';

describe('Header', () => {
  const wrapper = mount(<Header />);

  it('has a left-aligned `Covid 19` text', () => {
    expect(wrapper).toIncludeText('Covid 19');
  });

  describe('contains', () => {
    it('has a center-aligned project description - with Enzyme', () => {
      const { getByText } = render(<Header />);
      expect(getByText('Latest updates & historical data')).toBeInTheDocument();
    });

    it('has a right-aligned GitHubIcon icon', () => {
      expect(wrapper.find(GitHubIcon).length).toEqual(1);
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
