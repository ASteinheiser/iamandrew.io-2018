import React from 'react';

import Projects from '../projects.js';

describe('Projects test ->', () => {

  describe('Basic tests ->', () => {

    it('should render a projects page', () => {
      const component = shallow(
        <Projects />
      );
      expect(component).toMatchSnapshot();
    });

    test('renders with children', () => {
      const component = mount(
        <Projects />
      );
      expect(component.props().children).toEqual(undefined).not();
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
