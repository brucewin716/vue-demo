<template>
	<div class='slideShow' @mouseover='clearInv()' @mouseout='runInv()'>
		<div class="slide-img">
			<a :href="slides[nowIndex].href" >
				<img :src="slides[nowIndex].src" alt="">
			</a>
		</div>
		<h2>{{slides[nowIndex].title}}</h2>
		<ul>
			<li @click='goto(nextIndex)' class='prev'>&gt;</li>
			<li class='li-mid' >
				<a href="#" v-for="(item,index) in slides" @click='goto(index)' :class='{on:index===nowIndex}'>{{index+1}}</a>
			</li>
			<li @click='goto(prevIndex)' class='next'>&lt;</li>
		</ul>
	</div>

</template>

<script>
	export default{
		name:'slideShow',	
		data(){
			return {
				nowIndex:0,
				inv:2000,
				slides:[
					{
						src:'../static/slideShow/pic1.jpg',
						title:'React.js入门与实战',
						href:'http://www.baidu.com'
					},
					{
						src:'../static/slideShow/pic2.jpg',
						title:'安卓开发工程师课程',
						href:'http://www.baidu.com'
					},
					{
						src:'../static/slideShow/pic3.jpg',
						title:'算法面试',
						href:'http://www.baidu.com'
					},
					{
						src:'../static/slideShow/pic4.jpg',
						title:'React Native学习',
						href:'http://www.baidu.com'
					}
				]
			}
		},
		computed:{
				prevIndex(){
					if(this.nowIndex==0){
						return this.slides.length-1;
					}else{
						return this.nowIndex-1;
					}
				},
				nextIndex(){
					if(this.nowIndex==this.slides.length-1){
						return 0;
				}else{
					return this.nowIndex+1;
				}
			}
		},
		methods:{
			goto(index){
				this.nowIndex=index;				
			},
			runInv(){
				this.invId=setInterval(()=>{
					this.goto(this.nextIndex);
				},this.inv);
			},
			clearInv(){
			clearInterval(this.invId);
			},	
		},	
		mounted(){
				this.runInv();
		}

}

</script>