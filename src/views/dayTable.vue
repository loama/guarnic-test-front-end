<template>
  <ul class="table">
    <li class="day"
        v-bind:key="i"
        v-for="(day, i) in days">

      <div class="row title">
        Day {{i}}
      </div>

      <div class="row"
           v-for="(insurance, j) in day"
           v-bind:key="'insurance-' + j.toString()">
        <div class="name">{{insurance.type}}</div>
        <div class="sellIn">{{insurance.sellIn}}</div>
        <div class="price">{{insurance.price}}</div>
      </div>

    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    days () {
      return this.$store.state.days
    }
  }
}
</script>

<style lang="sass" scoped>
.table
  margin: 0 auto
  width: 304px

  li
    list-style: none
    margin-top: 44px

    .row
      &.title
        background: var(--border)
        color: var(--white)
        line-height: 44px
        text-align: center
        width: 100%

      div
        border-top: 1px solid var(--border)
        border-right: 1px solid var(--border)
        display: inline-block
        height: 44px
        line-height: 44px
        padding: 0 8px

      .name
        border-left: 1px solid var(--border)
        width: 168px

      .sellIn
        text-align: right
        width: 42px

      .price
        text-align: right
        width: 42px

      &:last-child
        border-bottom: 1px solid var(--border)
</style>
