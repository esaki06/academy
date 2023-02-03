import React from "react";
import { shallow } from "enzyme";
import Lucky from "./lucky";

describe("Lucky", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lucky />);
    expect(wrapper).toMatchSnapshot();
  });
});
