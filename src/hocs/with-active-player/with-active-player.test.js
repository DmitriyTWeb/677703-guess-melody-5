import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActivePlayer from "./with-active-player";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`withAudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
