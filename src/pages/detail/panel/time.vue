<template>
	<div class="time">
		<ul>
			<li v-for='(item,index) in colors' @click='colorChange(index)' :class='{on:index==nowIndex}'>{{item.color}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				colors:
				[
					{color:'红色版',value:0},
					{color:'绿色版',value:1},
					{color:'紫色版',value:2},
				],
				nowIndex:0
			}
		},
		methods:{
			colorChange(index){
				this.nowIndex=index;
			}
		}
	}

</script>