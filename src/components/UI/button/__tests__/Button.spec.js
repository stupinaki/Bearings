import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "../ButtonUI.vue";

describe("Button", () => {
  it("renders properly", () => {
    const wrapper = mount(Button, { props: { size: "m", type: "primary" } });
    expect(wrapper.classes().length).eq(3);
  });
});
