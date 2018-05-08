<template>
	<div>
		<div class='purchase'>
			<h2>广告发布</h2>
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
			<div class="parameter-intro">
				<div class="same-row">
					<div class="parameter-left">
					购买数量：
					</div>
					<div class="parameter-right">
						<counter :max='100' :min='20'></counter>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					行业：
					</div>
					<div class="parameter-right">
						<select>
							<option value="">出版业</option>
							<option value="">媒体</option>
							<option value="">金融</option>
							<option value="">互联网</option>
							<option value="">游戏</option>
						</select>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					产品版本：
					</div>
					<div class="parameter-right">
						<multiple-chooser :selections='versions'></multiple-chooser>
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
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
			<table>
				<tr v-for='item in lists'>
					<td v-for='list in item'>{{list.intro}}</td>
				</tr>		
			</table>
		</div>
	</div>
	
</template>

<script>
import MultipleChooser from './panel/multipleChooser'
import Counter from './panel/counter'
	export default{
		components:{
			 MultipleChooser,
			 Counter
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
				],
				versions:[
					{type:'初级版',value:0},
					{type:'中级版',value:1},
					{type:'高级版',value:2},
					{type:'专家版',value:3},
				]
			}
		}

	}


</script>
