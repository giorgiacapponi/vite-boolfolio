import {createRouter,createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Projects from "./pages/Projects.vue";
import Show from "./pages/Show.vue";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
             path:"/about-us",
            name:"about-us",
            component:About
        },
        {
            path:"/projects",
            name:"projects",
            component:Projects
        },
        {
            path:"/projects/:slug",
            name:"show",
            component:Show
        },
    ]
});
export {router}