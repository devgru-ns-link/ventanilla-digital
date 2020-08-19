
<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <br />
      <h1 class="title is-1">Bulma Fluent</h1>
      <h2 class="subtitle is-4">
        Fluent Design Theme based on
        <a href="http://bulma.io" target="_blank">Bulma CSS Framework</a>
        <span class="is-size-6">
          <br />inspired by
          <a
            href="https://fluent.microsoft.com"
            target="_blank"
          >Microsoft’s Fluent Design System</a>
        </span>
      </h2>
      <br />
      <b-field>
        <button class="button is-primary is-medium" @click="open">Launch loading</button>
      </b-field>
      <p></p>
    </div>
  </div>
</template>

<script>
import { accountVerify } from "@/api/users";
export default {
  data() {
    return {
      isFullPage: true,
    };
  },
  methods: {
    open() {
      setTimeout(() => loadingComponent.close(), 3 * 1000);
    },
  },
  async created() {
    const loadingComponent = this.$buefy.loading.open({
      container: this.isFullPage ? null : this.$refs.element.$el,
    });
    const data = this.$route.query;
    const res = await accountVerify(data);
    loadingComponent.close();
    console.log(res);
  },
};
</script>
