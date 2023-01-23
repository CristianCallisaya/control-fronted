import * as actions from "../../action-types";
import * as mutations from "../../mutation-types";
import axios from "../../../axios";

export default {
  async [actions.GET_MODALIDADES]({ commit }) {
    try {
        const res = await axios.get('modalidades');
        commit(mutations.SET_MODALIDADES, res.data)
    } catch (error) {
        console.log(error);
    }
  },
};
