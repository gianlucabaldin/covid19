import React from 'react';
import { shallow, mount } from 'enzyme';
import Summary from './Summary';

describe('Summary', () => {
  let wrapper = shallow(<Summary />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Table', () => {
    wrapper = mount(<Summary />);
    // console.log(wrapper.debug());
    expect(
      wrapper.find('WithStyles(ForwardRef(TableContainer))').length,
    ).toEqual(1);
  });

  describe('fetches (mock) data', () => {
    wrapper = shallow(<Summary />);
    it("fetchs Italy's summary data", () => {
      const mockData = {
        confirmed: 10,
        recovered: 20,
        deaths: 30,
      };
      wrapper = mount(<Summary {...mockData} />);
      expect(wrapper).toIncludeText('10');
      expect(wrapper).toIncludeText('20');
      expect(wrapper).toIncludeText('30');
    });
  });
});
