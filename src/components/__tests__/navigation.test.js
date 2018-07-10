import React      from 'react';
import serializer from 'enzyme-to-json/serializer';

import Navigation from '../navigation';

expect.addSnapshotSerializer(serializer);

describe('Navigation test ->', () => {

  describe('Basic tests ->', () => {

    it('should render a navigation', () => {
      const component = shallow(
        <Navigation />
      );
      expect(component).toMatchSnapshot();
    });

    test('renders with children', () => {
      const component = mount(
        <Navigation>
          {'I\"m a child!'}
        </Navigation>
      );
      expect(component.props().children).toEqual('I\"m a child!');
      expect(component).toMatchSnapshot();
    });

    test('renders with state', () => {
      const TEST_SCREEN_WIDTH = 1024;
      const component = mount(
        <Navigation />
      );
      expect(component.state()).toEqual({ width: TEST_SCREEN_WIDTH });
      expect(component).toMatchSnapshot();
    });
  });
});
