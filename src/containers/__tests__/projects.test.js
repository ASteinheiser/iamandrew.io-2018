import React      from 'react';
import serializer from 'enzyme-to-json/serializer';

import Projects from '../projects.js';

expect.addSnapshotSerializer(serializer);

describe('Projects test ->', () => {

  describe('Basic tests ->', () => {

    it('should render a projects page', () => {
      const component = shallow(
        <Projects />
      );
      expect(component).toMatchSnapshot();
    });

    test('renders with no props', () => {
      const component = mount(
        <Projects />
      );
      expect(component.props()).toEqual({});
      expect(component).toMatchSnapshot();
    });

    test('renders with no state', () => {
      const component = mount(
        <Projects />
      );
      expect(component.state()).toEqual(null);
      expect(component).toMatchSnapshot();
    });
  });
});
