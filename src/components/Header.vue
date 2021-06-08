<template>
    <div class="header-container v-flex align-center">
        <div class="logo v-flex">Linkshare</div>
        <div class="search">
            <span class="search-wrap">
            	<span class="input-prefix"><i class="fa fa-search"></i></span>
            	<input class="vue-input" placeholder="搜索关键词" type="text" />
        	</span>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',

}
</script>
<style>
	.header-container {
		display: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 78px;
		z-index: 33;
		background-color: #edf2f7;
	}
	.logo {
		position: absolute;
		left: 30px;
	} 

	.search {
		position: relative;
		margin: 0 auto;
		width: 900px;
	}
	.input-prefix {
		position: absolute;
		left: 15px;
		top: 50%;
		display: flex;
		align-items: center;
		transform: translateY(-50%);
		color: #a0aec0;
	

	}
	.vue-input {
		padding: 0 48px;
		height: 46px;
		background-color: #e2e8f0;
		border-radius: 100px;
		border: 0;
		color: #718096;
		line-height: 46px;
		width: 100%;
	}

</style>