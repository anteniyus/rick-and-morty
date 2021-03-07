import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Box from "@material-ui/core/Box";

import CharacterContent from "../../../src/screens/character/profile/CharacterContent";
import CustomIcon from "../../../src/components/icon/CustomIcon";

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

  const name = "Abradolf Lincler";
  const status = "unknown";
  const species = "Human";
  const type = "Genetic experiment";
  const gender = "Male";

  describe("render()", () => {
    test("render the component with data", () => {
      const wrapper = shallow(
        <CharacterContent
          name={name}
          status={status}
          species={species}
          type={type}
          gender={gender}
        />
      );

      const boxCount = wrapper.find(Box).length;
      const customIconCount = wrapper.find(CustomIcon).length;

      expect(boxCount).toBe(3);
      expect(customIconCount).toBe(1);
    });

    test("check status icon color", () => {
      const wrapper = shallow(
        <CharacterContent
          name={name}
          status={status}
          species={species}
          type={type}
          gender={gender}
        />
      );

      const customIcon = wrapper.find(CustomIcon);

      expect(customIcon.prop("color")).toEqual("gray");
    });
  });
});
