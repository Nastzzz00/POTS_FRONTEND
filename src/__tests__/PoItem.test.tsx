/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
import PoItem from "../components/PoItem";

const props = {
  list: [
    {
      id: 1,
      poNumber: "OTN 20202121E565656",
      poStatus: "Delivered and is on now in the facility"
    },
    {
      id: 2,
      poNumber: "OTN 20202121E565656",
      poStatus: "Delivered and is on now in the facility"
    },
    {
      id: 3,
      poNumber: "OTN 20202121E565656",
      poStatus: "Delivered and is on now in the facility"
    }
  ]
};

describe("P.O. Item", () => {
  test("renders correctly", () => {
    expect(shallow(<PoItem {...props} />)).toMatchSnapshot();
  });
});
