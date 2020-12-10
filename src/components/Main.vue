<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <div class="row">
        <div class="col-md-2" v-for="employee of employees" v-bind:key="employee.id">
            <div class="card">
                <div class="card-title"><strong>{{employee.employee_name}}</strong></div>
                <div class="card-text">
                    <p>{{employee.employee_salary}}</p>
                    <p>{{employee.employee_age}}</p>
                    <p><button @click="deleteval(employee.id)" class="btn btn-danger btn-sm">Delete</button></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Main',
  data () {
      return {
        employees: [],
        errors: []
      }
  },
  methods: {
    deleteval (id) {
        axios.delete('http://dummy.restapiexample.com/api/v1/delete/'+id+'')
        .then(res => {
            console.log(res);
            alert('Deleted Successfully!');
        })
        .catch(e => {
            this.errors.push(e)
        });
    }
  },

  props: {
    msg: String
  },

  created() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(response => {
      this.employees = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }

}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.col-md-2 {
    margin:2em 0;
}
.wrapper, .card {
    padding: 1em;
}
</style>
