<template>
  <ul class="table">
    <div class="names">
      <li class="day"
          v-bind:key="i"
          v-for="(insurance, i) in days[0]">
          <div class="title">{{insurance.type}}</div>
          <div>Sell in</div>
          <div>Price</div>
      </li>
    </div>

    <div class="column"
          v-bind:key="j"
         v-for="(day, j) in days">
         <div v-bind:key="k"
              v-for="(insurance, k) in day">
              <div class="spacer">{{j}}</div>
              <div class="cell">{{insurance.sellIn}}</div>
              <div class="cell">{{insurance.price}}</div>
         </div>
    </div>
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
  border: 1px solid var(--border)
  list-style: none
  margin: 40px 0
  padding: 0
  width: 1283px

  .names
    border-right: 1px solid var(--border)
    width: 260px

    .day
      &:first-child
        div
          &:first-child
            border-top: none

      .title
        background: var(--almost-white)

      div
        border-top: 1px solid var(--border)
        height: 43px
        line-height: 43px
        padding: 0 20px

        &:first-child
          font-weight: 600
          padding: 0 8px
          text-transform: uppercase

        &:last-child
          height: 43px

  .names, .column
    display: inline-block
    vertical-align: top

  .column
    border-right: 1px solid var(--border)
    text-align: right
    width: 32px

    div > div
      border-top: 1px solid var(--border)
      height: 43px
      line-height: 43px
      padding: 0 8px

      &:first-child
        border-top: 1px solid var(--border)
        height: 42px

      &:last-child
        border-bottom: 1px solid var(--border)
        height: 43px

    div:last-child
        div:last-child
            border-bottom: none

    &:last-child
      border-right: none

    .spacer
      background: var(--almost-white)
</style>
