import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import NavButtons from './NavButtons';

describe('MainContainer', () => {
  const wrapper = shallow(<MainContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains NavButtons component', () => {
    expect(wrapper).toContainReact(<NavButtons />);
  });
  /*
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
  }); */
});
