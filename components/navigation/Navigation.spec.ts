import { shallowMount } from "@vue/test-utils";
import Component from "../navigation/Navigation.vue";

describe("/navigation/Navigation.vue", () => {
  test("renders", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.exists()).toBe(true);
  });

  test("contains navigation div", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.contains(".navigation")).toBe(true);
  });
});
