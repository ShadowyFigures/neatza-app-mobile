<template>
  <q-page class="row justify-center">
    <q-list no-border>
      <q-item>
        <h5>{{ currentDate }}</h5>
      </q-item>

      <q-item>
        <p class="caption">{{ qotd }}</p>
      </q-item>

      <q-item>
        <img :src="imgSrc" alt="no-image" />
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
h5 {
  margin: 0;
}
</style>

<script>
export default {
  name: 'PageUser',
  computed: {
    userFromUrl () {
      let pathname = window.location.pathname
      while (pathname[0] === '/') {
        pathname = pathname.slice(1)
      }
      return pathname
    },
    currentDate () {
      return (new Date()).toDateString()
    },
    qotd () {
      return 'Dummy Quote'
    },
    imgSrc () {
      return 'https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png'
    }
  }
}
</script>
