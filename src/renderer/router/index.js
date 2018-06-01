import Vue from 'vue'
import Router from 'vue-router'
// import GatecountForm from 'gatecount-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gatecountForm'
      // component: GatecountForm
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
