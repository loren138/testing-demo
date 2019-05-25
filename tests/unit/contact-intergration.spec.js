import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";

// Testing with http https://lmiller1990.github.io/vue-testing-handbook/simulating-user-input.html#a-real-world-example
describe("Contact.vue", () => {
    it("renders title", () => {
        const wrapper = shallowMount(Contact, {});
        expect(wrapper.text()).toMatch("Contact Loren");
    });
    it("reveals thank you when submitted", () => {
        const wrapper = shallowMount(Contact);

        wrapper.find("#name").setValue("Loren");
        wrapper.find("#email").setValue("email@email.com");
        wrapper.find("#message").setValue("Hi from unit test");
        wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find("#thanks").exists()).toBe(true);
    });
    it("shows required errors", () => {
        const wrapper = shallowMount(Contact);

        wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find("#nameError").text()).toBe("Name is Required!");
        expect(wrapper.find("#emailError").text()).toBe("Email is Required!");
        expect(wrapper.find("#messageError").text()).toBe("Message is Required!");
    });
    it("shows message length error", () => {
        const wrapper = shallowMount(Contact);

        wrapper.find("#name").setValue("Loren");
        wrapper.find("#email").setValue("email@email.com");
        wrapper.find("#message").setValue("Hi");
        wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find("#messageError").text()).toBe("Message must be at least 10 characters!");
    });
});
