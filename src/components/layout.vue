<template>
	<div id='Layout'>
		<div id="app-header">
			<div id="app-header-inner">
				<div id="logo">
					<router-link :to="{path:'/'}">
						<img src="../assets/logo.png" height="200" width="200" alt="">
					</router-link>					
				</div>
				<div id="nav">
					<ul>
						<li v-if="username!==''">{{username}}</li>
						<li @click='showLogDialog' v-if="username===''">登录</li>
						<li class='devider'>|</li>
						<li v-if="username!==''" @click='exitLog'>退出</li>
						<li @click='showRegDialog' v-if="username===''">注册</li>
						<li class='devider'>|</li>
						<li @click='aboutDialog'>关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="app-content">
			<div id="app-content-inner">				
				<router-view ></router-view>					
			</div>
		</div>
		<div id="app-footer">
			<h1>@广州桃琳软件科技有限公司</h1>
		</div>
		<my-dialog  :isShow='isShowLogDialog' @on-close="closeDialog('isShowLogDialog')">
			<log-form @recept="receptData"></log-form>
		</my-dialog>	
		<my-dialog  :isShow='isShowRegDialog' @on-close="closeDialog('isShowRegDialog')">
			<reg-form ></reg-form>
		</my-dialog>
		<my-dialog :isShow='isShowDialog' @on-close="closeDialog('isShowDialog')">
			<p>
				本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
			</p>
		</my-dialog>
	</div>
</template>

<script>
import Dialog from './dialog'
import LogForm from './logForm'
import RegForm from './regForm'
	export default{
		components:{
			MyDialog:Dialog,
			LogForm,
			RegForm
		},
		data(){
			return { 
				isShowDialog:false,
				isShowLogDialog:false,
				isShowRegDialog:false,
				username:''
			}
		},
		methods:{
			showLogDialog(){
				this.isShowLogDialog=true;
			},
			showRegDialog(){
				this.isShowRegDialog=true;
			},
			aboutDialog(){
				this.isShowDialog=true;
			},
			closeDialog(attr){
				this[attr]=false;
			},
			// RegdialogClose(){
			// 	this.isShowRegDialog=false;
			// },
			// dialogClose(){
			// 	this.isShowDialog=false;
			// },
			receptData(data){
				this.username=data.username;
				this.closeDialog('isShowLogDialog');				
			},
			exitLog(){
				this.username='';
			}

		},
		

	}

</script>