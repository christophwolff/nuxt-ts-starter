<template>
  <div class="station-container">
    <div class="flex">{{ station.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import gql from 'graphql-tag'
import { Station } from '~/types/index'

@Component({})
export default class MyComponent extends Vue {
  @Prop() station!: Station
}
</script>

<style lang="scss"></style>
