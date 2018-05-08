<template>
	<div>
		<div class='purchase'>
			<h2>数据统计</h2>
			<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
			<div class="parameter-intro">
				<div class="same-row">
					<div class="parameter-left">
					产品类型：
					</div>
					<div class="parameter-right">
						<chooser></chooser>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					适用地区：
					</div>
					<div class="parameter-right">
						<select>
							<option value="">北京</option>
							<option value="">天津</option>
							<option value="">上海</option>
							<option value="">广州</option>
							<option value="">武汉</option>
							<option value="">重庆</option>
						</select>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					有效时间：
					</div>
					<div class="parameter-right">
						半年
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					总价：
					</div>
					<div class="parameter-right">
						500元
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
						&nbsp;
					</div>
					<div class="parameter-right">
						<input type="button" value='立即购买' class='pay-btn'>
					</div>	
				</div>
			</div>
		</div>
		<div class='description'>
			<h2>产品说明</h2>
			<p>历史资料，科学实验，检验，统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备</p>
			<table>
				<tr v-for='item in lists'>
					<td v-for='list in item'>{{list.intro}}</td>
				</tr>		
			</table>
		</div>
	</div>
	
</template>

<script>
	import Chooser from './panel/chooser'
	export default{
		components:{
			Chooser
		},
		data(){
			return {
				lists:[
					[
						{intro:'安全保障'},
						{intro:'办公文教'},
						{intro:'彩票'},
						{intro:'车辆物流'},
						{intro:'成人用品'},
						{intro:'出版传媒'},
						{intro:'电脑硬件'},
					],
					[
						{intro:'电子电工'},
						{intro:'房地产建筑装修'},
						{intro:'分类平台'},
						{intro:'服装鞋帽'},
						{intro:'箱包饰品'},
						{intro:'化工原料饰品'},
						{intro:'机械设备'},
					],
					[
						{intro:'家庭日用品'},
						{intro:'家用电器'},
						{intro:'教育培训'},
						{intro:'节能环保'},
						{intro:'金融服务'},
						{intro:'礼品'},
						{intro:'旅游住宿'},
					],
					[
						{intro:'美容化妆'},
						{intro:'母婴护理'},
						{intro:'农林牧渔'},
						{intro:'软件'},
						{intro:'商务服务'},
						{intro:'生活服务'},
						{intro:'食品保健品'},
					],
					[
						{intro:'手机数码'},
						{intro:'通讯服务设备'},
						{intro:'网络服务'},
						{intro:'医疗服务'},
						{intro:'游戏'},
						{intro:'运动休闲娱乐'},
						{intro:'招商加盟'},
					],
				]
			}
		}

	}


</script>
