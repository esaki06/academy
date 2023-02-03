import React from "react";
import { shallow } from "enzyme";
import Meoww from "./meoww";

describe("Meoww", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Meoww />);
    expect(wrapper).toMatchSnapshot();
  });
});
