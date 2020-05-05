import { MutationTree } from 'vuex'
import { RootState, Station } from '~/types'
import { Actions } from '~/types/vuex'

export const state = (): RootState => ({
  stations: []
})

export const mutations: MutationTree<RootState> = {
  setStations(state: RootState, station: Station[]): void {
    state.stations = station
  }
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context){

  }
}
