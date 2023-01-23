import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//modules
import carreras from '../store/modules/carreras'
import modalidades from './modules/modalidades';
export default new Vuex.Store({
  modules: {
    carreras,
    modalidades
  }  
})