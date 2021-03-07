import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";

import CharacterCard from "../../../src/screens/character/profile/CharacterCard";
import CharacterMedia from "../../../src/screens/character/profile/CharacterMedia";
import CharacterContent from "../../../src/screens/character/profile/CharacterContent";

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

  describe("render()", () => {
    test("renders the component with data", () => {
      const wrapper = shallow(<CharacterCard data={data} />);

      const charaMediaCount = wrapper.find(CharacterMedia).length;
      const charaContentCount = wrapper.find(CharacterContent).length;
      const linkCount = wrapper.find(Link).length;

      expect(charaMediaCount).toBe(1);
      expect(charaContentCount).toBe(1);
      expect(linkCount).toBe(1);
    });

    test("check the route", () => {
      const wrapper = shallow(<CharacterCard data={data} />);

      const link = wrapper.find(Link);

      expect(link.at(0).props().to).toBe(`/character/profile/${data.id}`);
    });
  });
});
