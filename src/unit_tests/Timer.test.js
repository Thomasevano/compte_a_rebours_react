import React from 'react';
import Timer from '../components/Timer';
import renderer from 'react-test-renderer';

test('verify background color change according to the number of seconds displayed', () => {
  const component = renderer.create(
    <Timer>
    </Timer>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});