<template>
	<div class="dialog-wrap" >
		<div class="dialog-cover"v-if='isShow' ></div>
		<transition name='slideDown'>
			<div class="dialog-content" v-if='isShow'>
				<div class="dialog-close" @click='closeDialog'>X</div>
				<slot></slot>
			</div>		
		</transition>		
	</div>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false,
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			closeDialog(){
				this.$emit('on-close');
			}
		}
	}

</script>
<style>
	.slideDown-enter-active{
		transition: all .5s ease;
	}
	.slideDown-leave-active{
		transition: all .3s ease;
	}
	.slideDown-enter{
		transform: translateY(-500px);
	}
	.slideDown-leave-active{
		transform: translateY(-500px);
	}

</style>