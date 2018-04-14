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
    if (this.$store.state.user.name) {
      this.$router.push('/' + this.$store.state.user.name.toLowerCase())
    } else {
      this.selectUser()
    }
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
        this.$store.dispatch('user/save', data).then(() => {
          this.$q.notify(`'Hey ${data}!'`)
          this.$router.push(data.toLowerCase())
        }).catch(error => {
          this.$q.notify(error.toString())
        })
      }).catch(() => {
        this.$q.notify('Something went wrong with this app')
      })
    }
  }
}
</script>
