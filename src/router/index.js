import { createRouter, createWebHashHistory } from "vue-router";
import home from "../components/HelloWorld.vue";
import callback from "../components/callback.vue";

const routes = [
    { path: '/', component: home },
    { path:'/callback', comment:callback}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from) => {
    const token = sessionStorage.getItem('token')
    if(!token){
       window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=b4559562c5cc461fbc09884d689dbc82&redirect_uri=http://localhost:3000/#/callback`
    }
    else return true
})

export default router