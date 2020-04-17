import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import NavButtons from './NavButtons';
import Summary from './Summary';
import ChartItaly from './ChartItaly';

describe('MainContainer', () => {
  const wrapper = shallow(<MainContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('contains components: ', () => {
    it('contains NavButtons component', () => {
      expect(wrapper).toContainReact(<NavButtons />);
    });

    it('contains Summary component', () => {
      expect(wrapper).toContainReact(
        <Summary confirmed={0} recovered={0} deaths={0} error={false} />,
      );
    });

    it('contains ChartItaly component', () => {
      expect(wrapper).toContainReact(
        <ChartItaly confirmed={0} recovered={0} deaths={0} error={false} />,
      );
    });
  });
});
