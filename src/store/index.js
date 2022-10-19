import { createStore } from 'vuex'

export default createStore({
  state: {
    totalAmount: 0,
    modalTitle: "",
    details: "",
    showModal: false,
    basket: []
  },
 
  getters: {
  },
  mutations: {
    totalAmount(state){
      const prices = state.basket.map(item => item.price * item.quantity)

     const total = prices.reduce((amount,price) => amount+parseInt(price), 0)

     state.totalAmount = total

  },
  cancelModal(state) {
    !state.showModal;
  }
  },
  actions: {
  },
  modules: {
  }
})
