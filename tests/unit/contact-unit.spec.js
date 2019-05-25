import Contact from "@/views/Contact.vue";

describe("Contact.vue", () => {
    it("validator works", () => {
        const localThis = { formData: {} };

        expect(Contact.methods.validate.call(localThis)).toBe(false);
        expect(localThis.nameError).toBe("Name is Required!");
        expect(localThis.emailError).toBe("Email is Required!");
        expect(localThis.messageError).toBe("Message is Required!");
    });
});
