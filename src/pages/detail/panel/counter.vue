<template>
	<div class="count">
		<div class="minus" @click='minus'>-</div>
		<div class="show-box" >
			<input type="text" v-model="number" @keyup='textCount' >
		</div>
		<div class="plus" @click='plus'>+</div>
	</div>
</template>
<script>
	export default{
		props:{
			max:{
				type:Number,
				default:100
			},
			min:{
				type:Number,
				default:20
			}
		},
		data(){
			return{
				number:this.min
			}
		},
		methods:{
			textCount(){
				let fix;
				if(typeof this.number==="string"){
					fix=Number(this.number.replace(/\D/g,''));
				}else{
					fix=this.number;
				}
				if(fix>this.max||fix<this.min){
					fix=this.min;
				}
					this.number=fix;
				
			},
			minus(){
				if(this.number<=this.min){
					return;
				}else{
					this.number--;
				}
			},
			plus(){
				if(this.number>=this.max){
					return;
				}else{
					this.number++;
				}
			}
		}
	}
</script>