<template>
	<div class="reg-wrap">
		<table id='reg'>
			<form action="" >
				<tr>
					<td><label for='user'>用户名:</label></td>
					<td><input type="text" name='user' id='user' placeholder="请输入用户名" v-model='userValid'></td>
					<td>{{userV.text}}</td>
				</tr>
				<tr>
					<td><label for='pwd'>密码:</label></td>
					<td><input type="password" name='pwd' id='pwd' placeholder="请输入密码" v-model='pwdValid'></td>
					<td>{{pwdV.text}}</td>
				</tr>
				<tr>
					<td><label for='mail'>邮箱:</label></td>
					<td><input type="email" name='mail' id='mail' placeholder="请输入邮箱" v-model='emailValid'></td>
					<td>{{emailV.text}}</td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name='login'  class='login' value='注册' @click='reg'></td>
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
				userValid:'',
				pwdValid:'',
				emailValid:'',
				errorText:''
			}
		},
		methods:{
			closeRegDialog(){
				this.$emit('on-close');
			},
			reg(){
				var e=window.event||arguments[0];
				e.preventDefault();
				if(!this.userV.status||!this.pwdV.status||!this.emailV.status){
					this.errorText='部分验证未通过';
				}else{
					this.errorText='验证通过';
					this.$http.get('../../static/user.php',{user:'W12345',pwd:'123456',email:'474580624@qq.com'}).then(function(res){console.log(res.data)}).catch(function(error){console.log(error)});
				}

			}
		},
		computed:{

			userV(){
				var status,text
				if(!(/^[A-Z]?\d{5}$/.test(this.userValid))){
					status=false;
					text='验证不通过';
				}else{
					status=true;
					text="验证通过";
				}		
				return{
					status,
					text
				}
			},
			pwdV(){
				var status,text
				if(!(/^\w{6}$/.test(this.pwdValid))){
					status=false;
					text='验证不通过';
				}else{
					status=true;
					text="验证通过";
				}		
				return{
					status,
					text
				}
			},
			emailV(){
				var status,text
				if(!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.emailValid))){
					status=false;
					text='验证不通过';
				}else{
					status=true;
					text="验证通过";
				}		
				return{
					status,
					text
				}
			}

		}
	}

</script>