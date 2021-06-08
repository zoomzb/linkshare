<template>
    <div class="search-container align-center">
        <!-- <div class="logo v-flex">Linkshare</div> -->
        <div class="search">
            <span class="search-wrap">
            	<span class="input-prefix"><i class="fa fa-search"></i></span>
            	<input class="input-keyword" placeholder="搜索关键词" type="text" />
        	</span>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Search',

}
</script>
<style>
	.search-container {
		position: absolute;
		top: 200px;
		left: 0;
		right: 0;
		height: 78px;
		z-index: 33;
		/* background-color: #edf2f7; */
		background-color: transparent;
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
	.input-keyword {
		padding: 0 48px;
		height: 46px;
		background-color: #f5f5f5;
		border-radius: 100px;
		border: 0;
		color: #718096;
		line-height: 46px;
		width: 100%;
		box-shadow: 0 3px 5px rgb(154 166 175 / 50%);
	}

</style>