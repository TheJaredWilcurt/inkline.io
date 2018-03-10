<template>
  <h3>Radio</h3>
  <radio v-model="selectedValue" label="Apple">Apple</radio>
  <radio v-model="selectedValue" label="Orange">Orange</radio>
  <radio v-model="selectedValue" label="Banana">Banana</radio>
  <radio v-model="selectedValue" label="Strawberry">Strawberry</radio>
  <br/><span>Selected value: {{ selectedValue }}</span>

  ~~~html
  <radio v-model="selectedValue" label="Apple">Apple</radio>
  <radio v-model="selectedValue" label="Orange">Orange</radio>
  <radio v-model="selectedValue" label="Banana">Banana</radio>
  <radio v-model="selectedValue" label="Strawberry">Strawberry</radio>
  <br/><span>Selected value: {{ selectedValue }}</span>
  ~~~

  <h4>Disabled</h4>
  <radio v-model="selectedValueDisabled" label="Apple" disabled>Apple</radio>
  <radio v-model="selectedValueDisabled" label="Orange" disabled>Orange</radio>
  <radio v-model="selectedValueDisabled" label="Banana" disabled>Banana</radio>
  <radio v-model="selectedValueDisabled" label="Strawberry" disabled>Strawberry</radio>

  ~~~html
  <radio v-model="selectedValueDisabled" label="Apple" disabled>Apple</radio>
  <radio v-model="selectedValueDisabled" label="Orange" disabled>Orange</radio>
  <radio v-model="selectedValueDisabled" label="Banana" disabled>Banana</radio>
  <radio v-model="selectedValueDisabled" label="Strawberry" disabled>Strawberry</radio>
  ~~~
</template>
