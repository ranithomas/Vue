<template>
  <div class="wrapper" id="employees-one">
    <ul>
      <li v-for="emp in employee" v-bind:key="emp.id">
        {{emp.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Employees',
  computed: {
    employee() {
      return this.$store.state.employees
    }
  }
}
</script>

<style scoped>
</style>
