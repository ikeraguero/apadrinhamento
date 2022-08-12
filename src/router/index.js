import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authenticationGuard } from '@/auth/authenticationGuard';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/perfil',
        name: 'Perfil',
        beforeEnter: authenticationGuard,
        component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
      },
      {
        path: '/quemsomos',
        name: 'Quem Somos',
        component: () => import(/* webpackChunkName: "quemsomos" */ '../views/QuemSomos.vue')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue')
      },
      {
        path: '/comodoar',
        name: 'comoDoar',
        component: () => import(/* webpackChunkName: "comodoar" */ '../views/comoDoar.vue')
      },
      {
        path: '/ajudarcriancas',
        name: 'AjudarCriancas',
        beforeEnter: authenticationGuard,
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/AjudarCriancas.vue')
      },
      {
        path: '/ajudarescolas',
        name: 'AjudarEscolas',
        beforeEnter: authenticationGuard,
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/AjudarEscolas.vue')
      },
      {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
      },
      
      {
        path: '/adminn',
        name: 'Painel de Controle',
        beforeEnter: authenticationGuard,
        component: () => import(/* webpackChunkName: "faq" */ '../views/ControlPanel.vue')
      },
      {
        path: 'adminn/criancas',
        name: 'Painel de Controle Criança',
        component: () => import(/* webpackChunkName: "faq" */ '../views/ControlPanelChild.vue')
      },
      {
        path: 'adminn/criancas/adicionar',
        name: 'Add',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FormChild.vue')
      },
      {
        path: 'adminn/escolas',
        name: 'Painel de Controle Escola',
        component: () => import(/* webpackChunkName: "faq" */ '../views/ControlPanelSchool.vue')
      },
      {
        path: 'adminn/escolas/adicionar',
        name: 'Add',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FormSchool.vue')
      },
      {
        path: "/doar/",
        name: 'Donate',
        component: () => import(/* webpackChunkName: "faq" */ '../views/DonatePage.vue')
      },
      
      
    ]
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router 
