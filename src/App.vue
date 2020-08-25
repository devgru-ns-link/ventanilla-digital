<template>
  <router-view />
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #800000;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style>
.body-columns {
  margin-top: 10vh;
}
.card {
  margin-top: 5rem;
}
.card .header {
  padding: 5px 10px;
}
.card-footer .columns {
  width: 100%;
}
.card-footer .columns input {
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.card-footer .columns .column:last-child {
  display: flex;
  align-items: center;
}
.card-footer .columns .column:last-child button {
  border: none;
}
.footer {
  margin-top: 10vh;
  padding: 2rem 1.5rem;
}
</style>
