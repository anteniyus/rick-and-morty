import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Skeleton from "@material-ui/lab/Skeleton";

import CharacterProfile from "../../../src/screens/character/profile/CharacterProfile";
import CharacterMedia from "../../../src/screens/character/profile/CharacterMedia";
import CharacterContent from "../../../src/screens/character/profile/CharacterContent";
import CharacterLocationOriginInfo from "../../../src/screens/character/profile/CharacterLocationOriginInfo";
import CharacterEpisode from "../../../src/screens/character/profile/CharacterEpisode";

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

  const id = 1;
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

  describe("props", () => {
    test("check props requirements", () => {
      const wrapper = shallow(<CharacterProfile id={id} />);

      expect(wrapper.instance().props.id).not.toBe(undefined);
    });
  });

  describe("render()", () => {
    test("renders the component with no data", () => {
      const wrapper = shallow(<CharacterProfile id={id} />);

      wrapper.setState({});

      const charaMediaCount = wrapper.find(CharacterMedia).length;
      const charaContentCount = wrapper.find(CharacterContent).length;

      expect(charaMediaCount).toBe(0);
      expect(charaContentCount).toBe(0);
    });

    test("check state", () => {
      const wrapper = shallow(<CharacterProfile id={id} />);

      wrapper.setState({ data });

      const stateData = wrapper.state();

      expect(stateData.data).toBe(data);
    });

    test("renders the component loading", () => {
      const wrapper = shallow(<CharacterProfile id={id} />);

      wrapper.setState({ loading: true });

      const skeletonCount = wrapper.find(Skeleton).length;

      expect(skeletonCount).toBe(1);
    });

    test("renders the component with data", () => {
      const wrapper = shallow(<CharacterProfile id={id} />);

      wrapper.setState({ data, loading: false });

      const charaMediaCount = wrapper.find(CharacterMedia).length;
      const charaContentCount = wrapper.find(CharacterContent).length;
      const characterLocationOriginInfoCount = wrapper.find(
        CharacterLocationOriginInfo
      ).length;
      const charaEpisodeCount = wrapper.find(CharacterEpisode).length;
      const skeletonCount = wrapper.find(Skeleton).length;

      expect(skeletonCount).toBe(0);
      expect(charaMediaCount).toBe(1);
      expect(charaContentCount).toBe(1);
      expect(characterLocationOriginInfoCount).toBe(2);
      expect(charaEpisodeCount).toBe(1);
    });
  });
});
