<template>
  <h1>Radio</h1>
  <p>Radio allow the user to select one option from a set.</p>
  <p>They should not have too many options, use a dropdown if you think the user doesn't need to see all
  the available options side-by-side.</p>
  <p>We recommend using the <code>Radio</code> along with <code>RadioGroup</code>, although it is supported to use them without it.</p>

  <h3>Basic usage</h3>
  <radio v-model="selectedValue" label="Apple">Apple</radio>
  <radio v-model="selectedValue" label="Orange">Orange</radio>
  <radio v-model="selectedValue" label="Banana">Banana</radio>
  <radio v-model="selectedValue" label="Strawberry" disabled>Strawberry</radio>

  ~~~html
  <radio v-model="selectedValue" label="Apple">Apple</radio>
  <radio v-model="selectedValue" label="Orange">Orange</radio>
  <radio v-model="selectedValue" label="Banana">Banana</radio>
  <radio v-model="selectedValue" label="Strawberry" disabled>Strawberry</radio>

  <script>
    export default {
      data () {
        return {
          selectedValue: 'Apple'
        };
      }
    }
  </script>
  ~~~

  <h3> Radio group </h3>
  <radio-group v-model="selectedValueGroup">
    <radio label="Football">Football</radio>
    <radio label="Voleyball">Voleyball</radio>
    <radio label="Basketball">Basketball</radio>
  </radio-group>

  ~~~html
  <radio-group v-model="selectedValueGroup">
    <radio label="Football">Football</radio>
    <radio label="Voleyball">Voleyball</radio>
    <radio label="Basketball">Basketball</radio>
  </radio-group>

  <script>
    export default {
      data () {
        return {
          selectedValueGroup: 'Football'
        };
      }
    }
  </script>
  ~~~

  <h3> Radio buttons </h3>
  <radio-group v-model="selectedValueButtonGroup">
    <radio-button label="Terra">Terra</radio-button>
    <radio-button label="Mars">Mars</radio-button>
    <radio-button label="Jupiter">Jupiter</radio-button>
  </radio-group>

  ~~~html
  <radio-group v-model="selectedValueButtonGroup">
    <radio-button label="Terra">Terra</radio-button>
    <radio-button label="Mars">Mars</radio-button>
    <radio-button label="Jupiter">Jupiter</radio-button>
  </radio-group>

  <script>
    export default {
      data () {
        return {
          selectedValueButtonGroup: 'Terra'
        };
      }
    }
  </script>
  ~~~

</template>
