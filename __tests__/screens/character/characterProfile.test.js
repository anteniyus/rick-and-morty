import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CharacterProfile from "../../../src/screens/character/profile/CharacterProfile";
import CharacterMedia from "../../../src/screens/character/profile/CharacterMedia";
import CharacterContent from "../../../src/screens/character/profile/CharacterContent";
import CharacterLocationOriginInfo from "../../../src/screens/character/profile/CharacterLocationOriginInfo";
import CharacterEposide from "../../../src/screens/character/profile/CharacterEposide";

Enzyme.configure({ adapter: new Adapter() });

describe("<CharacterProfile/>", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
  });

  afterEach(() => {
    /* eslint-disable no-console,jest/no-standalone-expect */
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  describe("props", () => {
    test("check props requirements", () => {
      const wrapper = shallow(<CharacterProfile id={1} />);

      expect(wrapper.instance().props.id).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("renders the component with no data", () => {
      const data = {};

      const wrapper = shallow(<CharacterProfile id={1} />);

      wrapper.setState({ data });

      const charaMediaCount = wrapper.find(CharacterMedia).length;
      const charaContentCount = wrapper.find(CharacterContent).length;

      expect(charaMediaCount).toBe(0);
      expect(charaContentCount).toBe(0);
    });
  });

  describe("render()", () => {
    test("check state", () => {
      const data = {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        type: "Genetic experiment",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Testicle Monster Dimension",
          url: "https://rickandmortyapi.com/api/location/21",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
        ],
        url: "https://rickandmortyapi.com/api/character/7",
        created: "2017-11-04T19:59:20.523Z",
      };

      const wrapper = shallow(<CharacterProfile id={1} />);

      wrapper.setState({ data });

      const stateData = wrapper.state();

      expect(stateData.data).toBe(data);
    });
  });

  describe("render()", () => {
    test("renders the component with data", () => {
      const data = {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        type: "Genetic experiment",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        location: {
          name: "Testicle Monster Dimension",
          url: "https://rickandmortyapi.com/api/location/21",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
        ],
        url: "https://rickandmortyapi.com/api/character/7",
        created: "2017-11-04T19:59:20.523Z",
      };

      const wrapper = shallow(<CharacterProfile id={1} />);

      wrapper.setState({ data });

      const charaMediaCount = wrapper.find(CharacterMedia).length;
      const charaContentCount = wrapper.find(CharacterContent).length;
      const characterLocationOriginInfoCount = wrapper.find(
        CharacterLocationOriginInfo
      ).length;
      const charaEpisodeCount = wrapper.find(CharacterEposide).length;

      expect(charaMediaCount).toBe(1);
      expect(charaContentCount).toBe(1);
      expect(characterLocationOriginInfoCount).toBe(2);
      expect(charaEpisodeCount).toBe(1);
    });
  });
});
