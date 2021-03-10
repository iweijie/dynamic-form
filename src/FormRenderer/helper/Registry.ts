export class Registry {
  components: any;

  constructor() {
    this.components = {};
  }

  registry(component) {
    const { type } = component;

    if (components[type]) {
      console.warn(`${type} 重复注册`);
    }

    components[type] = component;
  }
}

export default new Registry();
