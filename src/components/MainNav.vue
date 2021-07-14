<template>
    <div class="main-container">
		<div class="left">
			<div>
				<h1></h1>
				
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
	.main-container .right {
        width: 20%;
        background-color: #ff5722;
        color: #ffffff;
        >ul {
            width: 100%;
            @include clearfix;
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

	



</style>