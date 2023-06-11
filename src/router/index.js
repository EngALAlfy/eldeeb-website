import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "@/views/NotFound";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Works from "@/views/Works";
import Project from "@/views/Project";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/works/:id',
    name: 'Works',
    component: Works
  },{
    path: '/project/:work/:id',
    name: 'project',
    component: Project
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
