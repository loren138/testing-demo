<template>
    <div class="content-box contact">
        <div>
            <h2 class="contact__title">
                Contact Loren
            </h2>
            <!--
            <div id="ad">
                Ad Panel
            </div>
            -->
            <div
                v-if="submitted"
                id="thanks"
                class="thanks"
            >
                Thanks for contacting us someone will follow up with you within 2 business days.
            </div>
            <form
                v-if="!submitted"
                name="contact"
                method="post"
                @submit.prevent="handleSubmit"
            >
                <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                >
                <div class="sender-info">
                    <div>
                        <label
                            for="name"
                            :class="{ error: !!nameError }"
                        >Your name:</label>
                        <input
                            id="name"
                            v-model="formData.name"
                            type="text"
                            name="name"
                        >
                        <div
                            v-if="nameError"
                            id="nameError"
                            class="error"
                        >
                            {{ nameError }}
                        </div>
                    </div>
                    <div>
                        <label
                            for="email"
                            :class="{ error: !!emailError }"
                        >Your email:</label>
                        <input
                            id="email"
                            v-model="formData.email"
                            type="email"
                            name="email"
                        >
                        <div
                            v-if="emailError"
                            id="emailError"
                            class="error"
                        >
                            {{ emailError }}
                        </div>
                    </div>
                </div>

                <div class="message-wrapper">
                    <label
                        for="message"
                        :class="{ error: !!messageError }"
                    >Message:</label>
                    <textarea
                        id="message"
                        v-model="formData.message"
                        name="message"
                    />
                    <div
                        v-if="messageError"
                        id="messageError"
                        class="error"
                    >
                        {{ messageError }}
                    </div>
                </div>

                <button
                    id="sendBtn"
                    type="submit"
                >
                    Submit form
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: ""
            },
            nameError: "",
            emailError: "",
            messageError: "",
            submitted: false
        };
    },
    metaInfo: {
        title: "Contact",
    },
    methods: {
        validate() {
            let valid = true;
            if (!this.formData.name) {
                this.nameError = "Name is Required!";
                valid = false;
            } else {
                this.nameError = "";
            }
            if (!this.formData.email) {
                this.emailError = "Email is Required!";
                valid = false;
            } else {
                this.emailError = "";
            }
            if (!this.formData.message) {
                this.messageError = "Message is Required!";
                valid = false;
            } else if (this.formData.message.length < 10) {
                this.messageError = "Message must be at least 10 characters!";
                valid = false;
            } else {
                this.messageError = "";
            }
            return valid;
        },
        handleSubmit() {
            if (this.validate()) {
                // TODO: Real submit for e2e and api mocking
                this.submitted = true;
            }
        },
    },
};
</script>

<style lang="scss">
    #ad {
        position: absolute;
        background-color: rgba(255,100,0,0.25);
        padding: 25px;
        width: 100px;
        height: 250px;
        top: 50px;
        left: 175px;
    }
    .contact {
        position: relative;
        max-width: 300px;
        margin: 0 auto;
        text-align: left;

        &__title {
            margin-top: 0;
            text-align: center;
        }

        label {
            padding: 5px;
            display: block;
            font-size: 0.9em;
            &.error {
                color: #990000;
            }
        }

        div.error {
            font-size: 0.9em;
            color: #990000;
            padding: 3px 0 0 15px;
        }

        div.thanks {
            text-align: center;
        }

        input, textarea {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 0.9em;
            line-height: 1.4em;
            color: #555555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #555;
            border-radius: 4px;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        }

        textarea {
            max-width: 500px;
            height: 100px;
        }

        button {
            display: inline-block;
            margin-bottom: 0;
            margin-top: 1em;
            font-weight: normal;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            white-space: nowrap;
            padding: 6px 12px;
            font-size: 0.9em;
            line-height: 1.4em;
            border-radius: 4px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    }
</style>
