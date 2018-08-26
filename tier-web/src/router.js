import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import PortfolioTemplate from '@/components/portfolio/PortfolioTemplate'
import VideoPage from '@/components/video/VideoPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioTemplate
    },
    {
      path: '/video/:id',
      name: 'video',
      props: true,
      component: VideoPage,
      beforeEnter(to, from, next) {
        const videoID = Number(to.params.id)
        const allViedos = store.getters.allViedos

        const videoExist = allViedos.filter(video => {
          return video.id === videoID
        })

        if (videoExist.length) {
          next()
        } else {
          next({
            name: 'home'
          })
        }
      }
    },
    {
      name: 'about',
      path: '/about'
    },
    {
      name: 'contact',
      path: '/contact'
    }
  ]
})
