<template>
  <div id="app">
    <div class="navbar">
      <img class="logo"
           src="./assets/logo.png">

      <div class="view-choose">
        <div class="indicator" v-bind:class="[view]"></div>
        <div class="option" v-on:click="view = 'days'">Day</div>
        <div class="option" v-on:click="view = 'full'">Full</div>
      </div>
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif
  margin: 0
  padding: 0

#app
  --almost-white: #F0F0F0
  --black: #000
  --border: #424242
  --white: #FFF
  padding-top: 40px

  .navbar
    background: rgba(255, 255, 255, 0.9)
    left: 0
    position: fixed
    top: 0
    width: 100vw

  .logo
    height: 48px
    left: 12px
    position: absolute
    top: 12px

  .view-choose
    background: rgba(0, 0, 0, 0.8)
    border-radius: 4px
    height: 28px
    margin: 20px auto
    position: relative
    width: 160px

    .indicator
      background: var(--white)
      border-radius: 4px
      box-shadow: 0 1px 3px var(--border)
      height: 28px
      left: 0
      position: absolute
      top: 0
      transition: all 0.3s
      width: 80px
      z-index: 0

      &.full
        transform: translate3d(80px, 0, 0)

    .option
      cursor: pointer
      display: inline-block
      height: 44px
      line-height: 44px
      margin-top: -8px
      position: relative
      text-align: center
      width: 80px
      z-index: 1
</style>
