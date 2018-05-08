<template>
	<div class="log-wrap">
		<table id='login'>
			<form action="" moethod='get'>
				<tr>
					<td><label for='user'>用户名:</label></td>
					<td><input type="text" name='user' id='user' placeholder="请输入用户名" v-model='username'></td>
					<td class='error'>{{userErrors.errorText}}</td>
				</tr>
				<tr>
					<td><label for='pwd'>密码:</label></td>
					<td><input type="password" name='pwd' id='pwd' placeholder="请输入密码" v-model='userpassword'></td>
					<td class='error'>{{passwordErrors.errorText}}</td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name='login'  class='login' value='登录' @click='logvalid'></td>
					<td>{{errorText}}</td>
				</tr>
			</form>			
		</table>		
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
				username:'',
				userpassword:'',
				errorText:''
			}
		},
		methods:{
			closeLogDialog(){
				this.$emit('on-close');
			},
			logvalid(){
				var ev=window.event||arguments[0];
				ev.preventDefault();  
				var data={
					userName:this.username,
					userpassword:this.userpassword
				};
				if(!this.userErrors.status||!this.passwordErrors.status){
					this.errorText='部分验证不通过';
				}else{
					this.errorText='';
					this.$http.get('/user.json').then((res)=>{
						this.$emit('recept',res.data);
						this.isShow=false;
					},(error)=>{
						console.log(error);
					});
				}
			}
		},
		computed:{
			userErrors(){
				var errorText,status;
				if(!(/^[A-Z]+\d{5}$/.test(this.username))){
					status=false;
					errorText='用户名不正确';
				}else{
					status=true;
					errorText='验证通过';
				}	
				return{
					status,
					errorText
				}
			},
			passwordErrors(){
				var errorText,status;
				if(!(/^\d{6}$/.test(this.userpassword))){
					status=false;
					errorText='密码不正确';
				}else{
					status=true;
					errorText='验证通过'
				}	
				return{
					status,
					errorText
				}
			},
		}
	}

</script>