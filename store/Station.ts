import { GetterTree, ActionTree } from 'vuex'
import { Station } from '~/types'

export const state = () => ({
  stations: [] as Station[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  stations: (state) => state.stations
}

export const actions: ActionTree<RootState, RootState> = {
  fetchStations({ commit }) {
    // const things = this.$axios.$get('/things')
    // console.log(things)
    commit('CHANGE_NAME', 'New name')
  }
}
