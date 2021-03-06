import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Skeleton from "@material-ui/lab/Skeleton";

import CharactersCardList from "../../../src/screens/character/CharactersCardList";
import CharacterCard from "../../../src/screens/character/profile/CharacterCard";

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
    info: {
      count: 671,
      pages: 34,
      next: "https://rickandmortyapi.com/api/character/?page=2",
      prev: null,
    },
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z",
      },
    ],
  };

  describe("render()", () => {
    test("render the component with no data", () => {
      const wrapper = shallow(<CharactersCardList getCharacters={() => {}} />);

      const characterCardCount = wrapper.find(CharacterCard).length;

      expect(characterCardCount).toBe(0);
    });

    test("renders the component with data", () => {
      const wrapper = shallow(
        <CharactersCardList getCharacters={() => {}} data={data} />
      );

      const characterCardCount = wrapper.find(CharacterCard).length;

      expect(characterCardCount).toBe(data.results.length);
    });

    test("renders the component loading", () => {
      const wrapper = shallow(
        <CharactersCardList getCharacters={() => {}} isLoading />
      );

      const skeletonCount = wrapper.find(Skeleton).length;

      expect(skeletonCount).toBe(1);
    });
  });
});
