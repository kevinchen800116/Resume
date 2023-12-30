import Vue from 'vue'
import Router from 'vue-router'
import WorkExperience from '@/components/WorkExp'
import Introduce from '@/components/Introduce'
import InfoCard from '@/components/InfoCard'
import Video from '@/components/Video'
// import MainPage from '@/components/MainPage'
// import Navbar from '@/components/Navbar'
import Hello from '@/components/Hello'
import NotFoundView from '@/views/404page'
import WorkExperience2 from '@/views/WorkExp2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkExperience2',
      components: { default: WorkExperience2, hello: Hello },
      // component: WorkExperience2
    },
    {
      path: '/WorkExp',
      name: 'WorkExperience',
      component: WorkExperience
    },
    {
      path: '/Introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/InfoCard',
      name: 'InfoCard',
      component: InfoCard
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      // not found handler
      path: '*',
      // redirect: NotFoundView
      component: NotFoundView
    }
  ]
})
