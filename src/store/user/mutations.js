import { LocalStorage } from 'quasar'

export const pushUser = (state, username) => {
  LocalStorage.set('user.name', username)
}
