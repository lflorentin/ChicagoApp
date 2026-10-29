import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from "../views/About";
import Login from "../views/Login/Login";
import WaterQuality from "../views/Water-Quality";
import WeatherStations from "../views/Weather-Stations";
import GoogleMap from "../components/GoogleMap";



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path: '/water-quality',
      name: 'water-quality',
      component: WaterQuality
    },
    {
      path: '/weather-stations',
      name:'weather-stations',
      component: WeatherStations
    },
    {
      path: '/localisationSensors',
      name: 'localisationSensors',
      component: GoogleMap
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
