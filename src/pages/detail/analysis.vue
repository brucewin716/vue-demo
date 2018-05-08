<template>
	<div>
		<div class='purchase'>
			<h2>流量分析</h2>
			<p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
			<div class="parameter-intro">
				<div class="same-row">
					<div class="parameter-left">
					购买数量：
					</div>
					<div class="parameter-right">
						<counter :max="5" :min="1"></counter>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					产品类型：
					</div>
					<div class="parameter-right">
						<select>
							<option value="">入门版</option>
							<option value="">中级版</option>
							<option value="">高级版</option>
						</select>
					</div>	
				</div>
				<div class="same-row">
					<div class="parameter-left">
					有效时间：
					</div>
					<div class="parameter-right">
						<timer></timer>
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
					总价：
					</div>
					<div class="parameter-right">
						678元
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
			<p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
			<h1>用户行为指标</h1>
			<ul>
				<li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
				<li>用户在网站的停留时间；</li>
				<li>用户来源网站（也叫“引导网站”）；</li>
				<li>用户所使用的搜索引擎及其关键词；</li>
				<li>在不同时段的用户访问量情况等。</li>
			</ul>
			<h1>浏览网站方式</h1>
			<ul>
				<li>用户上网设备类型</li>
				<li>用户浏览器的名称和版本</li>
				<li>访问者电脑分辨率显示模式</li>
				<li>用户所使用的操作系统名称和版本</li>
				<li>用户所在地理区域分布状况等</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
import Timer from './panel/time'
import MultipleChooser from './panel/multipleChooser'
import Counter from './panel/counter'
export default{
	components:{
		Timer,
		MultipleChooser,
		Counter
	},
	data(){
		return {
			versions:[
				{type:'客户版',value:0},
				{type:'代理商版',value:1},
				{type:'专家版',value:2},
			]
		}
	}

}
</script>
