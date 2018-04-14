<template>
  <q-page class="flex flex-center">
  </q-page>
</template>

<style>
</style>

<script>
import users from '../assets/users'

export default {
  name: 'PageIndex',
  created () {
    this.selectUser()
  },
  methods: {
    selectUser () {
      const userItems = []
      users.forEach(user => {
        userItems.push({ label: user.name, value: user.name })
      })
      this.$q.dialog({
        title: 'Who are you ?',
        message: '',
        ok: true,
        preventClose: true,
        options: {
          type: 'radio',
          model: userItems[0].value,
          items: userItems
        }
      }).then((data) => {
        this.$q.notify(`'Hey ${data}!'`)
        this.$router.push(data.toLowerCase())
      }).catch(() => {
        this.$q.notify('Something went wrong with this app')
      })
    }
  }
}
</script>
