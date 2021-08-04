function emptyAction() {
  console.warn('Current execute action is empty!');
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions: any) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args: []) {
    return this.actions.onGlobalStateChange(...(args as []));
  }

  /**
   * 映射
   */
  setGlobalState(...args: []) {
    return this.actions.setGlobalState(...(args as []));
  }
}

const actions = new Actions();
export default actions;
