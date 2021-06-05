<template>
    <div class="filter-subnav container-fluid">
        <div class="filter-subnav-inner flex flex-row align-center justify-between">
	        <div class="filter-views js-shot-views">
	        	<span class="btn-dropdown btn-dropdown-neue" :class="{open:iscollapse}">
	        		<a class="form-btn outlined btn-dropdown-link" href="#" @click="dropdown">
						<i class="fa fa-caret-down btn-dropdown-caret"></i>
	        			<span>最新发布</span>
	        		</a>
	        		<div   class="select-dropdown select-dropdown-placement-bottomLeft" :class="{'slide-up-enter': iscollapse, 'slide-up-enter-active': iscollapse}">
			          <ul>
			            <li class="dropdown-menu-item" id="popular-btn">
			              <a data-track-view="Popular" href="/shots/popular">Popular</a>
			            </li>
			            <li class="dropdown-menu-item" id="recent-btn">
			              <a data-track-view="New &amp; Noteworthy" href="/shots/recent">New &amp; Noteworthy</a>
			            </li>
			            <li class="rule"></li>

			            <li class="dropdown-menu-item">
			              <a data-track-view="Goods for Sale" href="/shots/goods">Goods for Sale</a>
			            </li>
			          </ul>
			        </div>
	        	</span>
	            
	        </div>
	        <div class="filter-categories js-filter-categories js-shot-categories">
				<!-- <span class="scroll scroll-backward">
					<a class="d-none" href="#">
						<i class="fa fa-caret-left"></i>
					</a>
				</span>
				<span class="scroll scroll-forward active">
					<a class="d-none" href="#">
						<i class="fa fa-caret-right"></i>
					</a>
				</span> -->
		        <ul>
		            <li class="category sets-path">
		              <a title="All" data-param="category" data-track-sub-nav="true" href="/shots/popular/">All</a>
		            </li>
		            <li class="category sets-path">
		              <a title="Animation" data-param="category" data-value="animation" data-track-sub-nav="true" href="/shots/popular/animation">Animation</a>
		            </li>
		            <li class="category sets-path">
		              <a title="Branding" data-param="category" data-value="branding" data-track-sub-nav="true" href="/shots/popular/branding">Branding</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Illustration" data-param="category" data-value="illustration" data-track-sub-nav="true" href="/shots/popular/illustration">Illustration</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Mobile" data-param="category" data-value="mobile" data-track-sub-nav="true" href="/shots/popular/mobile">Mobile</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Print" data-param="category" data-value="print" data-track-sub-nav="true" href="/shots/popular/print">Print</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Product Design" data-param="category" data-value="product-design" data-track-sub-nav="true" href="/shots/popular/product-design">Product Design</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Typography" data-param="category" data-value="typography" data-track-sub-nav="true" href="/shots/popular/typography">Typography</a>
		            </li>
		            <li class="category sets-path ">
		              <a title="Web Design" data-param="category" data-value="web-design" data-track-sub-nav="true" href="/shots/popular/web-design">Web Design</a>
		            </li>
		        </ul>
	        </div>
	        <div class="search">
	            
	        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SubNav',
    data(){
    	return {
    		iscollapse: true,
    		styleObject: {},
    	}
    },
    methods: {
    	dropdown() {
    		this.iscollapse = !this.iscollapse;
    		this.styleObject = this.iscollapse ? {} : {display: 'none'};

    	}
    }

}
</script>
<style scoped>
	@media screen and (min-width: 959px) .filter-subnav {
	    padding-top: 32px;
	}

	.filter-subnav {
	    background: #fff;
	    position: relative;
	    padding-top: 16px;
	}

	@media (min-width: 1200px)
	.container-fluid {
	    padding-left: 72px;
	    padding-right: 72px;
	}

	@media (min-width: 768px)
	.container-fluid {
	    padding-left: 32px;
	    padding-right: 32px;
	}
	.container-fluid {
	    padding-left: 20px;
	    padding-right: 20px;
	}

	@media screen and (min-width: 1300px)
	.filter-views {
	    -ms-flex: 0 0 150px;
	    flex: 0 0 150px;
	}

	.filter-views {
	    margin-right: 40px;
	}

	.filter-views .btn-dropdown {
	    z-index: 4;
	}

	.btn-dropdown {
	    position: relative;
	    display: inline-block;
	    white-space: nowrap;
	}
	.form-btn.outlined.btn-dropdown-link {
	    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 20px;
	    -webkit-transition: color 200ms ease;
	    transition: color 200ms ease;
	    color: #6e6d7a;
	    padding: 10px 25px 10px 10px;
	    background-color: #e2e8f0;
	    border-radius: 8px;
	}

	.btn-dropdown i.btn-dropdown-caret {
	    position: absolute;
	    right: 10px;
	    top: 50%;
	    fill: currentColor;
	    width: 10px;
	    margin: 0;
	    transform: translateY(-50%);
	    -webkit-transition: -webkit-transform 0.2s ease-in-out;
	    transition: -webkit-transform 0.2s ease-in-out;
	    transition: transform 0.2s ease-in-out;
	    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
	}

	.btn-dropdown.open div.select-dropdown {
	    z-index: 2;
	    display: block;
	}

	div.select-dropdown {
	    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 20px;
	    margin-top: 4px;
	    border-radius: 8px;
	    border: 1px solid rgba(0,0,0,0.05);
	    -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
	    box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
	    background: #fff;
	    display: none;
	    left: 0;
	    min-width: 180px;
	    position: absolute;
	    top: calc(100% + 8px);
	    z-index: 1;
	}

	div.select-dropdown ul {
	    list-style: none;
	    padding: 8px 0;
	}

	.filter-categories:not(.allow-overflow) {
	    overflow-x: auto;
	    overflow-y: hidden;
	}

	.filter-categories {
	    text-align: center;
	    position: relative;
	    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 20px;
	}

	.filter-categories .category {
	    display: inline-block;
	}

	.filter-categories .category a {
	    display: inline-block;
	    color: #6e6d7a;
	    padding: 10px 12px;
	    display: inline-block;
	}

	.dropdown-menu-item {
		padding: 5px 12px;
		line-height: 22px;
		font-size: 14px;
		transition: background .3s ease;
	}
	.dropdown-menu-item:hover {
		background-color: #e6f7ff;
	}
	

</style>