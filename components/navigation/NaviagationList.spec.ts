import { shallowMount } from "@vue/test-utils";
import Component from "../navigation/NavigationList.vue";

describe("/navigation/NavigationList.vue", () => {
  test("renders", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.exists()).toBe(true);
  });

  test("contains TEST", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.html()).toContain("TEST");
  });
});
