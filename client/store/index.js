import AppState from './app-state'

export default {
  AppState,
}

export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
