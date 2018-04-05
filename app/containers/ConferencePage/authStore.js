import { action, extendObservable } from 'mobx';

class AuthStore {

  constructor() {
    extendObservable(this, {
      token: localStorage.getItem('conf-token'),
    });
  }
  @action
  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('conf-token', token);
    } else {
      localStorage.removeItem('conf-token');
    }
  }
}

export default new AuthStore();
