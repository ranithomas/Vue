import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        employees: [
            { id:1, name: 'John', Occupation: 'Doctor'},
            { id:2, name: 'Anna', Occupation: 'Nurse'},
            { id:3, name: 'Alan', Occupation: 'Teacher'},
            { id:4, name: 'Maria', Occupation: 'ENgineer'}
        ]
    }
})