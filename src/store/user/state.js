import { LocalStorage } from 'quasar'

export default {
  name: LocalStorage.get.item('user.name') || null
}
