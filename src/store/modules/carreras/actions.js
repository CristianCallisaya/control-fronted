import * as actions from "../../action-types";
import * as mutations from "../../mutation-types";
import axios from "../../../axios";

export default {
  async [actions.GET_CARRERAS]({ commit }) {
    try {
        const res = await axios.get('carreras');
        commit(mutations.SET_CARRERAS, res.data)
    } catch (error) {
        console.log(error);
    }
  },
};
