import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from "./route";

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

//custom directive
Vue.directive('rainbow', {
    // eslint-disable-next-line no-unused-vars
    bind(el, binding) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
    }
});

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

//custom filters
/*Vue.filter('toUpperCase', function (value) {
    return value.toUpperCase();

});*/

Vue.filter('snippet', function (value) {
    return value.slice(0, 100);
});


Vue.directive('theme', {
    bind(el, binding) {
        if (binding.value == 'wide') {
            el.style.maxWidth = '1200px'
        } else if (binding.value == 'narrow') {
            el.style.maxWidth = '560px'
        }
    }

});

new Vue({
    render: h => h(App),
    router:router,
}).$mount('#app')
