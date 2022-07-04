import { createRouter, createWebHistory } from "vue-router";
import home from "../components/HelloWorld.vue";
import callback from "../components/callback.vue";
import { useStore } from "../stores/mainStore";

const routes = [
    { 
        path: '/', 
        component: home 
    },
    { 
        path:'/callback', 
        component: callback,
        props: route => ({ code: route.query.code, state: route.query.state })
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from) => {
    // const token = sessionStorage.getItem('token')
    const store = useStore()
    console.log(to.path);
    if(store.state === '' && to.path !== '/callback'){
       window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=b4559562c5cc461fbc09884d689dbc82&redirect_uri=http://localhost:3000/callback`
    }
    else return true
})

export default router