<template>
  <div id="app">
    <div class="view-choose">
      <div class="option" v-on:click="view = 'days'">Day</div>
      <div class="option" v-on:click="view = 'full'">Full</div>
    </div>

    <dayTable v-show="view === 'days'"/>
    <fullTable v-show="view === 'full'" />
  </div>
</template>

<script>
import axios from 'axios'

import dayTable from './views/dayTable.vue'
import fullTable from './views/fullTable.vue'

export default {
  components: {
    dayTable: dayTable,
    fullTable: fullTable
  },
  data () {
    return {
      days: [],
      view: 'days'
    }
  },
  mounted () {
    const self = this
    axios({
      method: 'get',
      url: 'https://car-insurance-test.herokuapp.com/'
    })
      .then((response) => {
        self.$store.commit('updateDays', response.data)
      })
  }
}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0

#app
  --almost-white: #F0F0F0
  --border: #424242
  --white: #FFF
</style>
