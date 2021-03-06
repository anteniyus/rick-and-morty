import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import CharacterLocationOriginInfo from "../../../src/screens/character/profile/CharacterLocationOriginInfo";

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

  const id = 1;
  const title = "sampleTitle";
  const name = "sampleName";
  const data = {
    id: 18,
    name: "Mr. Goldenfold's dream",
    type: "Dream",
    dimension: "Dimension C-137",
    residents: [
      "https://rickandmortyapi.com/api/character/63",
      "https://rickandmortyapi.com/api/character/80",
      "https://rickandmortyapi.com/api/character/221",
      "https://rickandmortyapi.com/api/character/246",
      "https://rickandmortyapi.com/api/character/304",
      "https://rickandmortyapi.com/api/character/305",
      "https://rickandmortyapi.com/api/character/306",
      "https://rickandmortyapi.com/api/character/396",
    ],
    url: "https://rickandmortyapi.com/api/location/18",
    created: "2017-11-18T11:46:22.933Z",
  };

  describe("props", () => {
    test("check props requirements", () => {
      const wrapper = shallow(
        <CharacterLocationOriginInfo id={id} title={title} />
      );

      expect(wrapper.instance().props.id).not.toBe(undefined);
      expect(wrapper.instance().props.title).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("render the component with no data", () => {
      const wrapper = shallow(
        <CharacterLocationOriginInfo id={id} title={title} name={name} />
      );

      const typographyCount = wrapper.find(Typography).length;

      expect(typographyCount).toBe(2);
    });

    test("check state", () => {
      const wrapper = shallow(
        <CharacterLocationOriginInfo id={id} title={title} name={name} />
      );

      wrapper.setState({ data });

      const stateData = wrapper.state();

      expect(stateData.data).toBe(data);
    });

    test("renders the component loading", () => {
      const wrapper = shallow(
        <CharacterLocationOriginInfo id={id} title={title} name={name} />
      );

      wrapper.setState({ loading: true });

      const skeletonCount = wrapper.find(Skeleton).length;

      expect(skeletonCount).toBe(1);
    });

    test("renders the component with data", () => {
      const wrapper = shallow(
        <CharacterLocationOriginInfo id={id} title={title} name={name} />
      );

      wrapper.setState({ data, loading: false });

      const typographyCount = wrapper.find(Typography).length;
      const skeletonCount = wrapper.find(Skeleton).length;

      expect(skeletonCount).toBe(0);
      expect(typographyCount).toBe(8);
    });
  });
});
