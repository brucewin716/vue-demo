<template>
	<div class="chooser">
		<ul class='chooser-list'>
			<li v-for=' (item,index) in selections' @click='toggleSection()'>{{item.type}}</li>
		</ul>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default{
		props:{
			selections:{
				type:Array,
				default:[
					{type:'test',value:0}
				]
			}
		},
		data(){
			return{
				statue:0,
				nowIndex:0
			}
		},
		methods:{
			toggleSection(){
				var Lis=$('.chooser-list li')[this];
				console.log(nowLi);
				// .addClass('on');
			},
		}


	}
</script>