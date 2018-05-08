<template>
	<div id='index-wrap'>
		<div id="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<div v-for='product in productList'>
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for='item in product.list'>
							<a :href="item.url">{{item.title}}</a><span v-if='item.hot' class='hot'>HOT</span>
						</li>
					</ul>
					<div class="hr" v-if='product.bool'><hr></div>	
				</div>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for='item in newList'>
						<a :href="item.url">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="index-right">
			<div id="slider">
				<slide-show ></slide-show>
			</div>
			<div class="index-board-list">
				<div class='index-board-item' v-for='item in boardList'>
					<div class="board-item-left"><img :src='item.url' alt=""/></div>
					<div class="board-item-right">
						<h1>{{item.title}}</h1>
						<p>{{item.detail}}</p>
						<button><a :href="item.href">{{item.btn}}</a></button>
					</div>
				</div>   
			</div>
		</div>
		
	</div>
</template>

<script>
	import slideShow from '../components/slideShow.vue';
	export default{
		components:{
			slideShow
		},
		name:'index',
		data(){
			return {
				productList:{
					pc:{
						title:'pc产品',
						bool:true,
						list:[
							{
								
								title:'数据统计',
								url:'/detail/statics',
							},
							{
							
								title:'数据预测',
								url:'detail/forecast',
							},
							{
								
								title:'流量分析',
								url:'detail/analysis',
								hot:true,
							},
							{
								
								title:'广告发布',
								url:'detail/publish',
							},
						]

					},
					app:{
						title:'手机应用类',
						bool:false,
						list:[
							{
								title:'91助手',
								url:'http://www.hao123.com',
							},
							{
								title:'产品助手',
								url:'http://www.hao123.com',
								hot:true,
							},
							{
								title:'智能地图',
								url:'http://www.hao123.com',
							},
							{
								title:'团队语音',
								url:'http://www.hao123.com',
							},
						]

					}
				},
				newList:[
					{title:'中央一套',url:'http://ifeng.com'},
					{title:'中央二套',url:'http://ifeng.com'},
					{title:'中央三套',url:'http://ifeng.com'},
					{title:'中央四套',url:'http://ifeng.com'},
				],
				boardList:[
					{
						url:'/static/images/1.png',
						title:'开放产品',
						detail:'开放产品是一款开放产品',
						btn:'立即购买',
						href:'detail/statics'
					},
					{
						url:'/static/images/2.png',
						title:'品牌营销',
						detail:'品牌营销帮助你的产品更好地找到定位',
						btn:'立即购买',
						href:'detail/forecast'
					},
					{
						url:'./static/images/3.png',
						title:'使命必达',
						detail:'使命必达快速迭代永远保持最前端的速度',
						btn:'立即购买',
						href:'detail/analysis'
					},
					{
						url:'/static/images/4.png',
						title:'永攀高峰',
						detail:'帮你勇闯高峰,到达事业的巅峰',
						btn:'立即购买',
						href:'detail/publish'
					},
				],

			}
		}
	}

</script>