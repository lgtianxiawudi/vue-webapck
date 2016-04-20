// src/index.js
import Vue from 'Vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import Repos from './components/Repos.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
    '/home': {
        component: Home
    },
    'users': {
        component: Users
    },
    'repos': {
        component: Repos
    }
})

router.redirect({
    '*': '/home'
})

router.start(App, '#app')
