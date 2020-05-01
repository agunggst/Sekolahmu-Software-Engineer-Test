import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      ujianmu: [],
      kelasmu: [],
      kariermu: [],
      lainnya: []
    }
  },
  mutations: {
    setProduct: (state, payload) => {
      payload.forEach(item => {
        if(item.category_name == 'UJIANMU'){
          state.products.ujianmu.push(item)
        }else if(item.category_name == 'KELASMU'){
          state.products.kelasmu.push(item)
        }else if(item.category_name == 'KARIERMU'){
          state.products.kariermu.push(item)
        }else{
          state.products.lainnya.push(item)
        }
      })
    }
  },
  actions: {
    getAllProduct: async (context) => {
      try {
        let response = await fetch('http://localhost:3000/data')
        let data = await response.json()

        context.commit('setProduct', data)
      } catch (err) {
        console.log(err);
      }
    }
  }
})
