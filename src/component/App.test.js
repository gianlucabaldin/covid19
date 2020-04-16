import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './Header';
import MainContainer from './MainContainer';
/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe('App', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains', () => {
    beforeAll(() => {
      wrapper = mount(<App />);
    });

    // Enzyme-matchers --> expect(wrapper).toContainReact(<ReactComponent />)
    // https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md#tocontainreact
    it('contains an Header component', () => {
      expect(wrapper).toContainReact(<Header />);
    });

    it('contains MainContainer component', () => {
      expect(wrapper).toContainReact(<MainContainer />);
    });
  });
});
