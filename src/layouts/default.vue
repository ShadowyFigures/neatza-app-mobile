<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-toolbar-title>
          Neatza App
          <div slot="subtitle">Becase 7shad0ws, that's why</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs color="secondary">
        <q-route-tab slot="title" v-for="(user, index) in users" :key=index
         :to="`/${user.name.toLowerCase()}`" replace :label="`${user.name}`"
        />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import users from '../assets/users'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      users
    }
  }
}
</script>

<style>
</style>
