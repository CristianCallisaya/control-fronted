import Vue from "vue";
import Router from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import SideBar from '../components/SideBar.vue';
import Login from '../views/Autentificacion/Login.vue';
import Recuperar from '../views/Autentificacion/Recuperar.vue';
import DefensaIndex from '../views/Defensas/DefensaIndex.vue';
//import DocenteIndex from '../views/administracion/DocenteIndex.vue';
//import DocenteInactivo from '../views/administracion/DocenteInactivo.vue';
import Configuracion from '../views/Configuracion/Configuracion.vue';
Vue.use(Router);
const routes = [
    {
        path: "/",
        name: "login",
        component: Login,

    },
    {
        path: "/recuperar",
        name: "recuperar",
        component: Recuperar,
    },
    {
        path: "/sideBar",
        name: "sideBar",
        component: SideBar,
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
                children: [
                    {
                        path: "DefensaIndex",
                        name: "DefensaIndex",
                        component: DefensaIndex,
                    }
                ]
            },
            {
                path: "configuracion",
                name: "Configuracion",
                component: Configuracion,
            },
/*
  {
                path: "DocenteIndex",
                name: "DocenteIndex",
                component: DocenteIndex,
            },
            {
                path: "DocenteInactivo",
                name: "DocenteInactivo",
                component: DocenteInactivo,
            },
            */
        

        ],
        
    },

    
  
  
];

const router = new Router({
    mode: "history",
    routes,
});
/*
router.beforeEach((to, from, next) => {
    if (to.path === "/" || to.path === "recuperar") {
      return next();
    }
    if (!localStorage.getItem("token")) {
      next("/");
    } else {
      next();
    }
  });
*/
export default router;
