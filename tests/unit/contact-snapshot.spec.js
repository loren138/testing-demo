import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

describe("Contact.vue", () => {
    it("reveals thank you when submitted", () => {
        const wrapper = shallowMount(Contact);

        wrapper.find("#name").setValue("Loren");
        wrapper.find("#email").setValue("email@email.com");
        wrapper.find("#message").setValue("Hi from unit test");
        wrapper.find("form").trigger("submit.prevent");

        expect(wrapper).toMatchSnapshot();
    });
    it("shows required errors", () => {
        const wrapper = shallowMount(Contact);

        wrapper.find("form").trigger("submit.prevent");

        expect(wrapper).toMatchSnapshot();
    });
});
