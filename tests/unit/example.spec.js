import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = shallowMount(Home, {});
        expect(wrapper.text()).toMatch("Test Your Website");
    });
});
