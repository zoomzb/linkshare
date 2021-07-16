<template>
    <div class="main-container">
		<div class="left">
			<div class="res-item">
				<div class="hover-move">
					<div class="res-main">
						<div class="res-img">
							<img src="https://linkfind.cn/api/image/1625552806140.png">
						</div>
						<div class="res-content">
							<div class="res-content-title">PALX</div>
							<div class="res-content-desc">免费！自动 UI 调色板生成器，只需要提供一个主色值，即可根据算法返回需要的整套色板，非常的方便快捷，快来试试吧</div>
							<div class="res-content-footer">
								<div class="res-url">palx.jxnblk.com</div>
								<div class="res-tag">
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="res-item">
				<div class="hover-move">
					<div class="res-main">
						<div class="res-img">
							<img src="https://linkfind.cn/api/image/1625552806140.png">
						</div>
						<div class="res-content">
							<div class="res-content-title">PALX</div>
							<div class="res-content-desc">免费！自动 UI 调色板生成器，只需要提供一个主色值，即可根据算法返回需要的整套色板，非常的方便快捷，快来试试吧</div>
							<div class="res-content-footer">
								<div class="res-url">palx.jxnblk.com</div>
								<div class="res-tag">
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="res-item">
				<div class="hover-move">
					<div class="res-main">
						<div class="res-img">
							<img src="https://linkfind.cn/api/image/1625552806140.png">
						</div>
						<div class="res-content">
							<div class="res-content-title">PALX</div>
							<div class="res-content-desc">免费！自动 UI 调色板生成器，只需要提供一个主色值，即可根据算法返回需要的整套色板，非常的方便快捷，快来试试吧</div>
							<div class="res-content-footer">
								<div class="res-url">palx.jxnblk.com</div>
								<div class="res-tag">
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="res-item">
				<div class="hover-move">
					<div class="res-main">
						<div class="res-img">
							<img src="https://linkfind.cn/api/image/1625552806140.png">
						</div>
						<div class="res-content">
							<div class="res-content-title">PALX</div>
							<div class="res-content-desc">免费！自动 UI 调色板生成器，只需要提供一个主色值，即可根据算法返回需要的整套色板，非常的方便快捷，快来试试吧</div>
							<div class="res-content-footer">
								<div class="res-url">palx.jxnblk.com</div>
								<div class="res-tag">
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="res-item">
				<div class="hover-move">
					<div class="res-main">
						<div class="res-img">
							<img src="https://linkfind.cn/api/image/1625552806140.png">
						</div>
						<div class="res-content">
							<div class="res-content-title">PALX</div>
							<div class="res-content-desc">免费！自动 UI 调色板生成器，只需要提供一个主色值，即可根据算法返回需要的整套色板，非常的方便快捷，快来试试吧</div>
							<div class="res-content-footer">
								<div class="res-url">palx.jxnblk.com</div>
								<div class="res-tag">
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
									<div class="res-tag-content">PLAX</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<ul>
				<!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
				<li :class="[{active:item.show}]" @click="changeli(index,item)" :key="index" v-for="(item,index) in headerData">
					<!-- 在这里打印出boll值方便查看 -->
					{{item.name}}{{item.show}}
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
export default {
    name: 'MainNav',
	data () {
		return {
			headerData: [{
				name: '导航1',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '导航2',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '导航3',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '导航4',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}, {
				name: '导航5',
				list: ['子集', '子集', '子集', '子集', '子集'],
				show: false
			}]
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
		}
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
			width: 980px;
			.res-item {
				width: 25%;
				display: flex;
				padding: 20px;
				.hover-move {
					width: 100%;
					.res-main {
						width: 100%;
						padding: 20px 25px;
						background-color: #f5f5f5;
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
								user-select: none;
								width: 100%;
							}
						}
						.res-content {
							.res-content-title {
								font-weight: 800;
								font-size: 20px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								color: black;
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
									width: fit-content;
									overflow: hidden;
									font-weight: 500;
									text-overflow: ellipsis;
									white-space: nowrap;
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
			position: flex;
			margin-top: 20px;
			width: 20%;
			background-color: #ff5722;
			color: #ffffff;
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
					&:hover {
						background-color: #ff9800;
					}
					>ul {
						width: 100%;
						background: red;
						li{
							&:hover{
								background: #c31111;
							}
						}
					}
				}
				.active {
					background-color: #ff9800;
				}
			}
		}

	}

	
	
	

</style>