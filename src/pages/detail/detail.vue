<template>
	<div id='detail-wrap'>
		<div  class='detail-left'>
			<img :src="productIcon" alt="">
			<ul>
				<li v-for='(item,index) in dataList'>
					<router-link :to="{path:item.path}" active-class='active'>{{item.name}}</router-link>		
				</li>
			</ul>
			
		</div>
		<div  class='detail-right'>
			<keep-alive>
				<router-view ></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default{

		data(){
			return {
				dataList:[
					{
						name:'数据统计',
						path:'statics',
						active:false
						
					},
					{
						name:'数据预测',
						path:'forecast',
						active:false

					},
					{
						name:'流量分析',
						path:'analysis',
						active:false
						
					},
					{
						name:'广告发布',
						path:'publish',
						active:false
						
					}
				],
				imgMap:{
					'/detail/statics':"../../static/images/1.png",
					'/detail/forecast':"../../static/images/2.png",
					'/detail/analysis':"../../static/images/3.png",
					'/detail/publish':"../../static/images/4.png"
				}
			}
		},
		computed:{
			productIcon(){
				return this.imgMap[this.$route.path]
			}
		},
	}
</script>
