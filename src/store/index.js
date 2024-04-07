import {createStore} from 'vuex'
import rootMutation from './mutations.js'
import rootGetters from './getters.js'
import rootActions from './actions.js'
const store = createStore ({
    state(){
        return {
            numberOfPlayers: 11,
            tasks: [],
            subtasks: []
        
        }     
    },
    actions: rootActions,
    mutations: rootMutation,
    getters: rootGetters,
})

export default store;