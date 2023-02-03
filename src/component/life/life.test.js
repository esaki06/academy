import React from "react";
import { shallow } from "enzyme";
import Life from "./life";

describe("Life", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Life />);
    expect(wrapper).toMatchSnapshot();
  });
});
