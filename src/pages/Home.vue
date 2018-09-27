<template lang="pug">
.text-center
  v-card
    v-card-text Slient is Gold ?
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getDevices () {
      this.$http.get('/api').then(data => {
        console.log(data)
      })
    }
  },
  mounted () {
  }
}
</script>
