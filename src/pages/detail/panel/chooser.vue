<template>
	<div class='chooser'>
		<ul>
			<li v-for='(item,index) in colorArr' @click='choseSection(index)' :class='{on:index==nowIndex}'>{{item.color}}</li>
		</ul>
	</div>

</template>
<script>
	export default{
		data(){
			return {
				colorArr:[
					{color:'红色版'},
					{color:'绿色版'},
					{color:'紫色版'},
				],
				nowIndex:0,
			}
		},
		methods:{
			choseSection(index){
				this.nowIndex=index;
			}	
		}

	}

</script>