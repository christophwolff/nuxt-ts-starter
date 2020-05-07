<template>
  <div class="container">
    <Station
      v-for="station in audioBroadcastServices.nodes"
      :key="station.id"
      :station="station"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { State } from 'vuex-class'
import Station from '~/components/Station.vue'
import { StationListQuery } from '@/graphql/queries/brradio.graphql'

@Component({
  components: {
    Station
  },
  apollo: {
    audioBroadcastServices: {
      query: StationListQuery
    }
  }
})
export default class IndexPage extends Vue {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
