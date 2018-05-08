// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail/detail'
import StaticsPage from './pages/detail/statics'
import ForecastPage from './pages/detail/forecast'
import AnalysisPage from './pages/detail/analysis'
import PublishPage from './pages/detail/publish'
import $ from 'jquery'
import VueResource from 'vue-resource'
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
var router=new VueRouter({
	mode:'history',
	routes:[
		{path:'/',component:IndexPage,},
		{
			path:'/detail',
			component:DetailPage,
			redirect:"/detail/statics",
			children:[
				{path:'statics',component:StaticsPage},
				{path:'forecast',component:ForecastPage},
				{path:'analysis',component:AnalysisPage},
				{path:'publish',component:PublishPage}
			]
		}
	],
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout},
});
 