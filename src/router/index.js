// importing 2 vue-router's functions
import { createRouter, createWebHistory } from 'vue-router';

// importing pages
import HomePage from '../pages/HomePage.vue';

// router creation and definition of routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
    ]
});

export { router };