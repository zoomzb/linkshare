<template>
    <div class="main-container">
		<div class="left">
				<div class="res-item" v-for="(item,index) in linkList" :key="index">
					<div class="hover-move">
						<div class="res-main">
							<gm-skeleton :showSpin="showSpin" :init="false">
								<div class="res-img">
									<img :src="item.imgUrl">
								</div>
							</gm-skeleton>
							<div class="res-content">
								<gm-skeleton :showSpin="showSpin" :init="false">
									<div class="res-content-title">{{item.title}}</div>
								</gm-skeleton>
								<gm-skeleton :showSpin="showSpin" :init="false">
									<div class="res-content-desc">{{item.desc}}</div>
								</gm-skeleton>
								<div class="res-content-footer">
									<gm-skeleton :showSpin="showSpin" :init="false">
										<div class="res-url">{{item.resUrl}}</div>
									</gm-skeleton>
									<gm-skeleton :showSpin="showSpin" :init="false">
										<div class="res-tag">
											<div class="res-tag-content" v-for="(item2,index2) in item.tags.split(',')" :key="index2">{{item2}}</div>
										</div>
									</gm-skeleton>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
		<div class="right">
			<ul>
				<!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
				<li @click="changeli(index,item)" :key="index" v-for="(item,index) in headerData">
					<!-- 在这里打印出boll值方便查看 -->
						<span :class="[{active:item.show},{'category':true}]">{{item.name}}</span>
					<!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
						<ul v-show="item.show"> 
							<!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
							<li :key="index" v-for="(a,index) in item.list" v-on:click.stop="doThis(index)">{{a}}</li>
						</ul>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
import util from '@/libs/util.js';
export default {
    name: 'MainNav',
	data () {
		return {
			headerData: [{
				name: '综合资源',
				list: ['游戏', '学习', '编程', '办公', '其他'],
				show: false
			}, {
				name: '效率工具',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '创意资源',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '游戏资源',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '素材资源',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '编程资源',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}],

			showSpin:true,
			sortFlag:false,
			page:1,
			pageSize:10,
			linkList:[
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				{categoryPId: 1,
				createTime: "",
				desc: "",
				imgUrl: "",
				linkId: 1,
				resUrl: "",
				tags: "",
				title: "",
				viewCount: 0,
				_id: "60f4f1295525ae65d796ed61"},
				
			],
			bgColorList:[
				'#e0f7e8',
				'#ccbefb',
				'#d6d8ff'
			],
			colorList:[
				'#4abf63',
				'#a253d4',
				'#7076e4'
			]
		}
	},
	methods: {
		changeli: function(ind, item) {
			// 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
			this.headerData.forEach(i => {
				// 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
				if (i.show !== this.headerData[ind].show) {
					i.show = false;
				};
			});
			// 取反(true或false)
			item.show = !item.show;
			console.log(item.name)
		},
		doThis: function(index) {
			alert(index)
		},
		getAllLinkInfo(){
            var param = {
                page:this.page,
                pageSize:this.pageSize,
                sort:this.sortFlag?1:-1
            };
            this.$axios.get("/api/link/list",{params:param})
            .then((res)=>{
              var resData = res.data.result.list;
              resData.forEach((item,index)=>{
                item.createTime = util.formatDate(new Date(item.createTime));
              });
              this.linkList = res.data.result.list;
			  this.showSpin = false;
            })
            .catch((err)=>{
              console.log(err)
            });
        },
	},
	created(){
		this.getAllLinkInfo();
	}

}
</script>
<style lang="less">
	.main-container {
		display: flex;
		flex-direction: row;
		margin-top: 150px;
		max-width: 1500px;
		margin: 150px auto 90px;
		overflow: hidden;
		box-sizing: border-box;
		.left {
			// float: left;
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			align-content: flex-start;
			width: 980px;
			.res-item {
				width: 25%;
				height: 285px;
				display: flex;
				padding: 20px;
				.hover-move {
					width: 100%;
					box-shadow: 0 3px 8px 0 rgba(0,0,0,.06);
					.res-main {
						width: 100%;
						padding: 20px 25px;
						// background-color: #fafafa;
						border-radius: 5px;
						cursor: pointer;
						position: relative;
						transition: all .3s;
						.res-img {
							width: 70px;
							height: 70px;
							border-radius: 50%;
							overflow: hidden;
							position: relative;
							font-size: 20px;
							line-height: 70px;
							img {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								user-select: none;
							}
						}
						.res-content {
							margin-top: 5px;
							.res-content-title {
								font-weight: 800;
								font-size: 20px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								color: black;
								height: 30px;
							}
							.res-content-desc {
								font-size: 10px;
								margin-top: 10px;
								height: 38px;
								word-break: break-all;
								text-overflow: ellipsis;
								// white-space: nowrap;
								overflow: hidden;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							}
							.res-content-footer {
								font-size: 8px;
								.res-url {
									// width: fit-content;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-weight: 500;
									cursor: pointer;
									margin-top: 10px;
									height: 15px;
								}
								.res-tag {
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
									display: flex;
									margin-top: 10px;
									min-height: 18px;
									.res-tag-content:not(:first-child){
										margin-left: 5px;
									}
									.res-tag-content {
										padding: 0 10px;
										cursor: pointer;
										background-color: #e4dfdf;
										color: black;
										border-radius: 2px;
									}
								}
							}
						}
					}
				}
			}
		}
		.right {
			user-select: none;
			margin-top: 20px;
			width: 15%;
			height: 800px;
			background-color: transparent;
			color: #0a1a33;
			>ul {
				width: 100%;
				// @include clearfix;
				&::after {
					display: block;
					content: "";
					clear: both;
				}
				>li {
					width: 100%;
					border: 1px solid #ffffff;
					cursor: pointer; // float: left;
					color: 20px;
					text-align: center;
					line-height: 60px;
					// &:hover category {
					// 	background-color: #dde9ff;
					// }
					.category {
						display: inline-block;
						width: 100%;
						font-size: 28px;
						&:hover {
							background-color: #dde9ff;
						}
					}
					>ul {
						width: 100%;
						// background: red;
						// li{
						// 	&:hover{
						// 		background: #dde9ff;
						// 	}
						// }
					}
				}
				.active {
					background-color: #dde9ff;
				}
			}
		}
	}

	// 骨架屏
	.gm-skeleton {
		background-image: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%) !important;
		background-color: transparent !important;
		background-size: 400% 100%;
		animation: skeleton-loading 1.5s ease-in infinite;
		min-height: .3rem;
		min-width: 1rem;
	}
	
	@keyframes skeleton-loading {
		from {
		background-position: 100% 50%;
		}
		to {
		background-position: 0 50%;
		}
	}
</style>