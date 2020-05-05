<template>
  <div id="add">
    <div class="container">
      <h3>Employees1</h3>
      <employees-one></employees-one>
      <h3>Employees2</h3>
      <employees-two v-bind:employee="employees"></employees-two>
      <form name="employeeform">
        <div class="form-group">
          <input class="form-control" v-model="name" id="Name" required placeholder="Name" name="name">
        </div>
        <div class="form-group">
          <input class="form-control" v-model="salary" required id="salary" placeholder="Salary" name="salary">
        </div>
        <div class="form-group">
          <input class="form-control" id="age" v-model="age" required placeholder="Age" name="age">
        </div>
        <button @click="addval()" class="btn btn-success">Add</button>
      </form>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Employees from '../components/Employees.vue';
import Employees2 from '../components/Employees2.vue';

export default {
  name: 'Add',
  components: {
    'employees-one': Employees,
    'employees-two': Employees2
  },
  data () {
      return {
        name: '',
        age: '',
        salary: '',
        employees: [
          { id:1, name: 'John', Occupation: 'Doctor'},
          { id:2, name: 'Anna', Occupation: 'Nurse'},
          { id:3, name: 'Alan', Occupation: 'Teacher'},
          { id:4, name: 'Maria', Occupation: 'ENgineer'}
        ]
      }
  },
  methods: {
    addval () {
      const body = {
        name: this.name,
        salary:this.salary,
        age: this.age
      };
      axios.post('http://dummy.restapiexample.com/api/v1/create', body)
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
    }
  },
}
</script>