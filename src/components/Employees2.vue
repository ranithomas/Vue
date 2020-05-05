<template>
  <div class="wrapper" id="employees-two">
    <ul>
      <li v-for="emp in employee" v-bind:key="emp.id">
        {{emp.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Employees2',
  props: ['employee']

}
</script>

<style scoped>
</style>
