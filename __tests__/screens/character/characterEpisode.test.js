import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import CharacterEpisode from "../../../src/screens/character/profile/CharacterEpisode";

Enzyme.configure({ adapter: new Adapter() });

let episodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/62",
      "https://rickandmortyapi.com/api/character/92",
      "https://rickandmortyapi.com/api/character/127",
      "https://rickandmortyapi.com/api/character/144",
      "https://rickandmortyapi.com/api/character/158",
      "https://rickandmortyapi.com/api/character/175",
      "https://rickandmortyapi.com/api/character/179",
      "https://rickandmortyapi.com/api/character/181",
      "https://rickandmortyapi.com/api/character/239",
      "https://rickandmortyapi.com/api/character/249",
      "https://rickandmortyapi.com/api/character/271",
      "https://rickandmortyapi.com/api/character/338",
      "https://rickandmortyapi.com/api/character/394",
      "https://rickandmortyapi.com/api/character/395",
      "https://rickandmortyapi.com/api/character/435",
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 2,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      "https://rickandmortyapi.com/api/character/35",
      "https://rickandmortyapi.com/api/character/38",
      "https://rickandmortyapi.com/api/character/62",
      "https://rickandmortyapi.com/api/character/92",
      "https://rickandmortyapi.com/api/character/127",
      "https://rickandmortyapi.com/api/character/144",
      "https://rickandmortyapi.com/api/character/158",
      "https://rickandmortyapi.com/api/character/175",
      "https://rickandmortyapi.com/api/character/179",
      "https://rickandmortyapi.com/api/character/181",
      "https://rickandmortyapi.com/api/character/239",
      "https://rickandmortyapi.com/api/character/249",
      "https://rickandmortyapi.com/api/character/271",
      "https://rickandmortyapi.com/api/character/338",
      "https://rickandmortyapi.com/api/character/394",
      "https://rickandmortyapi.com/api/character/395",
      "https://rickandmortyapi.com/api/character/435",
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 3,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
];

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

  describe("props", () => {
    test("check props requirements", () => {
      episodes = [];

      const wrapper = shallow(<CharacterEpisode episodes={episodes} />);

      expect(wrapper.instance().props.episodes).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("render the component with no data", () => {
      episodes = [];

      const wrapper = shallow(<CharacterEpisode episodes={episodes} />);

      const typographyCount = wrapper.find(Typography).length;

      expect(typographyCount).toBe(1);
    });

    test("check state", () => {
      const wrapper = shallow(<CharacterEpisode episodes={episodes} />);

      const episodesName = episodes.map((episode) => episode.name);
      wrapper.setState({ episodesName });

      const stateData = wrapper.state();

      expect(stateData.episodesName).toBe(episodesName);
    });

    test("renders the component loading", () => {
      const wrapper = shallow(<CharacterEpisode episodes={episodes} />);

      wrapper.setState({ loading: true });

      const skeletonCount = wrapper.find(Skeleton).length;
      const typographyCount = wrapper.find(Typography).length;

      expect(typographyCount).toBe(1);
      expect(skeletonCount).toBe(1);
    });

    test("renders the component with data", () => {
      const wrapper = shallow(<CharacterEpisode episodes={episodes} />);

      const episodesName = episodes.map((episode) => episode.name);
      wrapper.setState({ episodesName, loading: false });

      const typographyCount = wrapper.find(Typography).length;
      const skeletonCount = wrapper.find(Skeleton).length;

      expect(typographyCount).toBe(episodesName.length + 1);
      expect(skeletonCount).toBe(0);
    });
  });
});
