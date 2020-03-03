/**
 * @format
 */

import React from "react";
import { shallow } from "enzyme";
// import ShallowRenderer from "react-test-renderer/shallow";

// // Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

import HeaderTitle from "../components/HeaderTitle";
import DatePickerComponent from "../components/DatePicker";

const props = {
  title: "Date Picker"
};

describe("Date Picker", () => {
  test("renders correctly", () => {
    expect(shallow(<DatePickerComponent {...props} />)).toMatchSnapshot();
  });
});
