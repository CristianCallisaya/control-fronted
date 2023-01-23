import * as mutations from '../../mutation-types'

export default {
    [mutations.SET_MODALIDADES](state, payload){
            
        state.modalidades = payload
    }
}