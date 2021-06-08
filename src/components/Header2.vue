<template>
    <div class="nav">
		<div class="nav-container">  
        	<a class="nav-logo-link">
				<img src="https://uploads-ssl.webflow.com/5f180e58c1906f15359f4591/5f465444d2c9f0a71b3e9d35_logo%20skello.svg">
			</a>

			<nav class="nav-content">
				<div class="nav-menu">
					<div class="item">
						<div class="dropdown">首页</div>
						<div class="dropdown-content">
							<a>意见反馈</a>
							<a>关于我</a>
						</div>
					</div>
				</div>
				<div class="nav-btn">
					<button class="btn-login">登录</button>
					<button class="btn-register">注册</button>
				</div>
			</nav>
		</div>
        <!-- <div class="search">
            <span class="search-wrap">
            	<span class="input-prefix"><i class="fa fa-search"></i></span>
            	<input class="vue-input" placeholder="搜索关键词" type="text" />
        	</span>
            
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'Header2',

}
</script>
<style lang="less">
	.nav {
		position: sticky;
		top: 0;
		height: 80px;
		z-index: 1000;
		align-items: center;
		color: #fff;
		/* padding-top: 20px; */
		/* padding-bottom: 20px; */
		/* background-color: #edf2f7; */
		background-color:transparent;
	}
	.nav-container {
		display: flex;
		height: 80px;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
		max-width: 1170px;
		align-items: center;
	}
	.nav-content {
		display: flex;
		width: 100%;
		height: 100%;
		margin-left: 40px;
		justify-content: space-between;

	}
	.nav-menu{
		display: flex;
		align-items: center;
	}
	.nav-btn{
		display: flex;
		align-items: center;
		width: 210px;
		justify-content: space-between;
	}

	.nav-btn button{
		border: none;
		width: 100px;
		line-height: 32px;
		border-radius: 4px;
		cursor: pointer;
	}
	.btn-login {
		color: #fff;
		background-color:transparent;
	}
	.btn-register {
		background-color: #fff;
		color:#1A6EFD;
	}

	.item{
		margin-right: 10px;
		padding-right: 8px;
		height: 100%;
	}
	.item:hover .dropdown-content{
		display: block;
	}
	.item .dropdown{
		display: flex;
		height: 100%;
		padding: 5px 6px 5px 8px;
		align-items: center;
		border-radius: 4px;
		background-color: transparent;
		cursor: pointer;
		user-select: none;
		&:hover{
			opacity: 0.7;
		}
	}
	.dropdown-content{
		display: none;
		position: absolute;
		background-color: #fff;
		border-radius: 6px;
		padding: 10px;
		/*设置一个似倒影的卡片样式*/
		box-shadow: 3px 3px 18px 0 rgb(0 0 0 / 8%);
	}
	.dropdown-content a{
		display: flex;
		width:300px;
		min-height: 50px;
		padding: 13px 15px 11px 13px;
		justify-content: flex-start;
		align-items: flex-start;
		border-radius: 4px;
		background-color: transparent;
		color:#000;
		&:hover{
			background-color: #dde9ff;
		}
	}

	



</style>