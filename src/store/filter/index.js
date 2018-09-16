import { FilterActions } from './actions';

export default {
  state: {
    activeFilter: 'none'
  },
  mutations: {
    [FilterActions.FILTER_TODOS](state, { filter }) {
      state.activeFilter = filter;
    }
  }
}
