import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseURL: "https://me-api.frbr18-jsramverk.me",
        user: {}
    },

    getters: {
    },

    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
            console.log(state.user);
        },
        cleanUser: state => {
            state.user = {}
        }
    },

    actions: {
        setUser: (context, payload) => {
            context.commit('setUser', payload);
        },
        cleanUser: context => {
            context.commit('cleanUser');
        }
    }
});