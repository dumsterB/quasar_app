import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
state:{
  links: [
    {
      title: "Главная",
      url: "1",
    },
    {
      title: "Фича",
      url: "2",
    },
    {
      title: "Учителя",
      url: "4",
    },
    {
      title: "Курсы",
      url: "4",
    },
    {
      title: "О нас",
      url: "5",
    },
    {
      title: "Контакты",
      url: "5",
    },
    {
      title: "Филиалы",
      url: "6",
    },
  ],
},
actions:{

},
mutations:{

},
getters:{
 links(state){
   return state.links
 }
}
  })

  return Store
}
