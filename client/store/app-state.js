import {
  observable, computed, action,
} from 'mobx'

export default class AppState {
  @observable count = 0

  @observable name = 'panda'

  @computed get msg() {
    return `${this.name} say count ${this.count}`
  }

  @action add() {
    this.count += 1
  }

  @action changeName(name) {
    this.name = name
  }
}

// autorun(() => {
//   console.log(appState.count)
// })

// setInterval(() => {
//   appState.add()
// }, 5000);
