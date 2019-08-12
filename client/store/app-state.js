import {
  observable, computed, autorun, action,
} from 'mobx'

export class AppState {
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
const appState = new AppState()

autorun(() => {
  console.log(appState.count)
})

setInterval(() => {
  appState.add()
}, 5000);


export default appState;
