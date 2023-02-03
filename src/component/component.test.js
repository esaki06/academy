import React from "react";
import { shallow } from "enzyme";
import Component from "./component";

describe("Component", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  });
});
