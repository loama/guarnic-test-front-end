<template>
  <div id="app">
    hola
    {{days}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      days: []
    }
  },
  mounted () {
    const self = this
    axios({
      method: 'get',
      url: 'https://car-insurance-test.herokuapp.com/'
    })
      .then((response) => {
        console.log(response)
        self.days = response.data
      })
  }
}
</script>

<style lang="sass">
#app
</style>
