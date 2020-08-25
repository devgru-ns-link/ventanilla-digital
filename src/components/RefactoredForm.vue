<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <!-- the "handleSubmit" function on the slot-scope executes the callback if validation was successfull -->
    <section class="section">
      <BInputWithValidation rules="required|email" type="email" label="Email" v-model="email"/>

      <BInputWithValidation
        rules="required"
        type="password"
        label="Password"
        vid="password"
        v-model="password"
      />

      <BInputWithValidation
        rules="required|confirmed:password"
        name="Password"
        type="password"
        label="Confirm Password"
        v-model="confirmation"
      />

      <BSelectWithValidation rules="required" label="Subject" v-model="subject">
        <option value>None</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </BSelectWithValidation>

      <BCheckboxesWithValidation rules="required|length:2" label="Drinks">
        <b-checkbox v-model="choices" native-value="Coffee">Coffee</b-checkbox>
        <b-checkbox v-model="choices" native-value="Tea">Tea</b-checkbox>
        <b-checkbox v-model="choices" native-value="Soda">Soda</b-checkbox>
      </BCheckboxesWithValidation>

      <div class="buttons">
        <button class="button is-success" @click="handleSubmit(submit)">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Submit</span>
        </button>
        
        <button class="button" @click="resetForm">
          <span class="icon is-small">
            <i class="fas fa-redo"></i>
          </span>
          <span>Reset</span>
        </button>
      </div>
    </section>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import BSelectWithValidation from "./inputs/BSelectWithValidation";
import BInputWithValidation from "./inputs/BInputWithValidation";
import BCheckboxesWithValidation from "./inputs/BCheckboxesWithValidation";

export default {
  name: "BuefyForm",
  components: {
    ValidationObserver,
    BSelectWithValidation,
    BInputWithValidation,
    BCheckboxesWithValidation
  },
  data: () => ({
    email: "",
    password: "",
    confirmation: "",
    subject: "",
    choices: []
  }),
  methods: {
    submit() {
      console.log("Form submitted yay!");
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>
