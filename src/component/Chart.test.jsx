import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Chart from './Chart';
import Loading from './Loading';
import { STATUS } from '../utils/consts';

describe('Chart', () => {
  let wrapper = shallow(<Chart />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('with running spinner', () => {
    expect(wrapper.contains(<Loading />)).toEqual(true);
  });

  describe('with spinner', () => {
    it('is not running', () => {
      wrapper = shallow(<Chart loading={false} />);
      expect(wrapper.contains(<Loading />)).toEqual(false);
    });

    it('shows the legend', () => {
      const { getByText } = render(
        <Chart loading={false} status={[STATUS.DAILY_SWABS]} />,
      );
      expect(getByText('DAILY SWABS')).toBeInTheDocument();
    });
  });
});
