/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ItalyContainer from './ItalyContainer';
import { fetch } from '../utils/fetch';

describe('ItalyContainer', () => {
  let wrapper = shallow(<ItalyContainer />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with default props', () => {
    wrapper = mount(<ItalyContainer />);
    expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
  });

  describe('fetches (mock) data', () => {
    it('renders with props', () => {
      const mockData = {
        data: fetch(true),
        error: false,
      };
      wrapper = mount(<ItalyContainer {...mockData} />);
      expect(wrapper.find('Styled(MuiBox)').length).toEqual(1);
    });

    it('fetchs data wrongly', () => {
      const mockData = { error: true };
      wrapper = mount(<ItalyContainer {...mockData} />);
      expect(wrapper).toIncludeText('Data not available');
    });
  });
});
