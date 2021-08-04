import { initGlobalState, MicroAppStateActions } from 'qiankun';

const initialState = {};

const actions: MicroAppStateActions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  console.log('主应用: 变更前');
  console.log(prev);
  console.log('主应用: 变更后');
  console.log(state);
});

export default actions;
