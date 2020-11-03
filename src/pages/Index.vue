<template>
  <q-page class="flex flex-center">
  </q-page>
</template>

<script>
import users from '../assets/users'

export default {
  name: 'PageIndex',
  created () {
    const user = this.$q.localStorage.getItem('user')
    if (user) {
      this.$router.push('/' + user.toLowerCase())
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
      }).onOk(data => {
        const crypto = require('crypto')
        const hash = crypto.createHmac('sha256', '').update(data).digest('hex')
        if (hash !== '9636d13bb7aa8bf1c49956714b21cd2eb59468aea670a920c1828afd815e83ab') {
          this.authenticate()
          return
        }
        this.selectUser()
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
      }).onOk((data) => {
        this.$q.localStorage.set('user', data)
        this.$q.notify(`Hey ${data}!`)
        this.$router.push('/' + data.toLowerCase())
      })
    }
  }
}
</script>
