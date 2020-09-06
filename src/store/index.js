import Vue from 'vue'
import Vuex from 'vuex'
import columns from './modules/columns'
import dataSource from './modules/dataSource'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    columns,
    dataSource
  }
})
