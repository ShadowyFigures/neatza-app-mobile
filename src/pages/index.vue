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
      this.authenticate()
    }
  },
  methods: {
    authenticate () {
      this.$q.dialog({
        title: 'Input password',
        message: 'Please type the password.',
        prompt: {
          model: '',
          type: 'text'
        },
        preventClose: true,
        color: 'secondary'
      }).then(data => {
        const crypto = require('crypto')
        const hash = crypto.createHmac('sha256', '').update(data).digest('hex')
        if (hash !== '93d3c42f8b993e056a71c5ed629cc84164682e2463b10f4f73b8da99dfdf7bff') {
          this.authenticate()
          return
        }
        this.selectUser()
      }).catch(() => {
        this.$q.notify('An error occured, retrying...')
        this.authenticate()
      })
    },
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
