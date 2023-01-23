import * as mutations from '../../mutation-types'

export default {
    [mutations.SET_CARRERAS](state, payload){
            
        state.carreras = payload
    }
}