import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CardMedia from "@material-ui/core/CardMedia";

import CharacterMedia from "../../../src/screens/character/profile/CharacterMedia";

Enzyme.configure({ adapter: new Adapter() });

describe("<CharacterLocationOriginInfo />", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
  });

  afterEach(() => {
    /* eslint-disable no-console,jest/no-standalone-expect */
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  const image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
  const className = "sample";

  describe("render()", () => {
    test("render the component with data", () => {
      const wrapper = shallow(<CharacterMedia image={image} />);

      const cardMediaCount = wrapper.find(CardMedia).length;

      expect(cardMediaCount).toBe(1);
    });

    test("check class name", () => {
      const wrapper = shallow(
        <CharacterMedia image={image} className={className} />
      );

      const cardMedia = wrapper.find(CardMedia);

      expect(cardMedia.prop("className")).toBe(className);
    });
  });
});
